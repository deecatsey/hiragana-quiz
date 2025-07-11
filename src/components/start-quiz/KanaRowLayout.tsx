import { Paper, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";
import type { KanaEntry } from "../../types/types";

export type KanaRowLayoutProps = {
  children: ReactNode;
  rowName: string;
  kanaEntries: KanaEntry[];
  isSelected: boolean;
};

export default function KanaRowLayout({
  children,
  rowName,
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
    <Stack m={2}>
      <Paper sx={selectedSx}>
        <Stack direction="row" alignItems="center" spacing={3} p={2}>
          {children}
          <Typography variant="h6">Row: {rowName}</Typography>
          <Stack direction="row">{kanaRow}</Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}
