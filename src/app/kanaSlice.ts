import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { KanaGroupKey, QuizMode, Score } from "../types/types";
import type {
  KanaTableSettingsPayload,
  KanaSettingsState,
  KanaState,
  KanaSystemSettingsPayload,
} from "./types";

export const initialKanaSettings: KanaSettingsState = {
  tables: {
    gojuon: { label: "Gojuon", checked: true },
    diacritics: { label: "Gojuon diacritics" },
    diphtongs: { label: "Diphtongs" },
  },
  systems: {
    hiragana: { label: "Hiragana", checked: true },
    katakana: { label: "Katakana" },
  },
};

// TODO: REFACTOR
/**
 * STATE = {
 *  hiragana : [selectedGroups],
 *  katakana : [selectedGroups]
 * }
 */

// TODO: Make all active by default, toggle all tables (diacritics etc) when changing setting
// checkmark on visible by default
// add "SELECT ALL" option

const initialState: KanaState = {
  quizMode: "multiple-choice",
  quizActive: false,
  selectedKanaGroups: [], //getInitialKanaGroups(),
  score: { correct: 0, wrong: 0 },
  settings: initialKanaSettings,
};

export const kanaSlice = createSlice({
  name: "kana",
  initialState,
  reducers: {
    setQuizMode: (state, action: PayloadAction<QuizMode>) => {
      state.quizMode = action.payload;
    },
    setQuizActive: (state, action: PayloadAction<boolean>) => {
      state.quizActive = action.payload;
    },
    addKanaGroup: (state, action: PayloadAction<KanaGroupKey>) => {
      state.selectedKanaGroups.push(action.payload);
    },
    removeKanaGroup: (state, action: PayloadAction<KanaGroupKey>) => {
      state.selectedKanaGroups = state.selectedKanaGroups.filter(
        (kanaGroup) => kanaGroup !== action.payload
      );
    },
    clearGroups: (state) => {
      state.selectedKanaGroups = [];
    },
    toggleKanaTableSetting: (
      state,
      action: PayloadAction<KanaTableSettingsPayload>
    ) => {
      const { key, checked } = action.payload;
      if (!key) return;
      state.settings.tables[key].checked = !!checked;
    },
    toggleKanaSystemSetting: (
      state,
      action: PayloadAction<KanaSystemSettingsPayload>
    ) => {
      const { key, checked } = action.payload;
      if (!key) return;
      state.settings.systems[key].checked = !!checked;
    },
    updateScore: (state, action: PayloadAction<Partial<Score>>) => {
      state.score.correct += Math.max(0, action.payload.correct || 0);
      state.score.wrong += Math.max(0, action.payload.wrong || 0);
    },
    resetScore: (state) => {
      state.score.correct = 0;
      state.score.wrong = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setQuizMode,
  setQuizActive,
  addKanaGroup,
  removeKanaGroup,
  clearGroups,
  toggleKanaTableSetting,
  toggleKanaSystemSetting,
  updateScore,
  resetScore,
} = kanaSlice.actions;

export default kanaSlice.reducer;
