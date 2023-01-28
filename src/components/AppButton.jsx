import { styled, Button } from "@mui/material";

export const AppButton = styled(Button)(({ theme }) => ({
  color: theme.palette.green.main,
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.green.main}`,
  borderRadius: theme.shape.borderRadius,
  padding: "12px 16px",
  textTransform: "none",
  fontSize: 12,
  lineHeight: 1,
  textDecoration: "none",
  cursor: "pointer",
  transition: "all 0.4s ease",
  ":hover": {
    translate: "0 -3px",
  },
}));
