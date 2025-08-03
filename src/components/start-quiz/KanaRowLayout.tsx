import { Button, Stack, Typography } from "@mui/material";
import { type ReactNode } from "react";
import type { KanaEntry } from "../../types/types";

export type KanaRowLayoutProps = {
  children: ReactNode;
  rowName: string;

  kanaEntries: KanaEntry[];
  onClickRow: () => void;
  isSelected: boolean;
};

export default function KanaRowLayout({
  children,
  rowName,
  onClickRow,
  kanaEntries,
  isSelected,
}: KanaRowLayoutProps) {
  const kanaRow = kanaEntries.map((char) => (
    <Stack key={`row-layout-${char.romanji}`}>
      <Typography key={char.kana} variant="h2">
        {char.kana}
      </Typography>
      <Typography>{char.romanji}</Typography>
    </Stack>
  ));

  const selectedSx = isSelected ? { backgroundColor: "primary.light" } : {};

  return (
    <Button
      onClick={onClickRow}
      sx={{
        ...selectedSx,
        justifyContent: "start",
        p: 0,
        "&:focus": {
          outline: "none",
        },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="start"
        spacing={1}
      >
        {children}
        <Typography variant="h4">{rowName}</Typography>
        <Stack direction="row" flexWrap="wrap" p={1}>
          {kanaRow}
        </Stack>
      </Stack>
    </Button>
  );
}
