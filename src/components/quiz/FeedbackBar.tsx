import { Alert, Stack } from "@mui/material";

export type FeedbackBarProps = {
  kana: string;
  choice: string | null;
  correctAnswer: string;
};

export default function FeedbackBar({
  kana,
  choice,
  correctAnswer,
}: FeedbackBarProps) {
  const success = choice === correctAnswer;
  const severity = success ? "success" : "error";
  const feedbackText = success ? "Correct!" : "False";

  const feedbackSX = choice
    ? { visibility: "visible" }
    : { visibility: "hidden" };

  return (
    <Alert variant="filled" severity={severity} sx={feedbackSX}>
      <Stack direction="row" spacing={2}>
        {`${feedbackText} ${kana} = ${correctAnswer.toUpperCase()}`}
      </Stack>
    </Alert>
  );
}
