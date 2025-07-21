import { Fab, Grid, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";
import type { KanaQuestion } from "../types/types";
import AnswerButton from "../components/quiz/AnswerButton";

export type QuizPageLayoutProps = {
  currentQuestion: KanaQuestion | null;
  onClickBack: () => void;
  onClickBackIcon: ReactNode;
  scoreIndicator: ReactNode;
  feedbackBar: ReactNode;
  nextButton: ReactNode;
  onSelectAnswer: (choice: string) => void;
  disableButtons: boolean;
};

export default function QuizPageLayout({
  currentQuestion,
  onClickBack,
  onClickBackIcon,
  scoreIndicator,
  onSelectAnswer,
  feedbackBar,
  nextButton,
  disableButtons,
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

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Fab variant="extended" color="secondary" onClick={onClickBack}>
          {onClickBackIcon}
          Back to Selection
        </Fab>
        {scoreIndicator}
      </Stack>

      <Typography variant="h1">{kana}</Typography>
      <Grid container spacing={2}>
        {choices}
      </Grid>

      {feedbackBar}
      <Stack direction="row" justifyContent="center">
        {nextButton}
      </Stack>
    </Stack>
  );
}
