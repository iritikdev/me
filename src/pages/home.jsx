import { Container } from "@mui/material";
import React from "react";

import About from "../components/about";
import Academy from "../components/academy";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Article from "../components/article";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";

function Home(props) {
  return (
    <React.Fragment>
      <Container>
        <Hero />
        <About />
        <Academy />
        <RightSidebar />
        <LeftSidebar />
        <Projects />
        <Article />
        <Contact />
      </Container>
    </React.Fragment>
  );
}

export default Home;
