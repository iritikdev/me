import { Stack } from "@mui/material";
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

function SocialIcons({ direction, spacing = 2 }) {
  return (
    <Stack direction={direction} className="social-icons" spacing={spacing}>
      {socials.map((social) => (
        <AnimatedButton>
          <a href={social.url}>{social.icon}</a>
        </AnimatedButton>
      ))}
    </Stack>
  );
}

export default SocialIcons;
