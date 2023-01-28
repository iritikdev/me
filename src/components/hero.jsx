import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AppButton } from "./AppButton";

function Hero(props) {
  const theme = useTheme();
  return (
    <div id="" data-aos="fade-up">
      <Box
        sx={{
          height: "90vh",
          marginTop: {
            xs: 16,
            md: 20,
          },
          paddingX: {
            xs: 2,
            sm: 8,
            md: 20,
          },
        }}
      >
        <Typography
          component={"p"}
          sx={{
            fontSize: 12,
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
              sm: 42,
              md: 48,
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
              sm: 42,
              md: 48,
            },
            fontWeight: "bold",
            color: theme.palette.slate[400],
            mb: 2,
          }}
        >
          I create things for the web.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: {
              xs: 13,
              sm: 14,
              md: 14,
            },
            color: theme.palette.slate[400],
            maxWidth: "460px",
          }}
        >
          I’m a fullstack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m studied
          computer science & engineering at LNJP institute of technology.
        </Typography>

        <AppButton
          sx={{
            fontSize: {
              xs: 11,
              sm: 11,
              md: 12,
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
