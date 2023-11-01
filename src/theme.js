import { createTheme } from "@mui/material";
import  "./assets/avertastd-regular-webfont.woff"

export const theme = createTheme({
  palette: {
    pink : {
      main : "#ff75d3",
      accent : 'rgba(255, 117, 211,0.1)'
    },
    violet : {
      main : "#8b5cf6",
      accent : 'rgba(139,92,246,0.1)'
    },
    green: {
      main: "#64ffda",
      accent : "rgba(94,234,212,0.1)"
    },
    slate: {
      200: "#ccd6f6",
      400: "#8892b0",
    },
    blue: {
      800: "rgba(13,18,36,1)",
      400: "#112240",
      200: "#233554",
    },
  },
  typography: {

    fontFamily: "averta",
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
