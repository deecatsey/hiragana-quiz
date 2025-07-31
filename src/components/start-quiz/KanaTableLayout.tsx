import { Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

export type KanaTableLayoutProps = {
  title: ReactNode;
  kanaNodes: ReactNode;
  children?: ReactNode;
};

export default function KanaTableLayout({
  title,
  kanaNodes,
  children,
}: KanaTableLayoutProps) {
  return (
    <Stack spacing={2} m={2} width="100%" alignItems="center">
      <Typography variant="h6">{title}</Typography>
      <Stack spacing={1}>{kanaNodes}</Stack>

      {children}
    </Stack>
  );
}
