import { ThemeProvider } from "@emotion/react";
import IndexPage from "./pages/IndexPage";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <IndexPage />
    </ThemeProvider>
  );
}

export default App;
