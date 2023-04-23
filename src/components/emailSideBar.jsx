import React from "react";
import { Box, Typography } from "@mui/material";

function EmailSideBar(props) {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 5,
        right: 40,
        writingMode: "vertical-rl",

        py: 2,
        px: 1,
        borderRadius: 0.75,
        display: { lg: "block", md: "none", sm: "none", xs: "none" },
      }}
    >
      <Typography
        display="flex"
        alignItems="center"
        fontFamily="Fira code"
        letterSpacing={1.4}
        columnGap={1.6}
      >
        <a
          style={{ fontSize: 14, color: "#8892b0" }}
          href="mailto:iritikdev@gmail.com"
        >
          iritikdev@gmail.com
        </a>
        <Box
          sx={{
            backgroundColor: "slate.400",
            height: 125,
            width: 1.5,
          }}
        ></Box>
      </Typography>
    </Box>
  );
}

export default EmailSideBar;
