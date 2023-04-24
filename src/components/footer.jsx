import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";

import { theme } from "../theme";
import { bc, hackertankIcon, linkedInIcon } from "../assets";
import githubIcon from "../assets/github.svg";
import { SiFrontendmentor, SiGeeksforgeeks } from "react-icons/si";

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
            fontSize: 12,
            fontWeight: "300",
            fontFamily: "Fira Code",
            color: theme.palette.slate[200],
            "&:hover": {
              color: theme.palette.green.main,
            },
          }}
        >
          Build by Ritik Sharma & Design adapted from&nbsp;
          <img src={bc} alt="Brittany Chang" srcset="" width={18} />
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
        <Tooltip title="github/iritikdev" placement="right">
          <a href="#" className="hrx-link">
            <img src={githubIcon} width={22} />
          </a>
        </Tooltip>
        <Tooltip title="linkedlin/iritikdev" placement="right">
          <a href="#">
            <img src={linkedInIcon} width={22} />
          </a>
        </Tooltip>
        <Tooltip title="Frontend Mentor" placement="right">
          <a href="#">
            <SiFrontendmentor size={22} color="#ccd6f6" strokeWidth={1} />
          </a>
        </Tooltip>
        <a href="#">
          <SiGeeksforgeeks size={24} color="#ccd6f6" />
        </a>

        <a href="#">
          <img src={hackertankIcon} width={24} />
        </a>
      </Box>
    </Box>
  );
}

export default Footer;
