import { useDispatch, useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { generateQuestion } from "../utils/quiz-utils";
import type { RootState } from "../app/store";
import { Fab } from "@mui/material";
import { clearGroups, setQuizActive, updateScore } from "../app/kanaSlice";
import { useCallback, useEffect, useState } from "react";
import type { KanaQuestion } from "../types/types";
import FeedbackBar from "../components/quiz/FeedbackBar";
import ScoreIndicator from "../components/quiz/ScoreIndicator";
import QuizPageLayout from "./QuizPageLayout";
import { getKanaData } from "../resources/kanaData";

export default function QuizPage() {
  const dispatch = useDispatch();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const selectedKanaGroups = useSelector(
    (state: RootState) => state.kana.selectedKanaGroups
  );

  const selectedTables = useSelector(
    (state: RootState) => state.kana.settings.tables
  );

  const selectedSystems = useSelector(
    (state: RootState) => state.kana.settings.systems
  );

  // HIRAGANA and/or KATAKANA
  const kanaMap = getKanaData(selectedTables, selectedSystems);

  const [currentQuestion, setCurrentQuestion] = useState<KanaQuestion | null>(
    null
  );

  useEffect(() => {
    const currQuestion = generateQuestion(selectedKanaGroups, kanaMap);
    setCurrentQuestion(currQuestion);
  }, []);

  const { kana, answer } = currentQuestion || {
    kana: "",
    answer: "",
  };

  const onClickBack = () => {
    dispatch(setQuizActive(false));
    dispatch(clearGroups());
  };

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

  const feedbackBar = (
    <FeedbackBar kana={kana} choice={selectedAnswer} correctAnswer={answer} />
  );

  const nextButton = (
    <Fab
      variant="extended"
      color="primary"
      onClick={onClickNext}
      sx={selectedAnswer ? { visibility: "visible" } : { visibility: "hidden" }}
    >
      <ArrowForwardIcon />
      Next
    </Fab>
  );

  return (
    <QuizPageLayout
      currentQuestion={currentQuestion}
      onClickBack={onClickBack}
      onClickBackIcon={<ArrowBackIcon />}
      scoreIndicator={<ScoreIndicator />}
      onSelectAnswer={onSelectAnswer}
      feedbackBar={feedbackBar}
      nextButton={nextButton}
      disableButtons={selectedAnswer !== null}
    />
  );
}
