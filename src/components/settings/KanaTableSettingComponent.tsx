import type { AppTableSettings, KanaTableSettingsKey } from "../../types/types";
import { setKanaTableSetting } from "../../app/kanaSlice";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "../../app/store";
import type { KanaTableSettingsPayload } from "../../app/types";
import { KanaSettingComponent } from "./KanaSettingComponent";
import { useCallback, useEffect } from "react";
import { useAppSettings } from "../../hooks/useAppSettings";

export type KanaTableSettingComponentProps = {
  kanaKey: KanaTableSettingsKey;
};

export function KanaTableSettingComponent({
  kanaKey,
}: KanaTableSettingComponentProps) {
  const dispatch = useDispatch();
  const { loadSettings, saveNestedSetting } = useAppSettings("kana-tables");

  const kanaSetting = useSelector(
    (state: RootState) => state.kana.settings.tables[kanaKey]
  );

  const { label, checked } = kanaSetting;

  // Load persisted setting once and hydrate Redux
  useEffect(() => {
    loadSettings().then((savedTables) => {
      if (!savedTables) return;
      const checked = (savedTables as AppTableSettings)[kanaKey];
      const kanaSetting: KanaTableSettingsPayload = {
        key: kanaKey,
        label,
        checked,
      };
      dispatch(setKanaTableSetting(kanaSetting));
    });
  }, [dispatch, loadSettings, kanaKey, label]);

  const updateSetting = useCallback(async () => {
    const kanaSetting: KanaTableSettingsPayload = {
      key: kanaKey,
      label,
      checked: !checked,
    };
    dispatch(setKanaTableSetting(kanaSetting));
    await saveNestedSetting({
      key: "kana-tables",
      subKey: kanaKey,
      value: !checked,
    });
  }, [dispatch, checked, label, kanaKey, saveNestedSetting]);

  return (
    <KanaSettingComponent
      label={label}
      checked={checked}
      toggleSetting={updateSetting}
    />
  );
}
