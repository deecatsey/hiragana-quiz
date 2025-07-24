import { FormControl, RadioGroup } from "@mui/material";
import { QuizModes } from "../../resources/QuizModes";
import type { QuizMode, QuizModeOption } from "../../types/types";
import QuizModeOptionComponent from "./QuizModeOptionComponent";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuizMode } from "../../app/kanaSlice";
import type { RootState } from "../../app/store";
import { useAppSettings } from "../../hooks/useAppSettings";

export default function QuizModeRadio() {
  const dispatch = useDispatch();
  const { loadSettings, saveSettings } = useAppSettings("quiz-mode");
  const quizMode = useSelector((state: RootState) => state.kana.quizMode);

  // Load persisted setting once and hydrate Redux
  useEffect(() => {
    loadSettings().then((savedMode) => {
      if (savedMode) {
        dispatch(setQuizMode(savedMode as QuizMode));
      }
    });
  }, [dispatch, loadSettings]);

  const onChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value },
      } = e;
      dispatch(setQuizMode(value as QuizMode));
      await saveSettings({ key: "quiz-mode", value });
    },
    [dispatch, saveSettings]
  );

  const modes = Object.values(QuizModes).map((mode: QuizModeOption) => (
    <QuizModeOptionComponent
      key={`quiz-option-${mode.id}`}
      id={mode.id}
      checked={quizMode === mode.id}
      label={mode.label}
      onChange={onChange}
    />
  ));

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {modes}
      </RadioGroup>
    </FormControl>
  );
}
