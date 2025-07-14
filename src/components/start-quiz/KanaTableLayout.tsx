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
    <Stack spacing={2} m={2}>
      <Typography variant="h3">{title}</Typography>
      <Stack>{kanaNodes}</Stack>

      {children}
    </Stack>
  );
}
