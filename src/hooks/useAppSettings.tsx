import { useCallback } from "react";
import { Preferences } from "@capacitor/preferences";
import type { AppSetting } from "../types/types";
/**
 * Apple Privacy Manifest Requirements

Apple mandates that app developers now specify approved reasons for API usage to enhance user privacy. By May 1st, 2024, it's required to include these reasons when submitting apps to the App Store Connect.

When using this specific plugin in your app, you must create a PrivacyInfo.xcprivacy file in /ios/App or use the VS Code Extension to generate it, specifying the usage reasons.

For detailed steps on how to do this, please see the Capacitor Docs.

For this plugin, the required dictionary key is NSPrivacyAccessedAPICategoryUserDefaults and the recommended reason is CA92.1.


SEE: https://capacitorjs.com/docs/apis/preferences
 */
export const useAppSettings = (settingsKey: string) => {
  const loadSettings = useCallback(async (): Promise<string | undefined> => {
    const result = await Preferences.get({ key: settingsKey });
    return result.value ? JSON.parse(result.value) : undefined;
  }, [settingsKey]);

  const saveSettings = async (newSettings: AppSetting) => {
    const { key, value } = newSettings;
    await Preferences.set({
      key,
      value: JSON.stringify(value),
    });
  };

  return [loadSettings, saveSettings] as const;
};
