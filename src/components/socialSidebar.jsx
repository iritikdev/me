import { Box, Stack } from "@mui/material";
import { BsSpeedometer2 } from "react-icons/bs";
import { FiAirplay, FiCode, FiGithub, FiLinkedin } from "react-icons/fi";

import { AnimatedButton } from "./AnimatedButton";

const socials = [
  {
    id: 1,
    icon: <FiGithub size={22} color="#ccd6f6" strokeWidth={2} />,
    url: "https://github.com/iritikdev",
  },
  {
    id: 2,
    icon: <FiLinkedin size={22} color="#ccd6f6" strokeWidth={2} />,
    url: "#",
  },
  {
    id: 3,
    icon: <FiCode size={24} color="#ccd6f6" />,
    url: "#",
  },
  {
    id: 4,
    icon: <BsSpeedometer2 size={22} color="#ccd6f6" strokeWidth={0.2} />,
    url: "#",
  },
  {
    id: 5,
    icon: <FiAirplay size={22} color="#ccd6f6" strokeWidth={2} />,
    url: "#",
  },
];

function SocialSideBar() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 5,
        left: 40,
        py: 2,
        px: 1,
        display: { lg: "block", md: "none", sm: "none", xs: "none" },
      }}
    >
      <Box
        display={"flex"}
        alignItems="center"
        flexDirection={"column"}
        rowGap={2}
      >
        <Stack className="social-icons" spacing={3}>
          {socials.map((social) => (
            <AnimatedButton>
              <a href={social.url}>{social.icon}</a>
            </AnimatedButton>
          ))}
        </Stack>
        <Box
          sx={{
            backgroundColor: "slate.400",
            height: 125,
            width: 1.5,
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default SocialSideBar;
