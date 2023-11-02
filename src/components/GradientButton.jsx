import { styled, Button } from "@mui/material";

const GradientButton = styled(Button)(({ theme }) => ({
  fontFamily: "inter",
  fontSize: 13,
  background: "linear-gradient(to right, rgb(249, 38, 174), rgb(128, 40, 238))",
  borderRadius: "25px",
  border: 0,
  color: "white",
  cursor: "pointer",
  transition: "all 0.4s ease",
  ":hover": {
    translate: "0 -2px",
  },
  padding: "10px 28px",
  
}));

export default GradientButton;
