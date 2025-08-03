import { Fab, Stack, TextField } from "@mui/material";

export default function FeedbackForm() {
  const onClick = () => {
    console.log("Send feedback to email.");
  };
  return (
    <Stack>
      <TextField
        id="feedback-form-textarea"
        label="Feedback"
        placeholder="Let us know your thoughts...!"
        multiline
      />
      <Fab onClick={onClick}>Send feedback</Fab>
    </Stack>
  );
}
