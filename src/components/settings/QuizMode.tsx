import { FormControl, FormLabel, RadioGroup } from "@mui/material";
import { QuizModes } from "../../resources/QuizModes";
import type { QuizMode, QuizModeOption } from "../../types/types";
import QuizModeOptionComponent from "./QuizModeOptionComponent";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuizMode } from "../../app/kanaSlice";
import type { RootState } from "../../app/store";

export default function QuizMode() {
  const dispatch = useDispatch();

  const quizMode = useSelector((state: RootState) => state.kana.quizMode);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value },
      } = e;
      dispatch(setQuizMode(value as QuizMode));
    },
    [dispatch]
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
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
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
