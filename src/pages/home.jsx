import { Container } from "@mui/material";

import About from "../components/about";
import Academy from "../components/academy";

import Projects from "../components/projects";
import Contact from "../components/contact";
import Article from "../components/article";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Hero from "../components/Hero";

function Home(props) {
  return (
    <>
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
    </>
  );
}

export default Home;
