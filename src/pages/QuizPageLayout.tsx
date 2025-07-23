import { Fab, Grid, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export type QuizPageLayoutProps = {
  kana: string;
  onClickBack: () => void;
  scoreIndicator: ReactNode;
  feedbackBar: ReactNode;
  nextButton: ReactNode;
  answerComponent: ReactNode;
};

export default function QuizPageLayout({
  kana,
  onClickBack,
  scoreIndicator,
  answerComponent,
  feedbackBar,
  nextButton,
}: QuizPageLayoutProps) {
  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Fab variant="extended" color="secondary" onClick={onClickBack}>
          <ArrowBackIcon />
          Back to Selection
        </Fab>
        {scoreIndicator}
      </Stack>

      <Typography variant="h1">{kana}</Typography>
      <Grid container spacing={2}>
        {answerComponent}
      </Grid>

      {feedbackBar}
      <Stack direction="row" justifyContent="center">
        {nextButton}
      </Stack>
    </Stack>
  );
}
