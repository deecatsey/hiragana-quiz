import { Box, Container, Stack, useTheme } from "@mui/material";
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
  const theme = useTheme();
  return (
    <Stack alignItems="center" width="100%">
      <Container
        id="header"
        sx={{
          position: "absolute",
          top: 0,
          zIndex: 1,
          "&::after": {
            content: '""',
            position: "fixed",
            top: 0,
            left: 0,
            right: "20px", // scrollbar width
            height: "8rem",
            pointerEvents: "none",
            background: `linear-gradient(to top, rgba(253, 0, 177, 0) 0%, ${theme.palette.grey[900]} 55%)`,
            transition: "opacity 0.3s ease",
            zIndex: -1,
          },
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
        }}
      >
        <Box
          sx={{
            py: "6rem",
            "&::after": {
              content: '""',
              position: "fixed",
              bottom: 0,
              left: 0,
              right: "20px", // scrollbar width
              height: "10rem",
              pointerEvents: "none",
              background: `linear-gradient(rgba(253, 0, 177, 0) 0%, ${theme.palette.grey[900]} 55%)`,
              transition: "opacity 0.3s ease",
            },
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
