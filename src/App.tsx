import { ThemeProvider } from "@emotion/react";
import IndexPage from "./pages/IndexPage";
import { useMediaQuery } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { useMemo } from "react";
import { darkTheme, lightTheme } from "./theme";
// import type { StorageManager } from "@mui/material/styles";

// const storageManager = (params): StorageManager => {
//   return {
//     get: (defaultValue) => {
//       // Your implementation
//     },
//     set: (value) => {
//       // Your implementation
//     },
//     subscribe: (handler) => {
//       // Your implementation
//       return () => {
//         // cleanup
//       };
//     },
//   };
// };

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () => (prefersDarkMode ? darkTheme : lightTheme),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider
      theme={theme}
      /* storageManager={storageManager} */
    >
      <CssBaseline enableColorScheme />
      <IndexPage />
    </ThemeProvider>
  );
}

export default App;
