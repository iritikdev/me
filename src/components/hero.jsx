import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Typography, useTheme } from "@mui/material";
import { RiArrowRightUpLine } from "react-icons/ri";
import GradientButton from "./GradientButton";

function Hero() {
  const theme = useTheme();
  // const [windowSize, setWindowSize] = useState([
  //   window.innerWidth,
  //   window.innerHeight,
  // ]);

  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setWindowSize([window.innerWidth, window.innerHeight]);
  //   };

  //   window.addEventListener("resize", handleWindowResize);

  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // });

  return (
    <div id="" data-aos="fade-up">
      <Box
        sx={{
          height: {
            xs: "70dvh",
            sm: "80dvh",
            md: "90dvh",
          },
          // mb: {
          //   // sm: windowSize[0] > 900 && windowSize[1] > 300 ? 30 : 0,
          // },
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
        <Box display="flex" columnGap={1} alignItems={"baseline"} mb={1}>
          <Typography fontSize={[24, 32]}>👋</Typography>
          <Typography
            component={"p"}
            sx={{
              fontSize: [14, 16],
              color: theme.palette.green.main,
              fontFamily: "Fira Code",
            }}
          >
            Namaskaram!
          </Typography>
        </Box>
      
        <Typography
          variant="h3"
          sx={{
            fontSize: {
              xs: 32,
              sm: 60,
              md: 60,
            },
            fontFamily: "Sen Variable",
            fontWeight : 700,
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
            fontFamily: "Sen Variable",
            fontWeight : 700,
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
          fontFamily="Sen Variable"
          lineHeight={1.5}
          sx={{
            fontSize: {
              xs: 16,
              sm: 17,
              md: 17,
            },
            color: theme.palette.slate[200],
            maxWidth: "600px",
          }}
        >
          I'm a fullstack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm studied
          computer science & engineering at
          <span className="link" style={{ marginLeft: 5 }}>
            {" "}
            LNJP institute of technology
          </span>
        </Typography>

        <GradientButton
          sx={{
            fontSize: {
              xs: 11,
              sm: 14,
              md: 14,
            },
            mt: [4,5],
            py: [1.5],
            px:  [3,4]
          }}
          href="http://www.github.com/iritikdev"
          endIcon={<RiArrowRightUpLine fontSize={16} />}
        >
          Checkout projects
        </GradientButton>
      </Box>
    </div>
  );
}

export default Hero;
