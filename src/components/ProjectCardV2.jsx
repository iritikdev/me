import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { theme } from "../theme";
import { AnimatedButton } from "./AnimatedButton";
import { FiExternalLink, FiGithub, FiYoutube, FiZoomIn } from "react-icons/fi";
import { FcCalendar } from "react-icons/fc";
import Badge from "./Badge";
const ProjectCardV2 = ({
  title,
  description,
  date,
  techs = [],
  reverse = false,
}) => {
  return (
    <Box
      display={"flex"}
      columnGap={3}
      mb={8}
      flexDirection={reverse ? "row-reverse" : "row"}
    >
      <Box>
        <Typography
          // fontFamily={"inter"}
          color={theme.palette.green.main}
          fontSize={"small"}
          sx={{
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            columnGap: 1,
            backgroundColor: theme.palette.blue[400],
            px: 1,
            py: "4px",
            mr: 1,
            borderRadius: 1,
            mb: 1,
          }}
        >
          <svg
            width="17px"
            height="17px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C20.1752 21.4816 19.3001 21.7706 18 21.8985"
              stroke={theme.palette.green.main}
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M7 4V2.5"
              stroke={theme.palette.green.main}
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M17 4V2.5"
              stroke={theme.palette.green.main}
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M21.5 9H16.625H10.75M2 9H5.875"
              stroke={theme.palette.green.main}
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          {date}
        </Typography>
        <Typography
          fontSize={18}
          mb={1}
          display={"flex"}
          alignItems={"center"}
          color={theme.palette.slate[200]}
          fontFamily={"averta-bold"}
          fontWeight={600}
        >
          {title}
        </Typography>
        <Typography color={theme.palette.slate[400]} mb={1} mr={2}>
          {description}
        </Typography>
        <Box display={"flex"}>
          {techs.map((t) => (
            <Badge>{t}</Badge>
          ))}
        </Box>
        <Box display={"flex"} columnGap={2} mt={2}>
          <AnimatedButton>
            <a href={"#"}>
              {<FiGithub size={22} color="#ccd6f6" strokeWidth={2} />}
            </a>
          </AnimatedButton>
          <AnimatedButton>
            <a href={"#"}>
              {<FiExternalLink size={20} color="#ccd6f6" strokeWidth={2} />}
            </a>
          </AnimatedButton>
          <AnimatedButton>
            <a href={"#"}>
              {<FiYoutube size={20} color="#ccd6f6" strokeWidth={2} />}
            </a>
          </AnimatedButton>
        </Box>
      </Box>
      <Box position={"relative"} pt={1}>
        <img
          style={{ borderRadius: "4px" }}
          width={260}
          height={160}
          src="https://www.pixeden.com/media/k2/galleries/856/001-screen-showcase-landing-page-devices-presentation-web-psd-projects.jpg"
        />
        {/* <Box mt={1} borderRadius={1} px={2} py={"3px"} bgcolor={theme.palette.blue[400]}>
          <Typography sx={{
            color: theme.palette.slate[400],
            fontFamily : "Fira code",
            overflowX: "visible"
          }}>http://www.ritiksharma.online/demo/contact.php</Typography>
        </Box> */}
      </Box>
    </Box>
  );
};

export default ProjectCardV2;
