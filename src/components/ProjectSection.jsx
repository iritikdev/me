import { Box } from "@mui/material";
import React from "react";
import ProjectCardV2 from "./ProjectCardV2";
import SectionHeader from "./sectionHeader";

const ProjectSection = () => {
  return (
    <Box maxWidth={"950px"} mx={"auto"} mb={16}>
      <SectionHeader number={"03."} title={"Projects"} />
      <Box>
        <ProjectCardV2
          date={"March 2023"}
          title={
            "TrustBallot: Decentralized E-voting System Dapps Based on Blockchain"
          }
          description={
            "BookPedia is a social media for the literary and academia personals. In this platform everyone can upload book and blogs and give rating them. It's just a prototype version as a university software development lab project. We are developing it in large scale."
          }
          techs={["React", "Chakra UI", "Web3"]}
          
        />
        <ProjectCardV2
          reverse
          date={"March-2023"}
          title={
            "TrustBallot: Decentralized E-voting System Dapps Based on Blockchain"
          }
          description={
            "BookPedia is a social media for the literary and academia personals. In this platform everyone can upload book and blogs and give rating them. It's just a prototype version as a university software development lab project. We are developing it in large scale."
          }
          techs={["React", "Chakra UI", "Web3"]}
        />
      </Box>
    </Box>
  );
};

export default ProjectSection;
