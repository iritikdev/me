import React from "react";
import { Box, Link, Typography } from "@mui/material";

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

        boxShadow: "none",
        cursor: "pointer",
        ":hover": {
          transform: "translateY(-1.5px)",
          transition: "all 0.5s",
          color: "green",
        },
      }}
    >
      <Typography
        display="flex"
        alignItems="center"
        fontFamily="Fira code"
        letterSpacing={1.4}
        columnGap={1.6}
      >
        <Link
          fontSize={14}
          color="#8892b0"
          sx={{
            textDecoration: "none",
            ":hover": {
              transform: "translateY(-2px)",
              transition: "all 0.5s",
              color: "#64ffda",
            },
          }}
          href="mailto:iritikdev@gmail.com"
        >
          iritikdev@gmail.com
        </Link>
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
