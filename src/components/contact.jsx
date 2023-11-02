import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import AppButton from "./AppButton";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa";
import GradientButton from "./GradientButton";

const contact = {
  title: "05. What's Next?",
  subTitle: "Get In Touch",
  content:
    "Although I'm currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
  buttonText: "Say Hello",
};

function Contact(props) {
  const theme = useTheme();
  return (
    <div id="contact" data-aos="fade-up">
      <Box
        sx={{
          mb: 12.5,
          textAlign: "center",
          px: {
            xs: 1,
            sm: 10,
            md: 20,
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Fira Code",
            fontSize: 14,
            color: theme.palette.green.main,
          }}
        >
          {contact.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "averta-bold",
            fontSize: {
              xs: 28,
              md: 42,
            },
            color: theme.palette.slate[200],
            mb: 1.5,
          }}
        >
          {contact.subTitle}
        </Typography>
        <Typography
          sx={{
            marginX: "auto",
            width: {
              md: 500,
            },
            fontSize: {
              xs: 13,
              sm: 14,
              md: 16,
            },
            color: theme.palette.slate[400],
            mb: 5,
          }}
        >
          {contact.content}
        </Typography>

        <GradientButton
          href="mailto:iritikdev@gmail.com"
          endIcon={<RiArrowRightUpLine fontSize={16}  />}
        >
          Say Hello
        </GradientButton>
      </Box>
    </div>
  );
}

export default Contact;
