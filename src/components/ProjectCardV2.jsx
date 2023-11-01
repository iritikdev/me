import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { theme } from "../theme";
import { AnimatedButton } from "./AnimatedButton";
import { FiExternalLink, FiGithub, FiYoutube, FiZoomIn } from "react-icons/fi";
import { BsCalendar2, BsCalendar2Week } from "react-icons/bs";

import Badge from "./Badge";
const ProjectCardV2 = ({
  title,
  description,
  date,
  colorScheme,
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
          bgcolor={`${colorScheme}.accent`}
          fontSize={"small"}
          sx={{
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            columnGap: 1,
            color: `${colorScheme}.main`,
            px: 1,
            py: "4px",
            mr: 1,
            borderRadius: 1,
            mb: 1,
          }}
        >
          <BsCalendar2Week />
          {date}
        </Typography>
        <Typography
          alignItems={"center"}
          // color={`${colorScheme}.main`}
          color={"white"}
          display={"flex"}
          fontFamily={"averta-bold"}
          fontSize={18}
          mb={1}
        >
          {title}
        </Typography>
        <Typography color={"slate.200"} mb={2} mr={2}>
          {description}
        </Typography>
        <Box display={"flex"}>
          {techs.map((t) => (
            <Badge colorScheme={colorScheme}>{t}</Badge>
          ))}
        </Box>
      </Box>
      <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
        <img
          style={{ borderRadius: "4px" }}
          width={260}
          height={160}
          src="https://www.pixeden.com/media/k2/galleries/856/001-screen-showcase-landing-page-devices-presentation-web-psd-projects.jpg"
        />
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
    </Box>
  );
};

export default ProjectCardV2;
