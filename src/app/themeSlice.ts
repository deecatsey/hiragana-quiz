import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ThemeMode } from "./types";
import { loadThemeMode } from "../utils/theme-utils";

// Theme slice
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "system" as ThemeMode,
    loaded: false,
  },
  reducers: {
    setThemeMode(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadThemeMode.fulfilled, (state, action) => {
      state.mode = action.payload;
      state.loaded = true;
    });
  },
});

export const { setThemeMode } = themeSlice.actions;
export default themeSlice.reducer;
