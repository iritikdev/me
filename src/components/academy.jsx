import React from "react";
import { Box } from "@mui/material";
import SectionHeader from "./sectionHeader";
import AcademyTimeline from "./timeline";

function Academy(props) {
  return (
    <div id="academy" data-aos="fade-up">
      <Box
        sx={{
          height: {
            xs: "700px",
            sm: "700px",
            md: "700px",
          },
          px: {
            xs: 1,
            sm: 10,
            md: 20,
          },
        }}
      >
        <SectionHeader title={"Where I've studied"} number={"02."} />
        <AcademyTimeline />
      </Box>
    </div>
  );
}

export default Academy;
