import React from "react";
import { Box } from "@mui/material";
import { Typography, useTheme, Divider } from "@mui/material";
import Underline from "../assets/underline.svg";

function SectionHeader({ number, title }) {
  const theme = useTheme();
  return (
    <Box
      sx={{ display: "inline-flex", alignItems: "center", pb: 6, position:"relative" }}
      data-aos="fade-right"
      mb={4}
    >
      <Typography
        sx={{
          fontFamily:"Sen Variable",
          color: theme.palette.blue.main,
          pr: 1,
          fontWeight : "700",
          position:"absolute",
          zIndex:-99999,
          
          fontSize: {
            xs: 100,
           
            md: 117,
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
            md: 24,
          },
          
          zIndex: 1000,
          paddingLeft : [12,16],
          color: theme.palette.slate[200],
          fontFamily: "Sen Variable",
          fontWeight : 700,
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
