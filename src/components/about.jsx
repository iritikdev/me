import {
  Box,
  Stack,
  Typography,
  useTheme,
  styled,
  Button,
} from "@mui/material";
import React from "react";
import { profileRitik, ritik, ritiksm } from "../assets";
import SectionHeader from "./sectionHeader";
import { DiJavascript1, DiReact } from "react-icons/di";
import { SiNodedotjs, SiExpress, SiExpo } from "react-icons/si";
import { TbBrandPython } from "react-icons/tb";
import { theme } from "../theme";

const about = [
  <p>
    Hello! My name is Ritik and I love to create things that live on the
    internet. My interest in <a class="link">web development </a> started back
    in 2018 when I was in 2nd year of my diploma.
  </p>,
  "In my free time, I enjoy building stuff that live on internet. I believe in continuously learning and expanding my knowledge base to stay ahead in the field. ",
  "I am always looking for new opportunities to challenge myself and make a positive impact. Please feel free to explore my website to learn more about my work and connect with me.",
  "I have honed my skills and developed a strong understanding of following technology: ",
];

const stack = [
  {
    id: 1,
    name: "JavaScript(ES6+)",
    icon: <DiJavascript1 color={theme.palette.green.main} size={16} />,
    color: "#fcdc00",
  },

  {
    id: 4,
    name: "Node.js/Express",
    icon: <SiNodedotjs color={theme.palette.green.main} size={14} />,
    color: "#026e00",
  },
  {
    id: 2,
    name: "React",
    icon: <DiReact color={theme.palette.green.main} size={16} />,
    color: "#61dafb",
  },

  {
    id: 5,
    name: "Python/Django",
    icon: <TbBrandPython color={theme.palette.green.main} size={16} />,
    color: "#259dff",
  },
  {
    id: 6,
    name: "Wordpress",
    icon: <SiExpress color={theme.palette.green.main} size={14} />,
    color: "#259dff",
  },
  {
    id: 6,
    name: "React Native",
    icon: <SiExpo color={theme.palette.green.main} size={14} />,
    color: "#259dff",
  },
];
function About(props) {
  const theme = useTheme();
  return (
    <div id="about" data-aos="fade-up">
      <Box
        sx={{
          height: {
            xs: "1000px",
            sm: "800px",
            md: "700px",
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
            <Box
              display={"inline-grid"}
              columnGap={{
                xs: 5,
                sm: 10,
              }}
              gridTemplateColumns={"repeat(2,1fr)"}
              gridTemplateRows={"repeat(3,1fr)"}
            >
              {stack.map((item) => (
                <Button
                  key={item.id}
                  startIcon={item.icon}
                  sx={{
                    color: theme.palette.slate[400],
                    py: 0.2,
                    display: "flex",
                    justifyContent: "flex-start",

                    "&:hover": {
                      color: theme.palette.slate[200],
                    },
                  }}
                >
                  <Typography
                    sx={{
                      textTransform: "none",
                      fontSize: { xs: 12, sm: 12.5 },
                      fontWeight: "300",
                      fontFamily: "Fira Code",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Button>
              ))}
            </Box>
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
            <Profile
              src={profileRitik}
              alt="Ritik Sharma"
              data-aos="zoom-in-up"
            />
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
