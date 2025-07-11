import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { KanaGroupKey, Score } from "../types/types";

export interface KanaState {
  quizMode: boolean;
  selectedKanaGroups: KanaGroupKey[];
  score: Score;
}

const initialState: KanaState = {
  quizMode: false,
  selectedKanaGroups: [],
  score: { correct: 0, wrong: 0 },
};

export const kanaSlice = createSlice({
  name: "kana",
  initialState,
  reducers: {
    setQuizMode: (state, action: PayloadAction<boolean>) => {
      state.quizMode = action.payload;
    },
    addKanaGroup: (state, action: PayloadAction<KanaGroupKey>) => {
      state.selectedKanaGroups.push(action.payload);
      console.log("State is now", action.payload, [
        ...state.selectedKanaGroups,
      ]);
    },

    removeKanaGroup: (state, action: PayloadAction<KanaGroupKey>) => {
      state.selectedKanaGroups = state.selectedKanaGroups.filter(
        (kanaGroup) => kanaGroup !== action.payload
      );
    },
    clearGroups: (state) => {
      state.selectedKanaGroups = [];
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
  addKanaGroup,
  removeKanaGroup,
  clearGroups,
  updateScore,
  resetScore,
} = kanaSlice.actions;

export default kanaSlice.reducer;
