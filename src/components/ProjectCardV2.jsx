import React from "react";
import { Box, Typography } from "@mui/material";

import { BsCalendar2Week } from "react-icons/bs";
import { FiExternalLink, FiGithub, FiYoutube, } from "react-icons/fi";
import { AnimatedButton } from "./AnimatedButton";

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
    
    px={4}
    py={3}
      display={"flex"}
      columnGap={3}
      mb={8}
      flexDirection={{xs : "column-reverse", sm : "row", md : reverse ? "row-reverse" : "row"}}
      sx={{
        '&:hover' : {
          backdropFilter : 'blur(16px) saturate(180%)',
          backgroundColor: 'rgba(17, 25, 40, 0.75)',
          border : "1px solid rgba(255, 255, 255, 0.125)",
          borderRadius: "12px"
        }
      }}
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
        <Box display={"flex"} columnGap={2} mt={2} mb={{xs : 2}}>
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
