import React from "react";
import { Box, Tooltip } from "@mui/material";
import { SiFrontendmentor, SiGeeksforgeeks, SiGithub } from "react-icons/si";
import { hackertankIcon, linkedInIcon } from "../assets";
import { FiAirplay, FiGithub } from "react-icons/fi";

function SocialSideBar(props) {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 5,
        left: 50,
        py: 2,
        px: 1,
        display: { lg: "block", md: "none", sm: "none", xs: "none" },
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        rowGap={2}
        alignItems={"center"}
      >
        <Box
          className="social-icons"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
          }}
        >
          <Tooltip title="github/iritikdev" placement="right">
            <a href="#" className="hrx-link">
              <FiGithub size={24} color="#aab5d3" strokeWidth={2} />
            </a>
          </Tooltip>
          <Tooltip title="linkedlin/iritikdev" placement="right">
            <a href="#">
              <img src={linkedInIcon} width={22} />
            </a>
          </Tooltip>
          <Tooltip title="Frontend Mentor" placement="right">
            <a href="#">
              <FiAirplay size={22} color="#aab5d3" strokeWidth={2} />
            </a>
          </Tooltip>
          <a href="#">
            <SiGeeksforgeeks size={24} color="#aab5d3" />
          </a>

          <a href="#">
            <img src={hackertankIcon} width={24} />
          </a>
        </Box>
        <Box
          sx={{
            backgroundColor: "slate.400",
            height: 125,
            width: 1.6,
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default SocialSideBar;
