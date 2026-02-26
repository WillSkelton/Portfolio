import { createTheme } from "@mui/material";
import "@fontsource/roboto/index.css";

const colors = {
  blue: "#0b5394",
  purple: "#61173c",
  black: "#000000",
  white: "#ffffff",
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.blue,
    },

    secondary: {
      main: colors.purple,
    },
  },
  typography: {
    fontFamily: ["Roboto", "Arial"].join(","),

    h1: {
      fontSize: "20px",
      fontWeight: 700,
      marginTop: "4px",
      marginBottom: "4px",
      color: colors.blue,
    },

    h2: {
      fontSize: "16px",
      fontWeight: 700,
      marginTop: "4px",
      marginBottom: "4px",
      color: colors.purple,
    },

    h3: {
      fontSize: "14px",
      fontWeight: 700,
      marginTop: "4px",
      marginBottom: "4px",
    },

    h4: {
      fontSize: "12px",
    },

    h5: {
      fontSize: "10px",
    },

    h6: {
      fontSize: "8px",
    },

    body1: {
      fontSize: "12px",
    },

    body2: {
      fontSize: "16px",
    },
  },
});

export { theme, colors };
