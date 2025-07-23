import { Fab, Typography } from "@mui/material";
import { store } from "../../app/store";
import { useDispatch } from "react-redux";
import { resetScore, setQuizActive } from "../../app/kanaSlice";

export default function StartQuizButton() {
  const dispatch = useDispatch();
  const onClick = () => {
    console.log("Start quiz", store.getState().kana.selectedKanaGroups);

    dispatch(setQuizActive(true));
    dispatch(resetScore());
  };

  return (
    <Fab
      variant="extended"
      color="primary"
      size="large"
      onClick={onClick}
      sx={{ position: "fixed", bottom: 10 }}
    >
      <Typography>Start Quiz</Typography>
    </Fab>
  );
}
