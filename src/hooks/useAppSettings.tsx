import { useCallback } from "react";
import { Preferences } from "@capacitor/preferences";
import type {
  AppSetting,
  AppSettings,
  AppSystemSettings,
  AppTableSettings,
  NestedAppSetting,
} from "../types/types";
import defaultSettingsJSON from "../resources/defaultSettings.json";

/**
 * Apple Privacy Manifest Requirements

Apple mandates that app developers now specify approved reasons for API usage to enhance user privacy. By May 1st, 2024, it's required to include these reasons when submitting apps to the App Store Connect.

When using this specific plugin in your app, you must create a PrivacyInfo.xcprivacy file in /ios/App or use the VS Code Extension to generate it, specifying the usage reasons.

For detailed steps on how to do this, please see the Capacitor Docs.

For this plugin, the required dictionary key is NSPrivacyAccessedAPICategoryUserDefaults and the recommended reason is CA92.1.


SEE: https://capacitorjs.com/docs/apis/preferences
 */
export const useAppSettings = (settingsKey: string) => {
  const defaultSettings = defaultSettingsJSON as AppSettings;

  const loadSettings = useCallback(async (): Promise<
    string | AppTableSettings | AppSystemSettings | undefined
  > => {
    ////
    // Preferences.clear().then(() => console.log("Preferences cleared"));
    ///

    const { value } = await Preferences.get({ key: settingsKey });

    console.log("LOAD SETTINGS", value);
    if (value) return JSON.parse(value);
    const defaultSetting = defaultSettings[settingsKey as keyof AppSettings];
    return defaultSetting;
  }, [settingsKey, defaultSettings]);

  const saveSettings = useCallback(async (newSettings: AppSetting) => {
    const { key, value } = newSettings;

    await Preferences.set({
      key,
      value: JSON.stringify(value),
    });
  }, []);

  const saveNestedSetting = useCallback(
    async (newSettings: NestedAppSetting) => {
      const { key, subKey, value } = newSettings;

      const stored = await Preferences.get({ key });
      const settings = stored.value
        ? JSON.parse(stored.value)
        : defaultSettings[settingsKey as keyof AppSettings];

      settings[subKey] = value;
      await Preferences.set({
        key,
        value: JSON.stringify(settings),
      });
    },
    [settingsKey, defaultSettings]
  );

  return { loadSettings, saveSettings, saveNestedSetting } as const;
};
