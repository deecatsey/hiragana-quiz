import { Stack } from "@mui/material";
import { HiraganaTable } from "../components/start-quiz/HiraganaTable";
import StartQuizButton from "../components/start-quiz/StartQuizButton";

export default function SelectionPage() {
  return (
    <Stack alignItems="center">
      <h1>Know your kana</h1>
      <HiraganaTable />
      <StartQuizButton />
    </Stack>
  );
}
