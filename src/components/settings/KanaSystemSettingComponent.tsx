import type {
  AppSystemSettings,
  KanaSystemSettingsKey,
} from "../../types/types";
import { setKanaSystemSetting } from "../../app/kanaSlice";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "../../app/store";
import type { KanaSystemSettingsPayload } from "../../app/types";
import { useCallback, useEffect } from "react";
import { KanaSettingComponent } from "./KanaSettingComponent";
import { useAppSettings } from "../../hooks/useAppSettings";

export type KanaSystemSettingComponentProps = {
  kanaKey: KanaSystemSettingsKey;
};

export function KanaSystemSettingComponent({
  kanaKey,
}: KanaSystemSettingComponentProps) {
  const dispatch = useDispatch();
  const { loadSettings, saveNestedSetting } = useAppSettings("kana-systems");

  const kanaSetting = useSelector(
    (state: RootState) => state.kana.settings.systems[kanaKey]
  );

  const { label, checked } = kanaSetting;

  // Load persisted setting once and hydrate Redux
  useEffect(() => {
    loadSettings().then((savedSystems) => {
      if (!savedSystems) return;
      const checked = (savedSystems as AppSystemSettings)[kanaKey];
      const kanaSetting: KanaSystemSettingsPayload = {
        key: kanaKey,
        label,
        checked,
      };
      dispatch(setKanaSystemSetting(kanaSetting));
    });
  }, [dispatch, loadSettings, kanaKey, label]);

  const updateSetting = useCallback(async () => {
    const kanaSetting: KanaSystemSettingsPayload = {
      key: kanaKey,
      label,
      checked: !checked,
    };
    dispatch(setKanaSystemSetting(kanaSetting));
    await saveNestedSetting({
      key: "kana-systems",
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
