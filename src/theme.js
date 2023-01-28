import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    green: {
      main: "#64ffda",
    },
    slate: {
      200: "#ccd6f6",
      400: "#8892b0",
    },
    blue: {
      800: "#0a192f",
      400: "#112240",
      200: "#233554",
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontWeight: 700,
    },
    button: {
      fontFamily: ["Fira Code", "monospace"].join(","),
      fontSize: "1.2rem",
    },
  },
});
