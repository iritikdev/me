import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import { FiExternalLink, FiGithub } from "react-icons/fi";

import { theme } from "../theme";
import { AnimatedButton } from "./AnimatedButton";
import { useState } from "react";

const Container = styled(Card)(({ theme }) => ({
  position: "relative",
  [theme.breakpoints.up("xs")]: {
    width: 300,
  },
  [theme.breakpoints.up("sm")]: {
    width: 275,
  },
  backgroundColor: theme.palette.blue[400],
  boxShadow: "none",
  cursor: "pointer",
  ":hover": {
    transform: "translateY(-3px)",
    transition: "all 0.5s",
    boxShadow: theme.shadows[20],
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  lineHeight: "1.5",
  fontSize: 18,
  mb: 1,
}));
const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 500,
  color: theme.palette.slate[400],
  mb: 0.8,
}));

function ProjectCard({ githubUrl, id, cover, description, title, url }) {
  const [isHover, setIsHover] = useState(false);
  const socials = [
    {
      id: 1,
      icon: <FiGithub size={22} color="#ccd6f6" strokeWidth={2} />,
      url: githubUrl,
    },
    {
      id: 2,
      icon: <FiExternalLink size={20} color="#ccd6f6" strokeWidth={2} />,
      url,
    },
  ];
  return (
    <Container
    sx={{
      backdropFilter : 'blur(16px) saturate(180%)',
      backgroundColor: 'rgba(17, 25, 40, 0.75)',
      border : "1px solid rgba(255, 255, 255, 0.125)",
      borderRadius: "12px"
    }}
      key={id}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <CardContent>
        <CardMedia
          component="img"
          height="150"
          image={cover}
          sx={{
            mb: 1.6,
            borderRadius: "12px"
          }}
        />
        <Title
          color={isHover ? theme.palette.green.main : theme.palette.slate[200]}
          gutterBottom
          variant="h6"
          fontFamily={"averta-semi"}
          component="div"
        >
          {title}
        </Title>
        <Subtitle variant="body2">{description}</Subtitle>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          columnGap: 1,
        }}
      >
        {socials.map((social) => (
          <AnimatedButton>
            {social.url && <a href={social.url}>{social.icon}</a>}
          </AnimatedButton>
        ))}
      </CardActions>
    </Container>
  );
}

export default ProjectCard;
