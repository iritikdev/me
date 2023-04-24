import { Container } from "@mui/material";
import React from "react";

import About from "../components/about";
import Academy from "../components/academy";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Article from "../components/article";
import EmailSideBar from "./../components/emailSideBar";
import SocialSideBar from "../components/socialSidebar";

function Home(props) {
  return (
    <React.Fragment>
      <Container>
        <Hero />
        <About />
        <Academy />
        <EmailSideBar />
        {/* <SocialSideBar /> */}
        <Projects />
        <Article />
        <Contact />
      </Container>
    </React.Fragment>
  );
}

export default Home;
