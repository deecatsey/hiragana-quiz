import { useDispatch, useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { generateQuestion } from "../components/quiz/utils";
import type { RootState } from "../app/store";
import { hiraganaData } from "../resources/hiraganaData";
import { Fab } from "@mui/material";
import { clearGroups, setQuizMode, updateScore } from "../app/kanaSlice";
import { useCallback, useEffect, useState } from "react";
import type { KanaQuestion } from "../types/types";
import FeedbackBar from "../components/quiz/FeedbackBar";
import ScoreIndicator from "../components/quiz/ScoreIndicator";
import QuizPageLayout from "./QuizPageLayout";

export default function QuizPage() {
  const dispatch = useDispatch();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const selectedKanaGroups = useSelector(
    (state: RootState) => state.kana.selectedKanaGroups
  );

  // hardcoded to hiragana map only for now
  // TODO: extend and make compatible with multiple maps and combinations
  const kanaMap = hiraganaData;

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
    dispatch(setQuizMode(false));
    dispatch(clearGroups());
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

  const feedbackBar = (
    <FeedbackBar kana={kana} choice={selectedAnswer} correctAnswer={answer} />
  );

  const nextButton = (
    <Fab
      variant="extended"
      onClick={onClickNext}
      sx={selectedAnswer ? { visibility: "visible" } : { visibility: "hidden" }}
    >
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
    />
  );
}
