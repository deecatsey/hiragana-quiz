import { Box, Stack, Typography } from "@mui/material";
import { HiraganaTable } from "../components/start-quiz/HiraganaTable";
import StartQuizButton from "../components/start-quiz/StartQuizButton";
import SelectSettings from "../components/settings/SelectSettings";
import { KatakanaTable } from "../components/start-quiz/KatakanaTable";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import PageLayout from "./PageLayout";

import "../App.css";

export default function SelectionPage() {
  const hiragana = useSelector(
    (state: RootState) => state.kana.settings.systems["hiragana"].checked
  );
  const katakana = useSelector(
    (state: RootState) => state.kana.settings.systems["katakana"].checked
  );

  return (
    <PageLayout
      header={
        <>
          <Typography variant="h2">Know your kana</Typography>{" "}
          <SelectSettings />
        </>
      }
      footer={<StartQuizButton />}
    >
      <Box
      // className="overflow-scroll-gradient"
      // sx={{
      //   pb: 10,
      //   background: `linear-gradient(yellow 50%, blue 100%)`,
      //   overflow: "auto",
      // }}
      >
        <Stack
          // className="overflow-scroll-gradient-scroller"
          alignItems="center"
          spacing={4}
        >
          {hiragana && <HiraganaTable />}
          {katakana && <KatakanaTable />}
        </Stack>
      </Box>
    </PageLayout>
  );
}
