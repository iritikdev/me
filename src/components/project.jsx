import React from "react";
import { Box } from "@mui/material";
import SectionHeader from "./sectionHeader";

function Project(props) {
  return (
    <div id="projects">
      <Box
        sx={{
          height: "600px",
          px: {
            xs: 1,
            sm: 10,
            md: 20,
          },
        }}
      >
        <SectionHeader title={"Some Things I’ve Built"} number={"03."} />
      </Box>
    </div>
  );
}

export default Project;
