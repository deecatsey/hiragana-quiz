import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      light: "rgba(247, 36, 159, 0.72)",
      main: "rgba(176, 0, 103, 1)",
      dark: "rgba(101, 0, 59, 1)",
      contrastText: "#ffffffff",
    },
  },

  components: {
    MuiTypography: {
      defaultProps: {
        color: "primary.contrastText",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          "&.Mui-disabled": {
            borderWidth: 3,
          },
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
