import React from "react";

import { TimelineContent } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import AppButton from "./AppButton";
import Badge from "./Badge";

function AcademyTimelineContent({
  course,
  branch,
  college,
  passingYear,
  score,
}) {
  return (
    <TimelineContent>
      <Box
        lineHeight={0.8}
        sx={{
          mb: {
            xs: 0.5,
          },
        }}
      >
        <Typography
          sx={{
            color: "green.main",
            display: "contents",
            fontFamily: "Fira Code",
            fontSize: {
              xs: 13,
              sm: 14,
              md: 15,
            },
            mr: 1,
          }}
        >
          {course}
        </Typography>
        <Typography
          color={"slate.200"}
          display={"contents"}
          sx={{
            fontSize: {
              xs: 13,
              sm: 14,
              md: 15,
            },
          }}
          fontWeight="600"
        >
          {branch}
        </Typography>
      </Box>

      <Typography
        sx={{
          pb: 0.7,
          color: "slate.400",
          fontSize: {
            xs: 12,
            sm: 13,
            md: 14,
          },
        }}
      >
        {college}
      </Typography>

      <Badge colorScheme={"green"} sm>{passingYear}</Badge>
      <Badge colorScheme={"green"} sm>{score}</Badge>
    </TimelineContent>
  );
}

export default AcademyTimelineContent;
