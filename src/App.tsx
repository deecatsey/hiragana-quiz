import { ThemeProvider } from "@emotion/react";
import IndexPage from "./pages/IndexPage";
import { useMediaQuery } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { useEffect, useMemo } from "react";
import { darkTheme, lightTheme } from "./theme";
import { loadThemeMode } from "./utils/theme-utils";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./app/store";
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
  const dispatch = useDispatch<AppDispatch>();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  // Load saved preference on mount
  useEffect(() => {
    dispatch(loadThemeMode());
  }, [dispatch]);

  const theme = useMemo(() => {
    if (themeMode === "light") return lightTheme;
    if (themeMode === "dark") return darkTheme;
    return prefersDarkMode ? darkTheme : lightTheme;
  }, [themeMode, prefersDarkMode]);

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
