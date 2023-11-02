import { styled, Button } from "@mui/material";

const AppButton = styled(Button)(({ theme }) => ({
  display : "inline-flex",
  columnGap : 2,
  color: theme.palette.green.main,
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.green.main}`,
  borderRadius: theme.shape.borderRadius,
  padding: "12px 16px",
  textTransform: "none",
  fontSize: 13,
  lineHeight: 1,
  textDecoration: "none",
  cursor: "pointer",
  transition: "all 0.4s ease",
  ":hover": {
    translate: "0 -2px",
    backgroundColor : theme.palette.green.accent
  },
}));

export default AppButton;
