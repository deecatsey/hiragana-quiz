import { Button, Typography } from "@mui/material";

// import { useRef } from "react";

export type AnswerButtonProps = {
  option: string;
  onAnswer: (answer: string) => void;
};
export default function AnswerButton({ option, onAnswer }: AnswerButtonProps) {
  // const buttonRef = useRef<HTMLButtonElement>(null);

  const onClick = () => {
    onAnswer(option);
    // buttonRef.current?.blur();
  };

  return (
    <Button /* ref={buttonRef}*/ variant="outlined" onClick={onClick}>
      <Typography>{option}</Typography>
    </Button>
  );
}
