import { Button, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState, type ReactNode } from "react";
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
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef(null);
  useEffect(() => {
    const el = domRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    if (!el) return;
    observer.observe(el);

    //unobserve
    return () => {
      if (!el) return;
      observer.unobserve(el);
    };
  }, []);

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
        // className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        // ref={domRef}
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
