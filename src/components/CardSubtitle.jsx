import { Typography } from "@mui/material";
import { theme } from "../theme";

function CardSubtitle({ children }) {
  return (
    <Typography variant="body2" fontSize={14} color={theme.palette.slate[400]}>
      {children}
    </Typography>
  );
}

export default CardSubtitle;
