import { Stack, TextField } from "@mui/material";
import { Fab } from "@mui/material";
import QuizPageLayout from "./QuizPageLayout";
import type { KanaQuestion } from "../types/types";
import React, { useEffect, useRef, useState, type ReactNode } from "react";
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

  const [disableInput, setDisableInput] = useState<boolean>(false);
  const [disableCheckButton, setDisableCheckButton] = useState<boolean>(true);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
    setDisableCheckButton(true);
  }, [kana]);

  const sendInputValue = () => {
    if (!inputRef.current) return;
    const value = inputRef.current.value;
    if (!value) return;
    onSelectAnswer(value.toLowerCase());
    setDisableInput(true);
  };

  const onClick = () => {
    sendInputValue();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Enter") return;
    sendInputValue();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    const disableCheckBtn = value === "";
    setDisableCheckButton(disableCheckBtn);
  };

  const inputComponent = (
    <Stack direction="row" alignItems="center" spacing={2}>
      <TextField
        inputRef={inputRef}
        disabled={disableInput}
        onKeyDown={onKeyDown}
        onChange={onChange}
        slotProps={{
          htmlInput: {
            style: {
              textTransform: "uppercase",
              fontSize: "1.5em",
              width: "6em",
              padding: "1em",
            },
          },
        }}
      />
      <Fab
        variant="extended"
        color="primary"
        disabled={disableInput || disableCheckButton}
        onClick={onClick}
      >
        Check answer
      </Fab>
    </Stack>
  );

  const onClickNextButton = () => {
    if (!inputRef.current) return;
    inputRef.current.value = "";
    setDisableInput(false);
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
