import { Fab, Grid } from "@mui/material";
import AnswerButton from "../components/quiz/text-input/multiple-choice/AnswerButton";
import QuizPageLayout from "./QuizPageLayout";
import type { KanaQuestion } from "../types/types";
import type { ReactNode } from "react";
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

export default function QuizMultipleChoice({
  currentQuestion,
  onSelectAnswer,
  disableButtons,
  onClickNext,
  onClickBack,
  feedbackBar,
}: QuizPageLayoutProps) {
  const { kana, options } = currentQuestion || {
    kana: "",
    answer: "",
    options: [],
  };

  const choices = options.map((option) => (
    <Grid key={`answer-${option}`} size={4}>
      <AnswerButton
        option={option}
        onAnswer={onSelectAnswer}
        disabled={disableButtons}
      />
    </Grid>
  ));

  const nextButton = (
    <Fab
      variant="extended"
      color="primary"
      onClick={onClickNext}
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
      answerComponent={choices}
    />
  );
}
