import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { Box, Typography } from "@mui/material";

export default function ScoreIndicator() {
  const score = useSelector((state: RootState) => state.kana.score);

  const { correct, wrong } = score;

  return (
    <Box>
      <Typography>{`${correct}/${correct + wrong}`}</Typography>
    </Box>
  );
}
