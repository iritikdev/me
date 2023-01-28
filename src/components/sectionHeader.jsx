import React from "react";
import { Box } from "@mui/material";
import { Typography, useTheme, Divider } from "@mui/material";

function SectionHeader({ number, title }) {
  const theme = useTheme();
  return (
    <Box
      sx={{ display: "inline-flex", alignItems: "center", pb: 4 }}
      data-aos="fade-right"
    >
      <Typography
        sx={{
          fontFamily: "Fira Code",
          color: theme.palette.green.main,
          pr: 1,
          fontSize: {
            xs: 16,
            sm: 17,
            md: 18,
          },
        }}
      >
        {number}
      </Typography>
      <Typography
        variant="h3"
        sx={{
          wordBreak: "keep-all",
          fontSize: {
            xs: 20,
            md: 22,
          },
          fontWeight: "bold",
          color: theme.palette.slate[200],
        }}
      >
        {title}
      </Typography>
      <Divider
        sx={{
          ml: 1.4,
          width: {
            xs: "100px",
            sm: "300px",
            md: "300px",
          },
          borderColor: theme.palette.blue[200],
        }}
      />
    </Box>
  );
}

export default SectionHeader;
