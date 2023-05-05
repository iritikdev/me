import { styled, Button, IconButton } from "@mui/material";

export const AnimatedButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.green.main,
  backgroundColor: "transparent",
  fontSize: 12,
  lineHeight: 1,
  textDecoration: "none",
  cursor: "pointer",
  padding: 0,
  minWidth: "content-box",
  transition: "all 0.4s ease",
  ":hover": {
    backgroundColor: "transparent",
    translate: "0 -3px",
    color: "blue",
  },
}));
