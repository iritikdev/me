import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";

import { theme } from "../theme";
import { bc, hackertankIcon, linkedInIcon } from "../assets";
import { BsSpeedometer2 } from "react-icons/bs";
import { FiAirplay, FiCode, FiGithub } from "react-icons/fi";

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
            <FiGithub size={22} color="#ccd6f6" strokeWidth={2} />
          </a>
        </Tooltip>
        <Tooltip title="linkedlin/iritikdev" placement="right">
          <a href="#">
            <img src={linkedInIcon} width={22} />
          </a>
        </Tooltip>
        <Tooltip title="Frontend Mentor" placement="right">
          <a href="#">
            <FiAirplay size={22} color="#ccd6f6" strokeWidth={2} />
          </a>
        </Tooltip>
        <Tooltip title="Geeksforgeeks" placement="right">
          <a href="#">
            <FiCode size={24} color="#ccd6f6" />
          </a>
        </Tooltip>
        <Tooltip title="hackerrank" placement="right">
          <a href="#">
            <BsSpeedometer2 size={22} color="#ccd6f6" strokeWidth={0.2} />
          </a>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default Footer;
