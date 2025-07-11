import { useDispatch, useSelector } from "react-redux";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { generateQuestion } from "../components/quiz/utils";
import type { RootState } from "../app/store";
import { hiraganaData } from "../resources/hiraganaData";
import { Fab, Grid, Typography } from "@mui/material";
import { setQuizMode, updateScore } from "../app/kanaSlice";
import { useCallback, useEffect, useState } from "react";
import type { KanaQuestion } from "../types/types";
import AnswerButton from "../components/quiz/AnswerButton";
import FeedbackBar from "../components/quiz/FeedbackBar";
import ScoreIndicator from "../components/quiz/ScoreIndicator";

export default function QuizPage() {
  const dispatch = useDispatch();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const selectedKanaGroups = useSelector(
    (state: RootState) => state.kana.selectedKanaGroups
  );

  // hardcoded to hiragana map only for now
  // TODO: extend and make compatible with multiple maps
  const kanaMap = hiraganaData;

  const [currentQuestion, setCurrentQuestion] = useState<KanaQuestion | null>(
    null
  );

  useEffect(() => {
    const currQuestion = generateQuestion(selectedKanaGroups, kanaMap);
    setCurrentQuestion(currQuestion);
  }, []);

  const { kana, answer, options } = currentQuestion || {
    kana: "",
    answer: "",
    options: [],
  };

  const onClickBack = () => {
    dispatch(setQuizMode(false));
  };

  //TODO: support combination of hiragana, katakana etc
  const onSelectAnswer = useCallback(
    (choice: string) => {
      setSelectedAnswer(choice);
      if (choice === answer) {
        dispatch(updateScore({ correct: 1 }));
        return;
      }
      dispatch(updateScore({ wrong: 1 }));
      console.log(choice, answer, choice === answer ? "Correct" : "False");
    },
    [answer, dispatch]
  );

  const onClickNext = useCallback(() => {
    const currQuestion = generateQuestion(selectedKanaGroups, kanaMap);
    setCurrentQuestion(currQuestion);
    setSelectedAnswer(null);
  }, [kanaMap, selectedKanaGroups]);

  const choices = options.map((option) => (
    <Grid key={`answer-${option}`} size={4}>
      <AnswerButton option={option} onAnswer={onSelectAnswer} />
    </Grid>
  ));

  return (
    <>
      <Fab variant="extended" onClick={onClickBack}>
        {/*TODO: fix icons package install*/}
        {/* <ArrowBackIcon /> */}
        Back to Selection
      </Fab>
      <ScoreIndicator />

      <Typography>{kana}</Typography>
      <Grid container spacing={2}>
        {choices}
      </Grid>

      {selectedAnswer && (
        <>
          <FeedbackBar success={selectedAnswer === answer} />
          <Fab variant="extended" onClick={onClickNext}>
            Next
          </Fab>
        </>
      )}
    </>
  );
}
