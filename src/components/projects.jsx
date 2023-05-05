import React from "react";
import { Box } from "@mui/material";
import SectionHeader from "./sectionHeader";
import ProjectCard from "./projectCard";
import { useState } from "react";

import { projectsDetails } from "../assets/projects";

function Projects(props) {
  const [projects, setProjects] = useState(projectsDetails);
  return (
    <div id="projects">
      <Box
        sx={{
          px: {
            xs: 1,
            sm: 10,
            md: 12,
          },
          mb: {
            xs: 15,
            sm: 15,
            md: 20,
          },
        }}
      >
        <SectionHeader title={"Some Things I've Built"} number={"03."} />
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={2}
        >
          {projects.map((project, index) => (
            <ProjectCard
              id={index}
              title={project.title}
              subTitle={project.description}
              githubUrl={project.github_url}
              tags={project.tech_stack}
              project_image={project.project_image}
              url={project.live_url}
            />
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default Projects;
