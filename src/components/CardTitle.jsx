import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";

function CardTitle({ children }) {
  const theme = useTheme();
  return (
    <Typography
      gutterBottom
      variant="h6"
      component="div"
      fontSize={15}
      fontWeight={600}
      lineHeight={1.35}
      color={theme.palette.slate[200]}
      sx={{
        ":hover": {
          color: theme.palette.green.main,
        },
      }}
    >
      {children}
    </Typography>
  );
}

export default CardTitle;
