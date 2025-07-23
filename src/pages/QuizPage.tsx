import { useDispatch, useSelector } from "react-redux";

import { generateQuestion } from "../utils/quiz-utils";
import type { RootState } from "../app/store";
import { clearGroups, setQuizActive, updateScore } from "../app/kanaSlice";
import { useCallback, useEffect, useState } from "react";
import type { KanaQuestion } from "../types/types";
import FeedbackBar from "../components/quiz/FeedbackBar";

import { getKanaData } from "../resources/kanaData";
import QuizMultipleChoice from "./QuizMultipleChoice";
import QuizTextInput from "./QuizTextInput";

export default function QuizPage() {
  const dispatch = useDispatch();

  const quizMode = useSelector((state: RootState) => state.kana.quizMode);

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

  const quizAnswerInput =
    quizMode === "multiple-choice" ? (
      <QuizMultipleChoice
        currentQuestion={currentQuestion}
        disableButtons={selectedAnswer !== null}
        onSelectAnswer={onSelectAnswer}
        onClickNext={onClickNext}
        onClickBack={onClickBack}
        feedbackBar={feedbackBar}
      />
    ) : (
      <QuizTextInput
        currentQuestion={currentQuestion}
        disableButtons={selectedAnswer !== null}
        onSelectAnswer={onSelectAnswer}
        onClickNext={onClickNext}
        onClickBack={onClickBack}
        feedbackBar={feedbackBar}
      />
    );

  return quizAnswerInput;
}
