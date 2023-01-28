import React from "react";

import { TimelineContent } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { AppButton } from "./AppButton";

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
              xs: 12,
              sm: 13,
              md: 14,
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
              xs: 12,
              sm: 13,
              md: 14,
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
          fontSize: 12,
        }}
      >
        {college}
      </Typography>

      <AppButton
        sx={{
          py: 0.5,
          fontSize: 10,
          px: 1,
          mr: {
            sm: 0.8,
          },
        }}
      >
        {passingYear}
      </AppButton>
      <AppButton
        sx={{
          py: 0.5,
          fontSize: 10,
          px: 1,
        }}
      >
        {score}
      </AppButton>
    </TimelineContent>
  );
}

export default AcademyTimelineContent;
