import React from "react";
import { Box, Tooltip } from "@mui/material";
import { SiFrontendmentor, SiGeeksforgeeks } from "react-icons/si";
import { hackertankIcon, linkedInIcon } from "../assets";

import githubIcon from "../assets/Github.svg";
// import githubIcon from '../assets/'
// import githubIcon from '../assets/Github.svg'

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
