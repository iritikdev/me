import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import { AppButton } from "./AppButton";

function Hero(props) {
  const theme = useTheme();
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  console.log(windowSize.current);
  console.log("====================================");
  console.log(windowSize[0], windowSize[1]);
  console.log("====================================");
  console.log(windowSize.current[0] > 900 && windowSize.current[1] > 400);
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
            sm:
              windowSize.current[0] > 900 && windowSize.current[1] > 400
                ? 30
                : 0,
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
          }}
        >
          I build things for the web.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: {
              xs: 15,
              sm: 18,
              md: 18,
            },
            color: theme.palette.slate[400],
            maxWidth: "560px",
          }}
        >
          I’m a fullstack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m studied
          computer science & engineering at LNJP institute of technology.
        </Typography>

        <AppButton
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
