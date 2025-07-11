import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import SelectionPage from "./SelectionPage";
import QuizPage from "./QuizPage";

export default function IndexPage() {
  const quizMode = useSelector((state: RootState) => state.kana.quizMode);

  if (quizMode) return <QuizPage />;
  return <SelectionPage />;
}
