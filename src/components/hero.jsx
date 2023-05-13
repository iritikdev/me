import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import AppButton from "./AppButton";
import Underline from "../assets/underline.svg";

function Hero(props) {
  const theme = useTheme();
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div id="" data-aos="fade-up">
      <Box
        sx={{
          height: {
            xs: "70dvh",
            sm: "80dvh",
            md: "90dvh",
          },
          mb: {
            sm: windowSize[0] > 900 && windowSize[1] > 300 ? 30 : 0,
          },
          marginTop: {
            xs: 22,
            md: 28,
          },
          paddingX: {
            xs: 2,
            sm: 8,
            md: 10,
          },
        }}
      >
        <Typography
          component={"p"}
          sx={{
            fontSize: 14,
            color: theme.palette.green.main,
            fontFamily: "Fira Code",
          }}
        >
          Hi!, my name is
        </Typography>
        <br />
        <Typography
          variant="h3"
          sx={{
            fontSize: {
              xs: 32,
              sm: 60,
              md: 60,
            },
            fontWeight: "bold",
            color: theme.palette.slate[200],
            mb: 1,
          }}
        >
          Ritik Sharma
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: {
              xs: 32,
              sm: 60,
              md: 60,
            },
            fontWeight: "bold",
            color: theme.palette.slate[400],
            mb: 2,
            background:
              "radial-gradient(64.18% 64.18% at 71.16% 35.69%,#def9fa .89%,#bef3f5 17.23%,#9dedf0 42.04%,#7de7eb 55.12%,#5ce1e6 71.54%,#64ffda 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          I build things for the web.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: {
              xs: 15,
              sm: 17,
              md: 17,
            },
            color: theme.palette.slate[400],
            maxWidth: "560px",
          }}
        >
          I'm a fullstack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m studied
          computer science & engineering at
          <span className="link">LNJP institute of technology</span>
        </Typography>

        <AppButton
          href="http://www.github.com/iritikdev"
          sx={{
            fontSize: {
              xs: 13,
              sm: 14,
              md: 14,
            },
            mt: 5,
            py: {
              xs: 1.8,
              sm: 2.2,
            },
          }}
        >
          Checkout my projects!
        </AppButton>
      </Box>
    </div>
  );
}

export default Hero;
