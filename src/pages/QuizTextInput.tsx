import { TextField } from "@mui/material";
import { Fab } from "@mui/material";
import QuizPageLayout from "./QuizPageLayout";
import type { KanaQuestion } from "../types/types";
import { useRef, type ReactNode } from "react";
import ScoreIndicator from "../components/quiz/ScoreIndicator";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export type QuizPageLayoutProps = {
  currentQuestion: KanaQuestion | null;
  onSelectAnswer: (choice: string) => void;
  disableButtons: boolean;
  onClickNext: () => void;
  onClickBack: () => void;
  feedbackBar: ReactNode;
};

export default function QuizTextInput({
  currentQuestion,
  onSelectAnswer,
  disableButtons,
  onClickNext,
  onClickBack,
  feedbackBar,
}: QuizPageLayoutProps) {
  const { kana } = currentQuestion || {
    kana: "",
    answer: "",
    options: [],
  };

  /**
   * local text state
   * diable field when answered
   */

  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    console.log(value);
  };

  const onClick = () => {
    if (!inputRef.current) return;
    const value = inputRef.current.value;
    console.log(inputRef.current);
    onSelectAnswer(value);
  };

  const inputComponent = (
    <>
      <TextField inputRef={inputRef} onChange={onChange} />
      <Fab onClick={onClick}>Check answer</Fab>
    </>
  );

  const onClickNextButton = () => {
    if (!inputRef.current) return;
    inputRef.current.value = "";
    onClickNext();
  };

  const nextButton = (
    <Fab
      variant="extended"
      color="primary"
      onClick={onClickNextButton}
      sx={disableButtons ? { visibility: "visible" } : { visibility: "hidden" }}
    >
      <ArrowForwardIcon />
      Next
    </Fab>
  );

  return (
    <QuizPageLayout
      kana={kana}
      onClickBack={onClickBack}
      scoreIndicator={<ScoreIndicator />}
      feedbackBar={feedbackBar}
      nextButton={nextButton}
      answerComponent={inputComponent}
    />
  );
}
