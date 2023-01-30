import {
  Box,
  Divider,
  Stack,
  Typography,
  useTheme,
  styled,
} from "@mui/material";
import React from "react";
import { ritik, ritiksm } from "../assets";
import SectionHeader from "./sectionHeader";

const about = [
  "Hello! My name is Ritik and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!",
  "Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.",
  "I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.",
  "Here are a few technologies I've been working with recently:",
];

function About(props) {
  const theme = useTheme();
  return (
    <div id="about" data-aos="fade-up">
      <Box
        sx={{
          height: {
            xs: "950px",
            sm: "800px",
            md: "600px",
          },
          px: {
            xs: 2.5,
            sm: 10,
            md: 14,
          },
        }}
      >
        <SectionHeader title={"About Me"} number={"01."} />
        <Stack direction={{ xs: "column", md: "row" }} flex gap={6.5}>
          <Box flex={7}>
            {about.map((text, index) => {
              return (
                <Typography
                  key={index}
                  color={theme.palette.slate[400]}
                  pb={2}
                  sx={{
                    fontSize: {
                      xs: 15,
                      md: 16,
                    },
                  }}
                >
                  {text}
                </Typography>
              );
            })}
          </Box>
          <Box
            flex={5}
            sx={{
              display: {
                xs: "flex",
                sm: "flex",
                md: "block",
              },
              justifyContent: "center",
            }}
          >
            <Profile src={ritiksm} alt="Ritik Sharma" data-aos="zoom-in-up" />
          </Box>
        </Stack>
      </Box>
    </div>
  );
}

const Profile = styled("img")(({ theme }) => ({
  boxShadow:
    "blue 0px 0px 0px 2px inset, #0a192f 15px 15px 0px -2px, rgb(100, 255, 218) 15px 15px",
  // boxShadow:
  // "rgba(100, 255, 218, 0.4) 5px 5px, rgba(100, 255, 218, 0.3) 10px 10px, rgba(100, 255, 218, 0.2) 15px 15px, rgba(100, 255, 218, 0.1) 20px 20px, rgba(100, 255, 218, 0.05) 25px 25px",
  width: 230,
  borderRadius: "4px",
  filter: "grayscale(40%) contrast(1)",
}));

export default About;
