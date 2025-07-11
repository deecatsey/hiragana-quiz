import { Alert } from "@mui/material";

export type FeedbackBarProps = {
  success: boolean;
};

export default function FeedbackBar({ success }: FeedbackBarProps) {
  const severity = success ? "success" : "error";
  const feedbackText = success ? "Correct!" : "False";
  return (
    <Alert variant="filled" severity={severity}>
      {feedbackText}
    </Alert>
  );
}
