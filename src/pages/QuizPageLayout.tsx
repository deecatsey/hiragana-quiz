import { Fab, Grid, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";
import { Capacitor } from "@capacitor/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PageLayout from "./PageLayout";

export type QuizPageLayoutProps = {
  kana: string;
  onClickBack: () => void;
  scoreIndicator: ReactNode;
  feedbackBar: ReactNode;
  nextButton: ReactNode;
  answerComponent: ReactNode;
};

//TODO: should these use a different layout component? (Spoiler alter: probably)

export default function QuizPageLayout({
  kana,
  onClickBack,
  scoreIndicator,
  answerComponent,
  feedbackBar,
  nextButton,
}: QuizPageLayoutProps) {
  const isNative = Capacitor.isNativePlatform();
  // const platform = Capacitor.getPlatform(); // 'ios' | 'android' | 'web'

  // const appSx = isNative
  //   ? {
  //       height: "calc(var(--vh, 1vh) * 100)",
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }
  //   : {};

  console.log(isNative);

  return (
    <PageLayout
      header={
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Fab variant="extended" color="secondary" onClick={onClickBack}>
            <ArrowBackIcon />
            Back to Selection
          </Fab>
        </Stack>
      }
    >
      <Stack alignItems="center">
        <Stack justifyContent="start" spacing={3} p={8}>
          <Stack alignItems="end">{scoreIndicator}</Stack>
          <Stack alignItems="center">
            <Typography variant="h1">{kana}</Typography>
          </Stack>
          <Grid container spacing={2}>
            {answerComponent}
          </Grid>

          {feedbackBar}
          <Stack direction="row" justifyContent="center">
            {nextButton}
          </Stack>
        </Stack>
      </Stack>
    </PageLayout>
  );
}
