import { Button, Typography } from "@mui/material";

// import { useRef } from "react";

export type AnswerButtonProps = {
  option: string;
  onAnswer: (answer: string) => void;
  disabled: boolean;
};
export default function AnswerButton({
  option,
  onAnswer,
  disabled,
}: AnswerButtonProps) {
  // const buttonRef = useRef<HTMLButtonElement>(null);

  const onClick = () => {
    onAnswer(option);
    // buttonRef.current?.blur();
  };

  return (
    <Button
      /* ref={buttonRef}*/ size="large"
      variant="outlined"
      color="primary"
      disabled={disabled}
      onClick={onClick}
      sx={{ width: "100%", p: "1em", borderWidth: "0.25em" }}
    >
      <Typography variant="h4">{option}</Typography>
    </Button>
  );
}
