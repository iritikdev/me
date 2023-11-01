import { Box, Typography } from "@mui/material";
import React from "react";

import { bc } from "../assets";
import { theme } from "../theme";
import SocialIcons from "./SocialIcons";

function Footer(props) {
  return (
    <Box
      sx={{
        height: 70,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        rowGap: 1.1,
        mb: {
          xs: 3,
          md: 0,
          lg: 0,
        },
      }}
    >
      <Box>
        <Typography
          sx={{
            display: "inline-flex",
            alignItems: "center",
            textAlign: "center",
            cursor: "pointer",
            pb: 1,
            lineHeight:1.5,
            fontSize: 13,
            fontWeight: "300",
            fontFamily: "Fira Code",
            color: theme.palette.slate[200],
            "&:hover": {
              color: theme.palette.green.main,
            },
          }}
        >
         © {new Date().getFullYear()}, Ritik Kumar. All rights reserved.
         <br />
         This site has been developed by myself using React, MUI.
          
          <Typography
            component={"span"}
            sx={{
              fontSize: 12,
              fontFamily: "Inter",
              fontWeight: "600",
            }}
          ></Typography>
        </Typography>
      </Box>

      <Box
        className="social-icons"
        sx={{
          display: {
            xs: "flex",
            sm: "none",
            md: "none",
            lg: "none",
          },
          columnGap: 2,
        }}
      >
        <SocialIcons direction="row" />
      </Box>
    </Box>
  );
}

export default Footer;
