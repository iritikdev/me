import {
  Box,
  Button,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import React from "react";

import { rv2 } from "../assets";
import { aboutMe, techStack } from "../data";
import SectionHeader from "./sectionHeader";
import "./about.css";




function About(props) {
  const theme = useTheme();
  return (
    <div id="about" data-aos="fade-in">
      <Box
        sx={{
          // height: {
          //   xs: "1000px",
          //   sm: "800px",
          //   md: "700px",
          // },
          my : {
            xs : "12rem",
            sm : "14rem",
            md : "16rem"
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
            {aboutMe.map((text, index) => {
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
              {techStack.map((item) => (
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
                      fontSize: { xs: 12, sm: 12.5, md : 13 },
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
            <Profile />
         
          </Box>
        </Stack>
      </Box>
    </div>
  );
}


const Profile = styled("div")(({ theme }) => ({
  "@keyframes spin": {
    "0%": {
      borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
    },
    "50%": {
      borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
    },
    "100%": {
      borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
    },
  },
  // linear-gradient(to right, rgb(249, 38, 174), rgb(128, 40, 238))
  background: `url(${rv2})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  justifySelf: "center",
  width: "300px",
  height: "300px",
  boxShadow: "inset 0 0 0 4px rgb(100 255 218)",
  animation: `spin 8s ease-in-out infinite 1s`,
}));

export default About;
