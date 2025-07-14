import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import SelectionPage from "./SelectionPage";
import QuizPage from "./QuizPage";
import { Container } from "@mui/material";

export default function IndexPage() {
  const quizMode = useSelector((state: RootState) => state.kana.quizMode);

  return <Container>{quizMode ? <QuizPage /> : <SelectionPage />}</Container>;
}
