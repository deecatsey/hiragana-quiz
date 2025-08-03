import { createTheme, responsiveFontSizes } from "@mui/material";

const defaultTheme = createTheme();

const customTheme = createTheme({
  colorSchemes: {
    dark: true,
    light: true,
  },
  palette: {
    primary: {
      ...defaultTheme.palette.primary,
      light: "rgba(77, 178, 255, 0.16)",
    },
    secondary: {
      light: "rgba(247, 36, 159, 0.72)",
      main: "rgba(176, 0, 103, 1)",
      dark: "rgba(101, 0, 59, 1)",
      contrastText: "#ffffffff",
    },
  },
});

let darkTheme = createTheme({
  colorSchemes: {
    dark: true,
  },
  palette: {
    mode: "dark",
    primary: {
      ...customTheme.palette.primary,
    },
    secondary: {
      ...customTheme.palette.secondary,
    },
  },
});
darkTheme = createTheme(darkTheme, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: darkTheme.palette.primary.contrastText,
          "&.Mui-disabled": {
            borderWidth: 3,
          },
        },
      },
    },
  },
});
darkTheme = responsiveFontSizes(darkTheme);

let lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      ...customTheme.palette.primary,
      contrastText: "#000000",
    },
    secondary: {
      ...customTheme.palette.secondary,
    },
  },
});
lightTheme = createTheme(lightTheme, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: lightTheme.palette.primary.contrastText,
          "&.Mui-disabled": {
            borderWidth: 3,
          },
        },
      },
    },
  },
});
lightTheme = responsiveFontSizes(lightTheme);

export { darkTheme, lightTheme };
