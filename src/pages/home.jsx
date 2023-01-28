import { Container } from "@mui/material";
import React from "react";

import About from "../components/about";
import Academy from "../components/academy";
import Hero from "../components/hero";
import Project from "../components/project";
import Contact from "../components/contact";
import Article from "../components/article";

function Home(props) {
  return (
    <React.Fragment>
      <Container>
        <Hero />
        <About />
        <Academy />
        {/* <Project /> */}
        <Article />
        <Contact />
      </Container>
    </React.Fragment>
  );
}

export default Home;
