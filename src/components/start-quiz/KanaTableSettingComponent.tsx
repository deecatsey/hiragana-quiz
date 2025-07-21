import type { KanaTableSettingsKey } from "../../types/types";
import { toggleKanaTableSetting } from "../../app/kanaSlice";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "../../app/store";
import type { KanaTableSettingsPayload } from "../../app/types";
import { KanaSettingComponent } from "./KanaSettingComponent";
import { useCallback } from "react";

export type KanaTableSettingComponentProps = {
  kanaKey: KanaTableSettingsKey;
};

export function KanaTableSettingComponent({
  kanaKey,
}: KanaTableSettingComponentProps) {
  const dispatch = useDispatch();
  const kanaSetting = useSelector(
    (state: RootState) => state.kana.settings.tables[kanaKey]
  );

  const { label, checked } = kanaSetting;
  const updateSetting = useCallback(() => {
    const kanaSetting: KanaTableSettingsPayload = {
      key: kanaKey,
      label,
      checked: !checked,
    };
    dispatch(toggleKanaTableSetting(kanaSetting));
  }, [dispatch, checked, label, kanaKey]);

  return (
    <KanaSettingComponent
      label={label}
      checked={checked}
      toggleSetting={updateSetting}
    />
  );
}
