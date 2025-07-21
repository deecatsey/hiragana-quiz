import { Stack } from "@mui/material";
import { HiraganaTable } from "../components/start-quiz/HiraganaTable";
import StartQuizButton from "../components/start-quiz/StartQuizButton";
import SelectSettings from "../components/start-quiz/SelectSettings";
import { KatakanaTable } from "../components/start-quiz/KatakanaTable";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

export default function SelectionPage() {
  const hiragana = useSelector(
    (state: RootState) => state.kana.settings.systems["hiragana"].checked
  );
  const katakana = useSelector(
    (state: RootState) => state.kana.settings.systems["katakana"].checked
  );

  return (
    <Stack alignItems="center" spacing={4}>
      <h1>Know your kana</h1>

      <SelectSettings />
      {hiragana && <HiraganaTable />}
      {katakana && <KatakanaTable />}
      <StartQuizButton />
    </Stack>
  );
}
