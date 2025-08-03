import { Box, Container, Stack } from "@mui/material";
import type { ReactNode } from "react";

export type PageLayoutProps = {
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
};

// TODO: change height proportions with different device screen sizes in mind
// TODO: dynamic scrollbar width/offset on gradient

export default function PageLayout({
  header,
  children,
  footer,
}: PageLayoutProps) {
  return (
    <Stack alignItems="center" width="100%">
      <Container
        id="header"
        sx={{
          position: "absolute",
          top: 0,
          zIndex: 1,
        }}
      >
        <Stack alignItems="center" p={2}>
          {header}
        </Stack>
      </Container>
      <Box
        id="content"
        className="scroll-container"
        sx={{
          width: "100%",
          height: "100vh",
          position: "relative",
          overflow: "auto",
          maskImage:
            "linear-gradient(transparent 3%, white 18%, white 87%, transparent 97%)",
        }}
      >
        <Box
          sx={{
            py: "6rem",
          }}
        >
          {children}
        </Box>
      </Box>
      <Container id="footer" sx={{ position: "absolute", bottom: 0 }}>
        <Stack alignItems="center" p={2}>
          {footer}
        </Stack>
      </Container>
    </Stack>
  );
}
