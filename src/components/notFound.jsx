import { Box, Link, Typography } from "@mui/material";
import { theme } from "./../theme";
import AppButton from "./AppButton";
import { FiArrowLeft } from "react-icons/fi";

function NotFound(props) {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: 2,
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontWeight: "900",
          color: theme.palette.slate[400],
        }}
      >
        404
      </Typography>
      <Link href="/">
        <AppButton startIcon={<FiArrowLeft />}>Back to Home</AppButton>
      </Link>
    </Box>
  );
}

export default NotFound;
