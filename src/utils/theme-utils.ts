// themePreferences.ts
import { Preferences } from "@capacitor/preferences";
import type { ThemeMode } from "../app/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

const isValidThemeMode = (value: string | null): value is ThemeMode => {
  return value === "light" || value === "dark" || value === "system";
};

export const loadThemeMode = createAsyncThunk("theme/loadMode", async () => {
  const { value } = await Preferences.get({ key: "themeMode" });
  if (!isValidThemeMode(value)) return "system";
  return (value as ThemeMode) ?? "system";
});

export const saveThemeMode = createAsyncThunk(
  "theme/saveMode",
  async (mode: ThemeMode) => {
    await Preferences.set({ key: "themeMode", value: mode });
    return mode;
  }
);
