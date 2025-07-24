import { FormControlLabel, MenuItem, Radio, Stack } from "@mui/material";

export type QuizModeOptionComponentProps = {
  label: string;
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function QuizModeOptionComponent({
  id,
  label,
  checked,
  onChange,
}: QuizModeOptionComponentProps) {
  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setValue((event.target as HTMLInputElement).value);
  //   };

  return (
    <MenuItem>
      <Stack direction="row" alignItems="center" /* onClick={onChange}*/>
        <FormControlLabel
          key={`quiz-option-${id}`}
          value={id}
          control={<Radio checked={checked} onChange={onChange} />}
          label={label}
          sx={{ pl: "12px" }}
        />
      </Stack>
    </MenuItem>
  );
}
