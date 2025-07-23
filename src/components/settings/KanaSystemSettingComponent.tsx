import type { KanaSystemSettingsKey } from "../../types/types";
import { toggleKanaSystemSetting } from "../../app/kanaSlice";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "../../app/store";
import type { KanaSystemSettingsPayload } from "../../app/types";
import { useCallback } from "react";
import { KanaSettingComponent } from "./KanaSettingComponent";

export type KanaSystemSettingComponentProps = {
  kanaKey: KanaSystemSettingsKey;
};

export function KanaSystemSettingComponent({
  kanaKey,
}: KanaSystemSettingComponentProps) {
  const dispatch = useDispatch();
  const kanaSetting = useSelector(
    (state: RootState) => state.kana.settings.systems[kanaKey]
  );

  const { label, checked } = kanaSetting;
  const updateSetting = useCallback(() => {
    const kanaSetting: KanaSystemSettingsPayload = {
      key: kanaKey,
      label,
      checked: !checked,
    };
    dispatch(toggleKanaSystemSetting(kanaSetting));
  }, [dispatch, checked, label, kanaKey]);

  return (
    <KanaSettingComponent
      label={label}
      checked={checked}
      toggleSetting={updateSetting}
    />
  );
}
