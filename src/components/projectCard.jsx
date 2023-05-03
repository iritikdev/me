import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { FiExternalLink, FiGithub } from "react-icons/fi";

import { theme } from "../theme";
import { AnimatedButton } from "./AnimatedButton";

function ProjectCard({ githubUrl, id, project_image, subTitle, title, url }) {
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
    <Card
      key={id}
      sx={{
        position: "relative",

        width: {
          xs: 300,
          sm: 275,
        },

        backgroundColor: theme.palette.blue[400],
        boxShadow: "none",
        cursor: "pointer",
        ":hover": {
          transform: "translateY(-2px)",
          transition: "all 0.5s",
          boxShadow: 20,
        },
        p: 0.5,
      }}
    >
      <CardContent>
        <CardMedia
          component="img"
          height="150"
          image={project_image}
          sx={{
            mb: 1.6,
            borderRadius: 0.9,
          }}
        />
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontWeight: "700",
            lineHeight: "1.5",
            fontSize: 18,
            color: theme.palette.slate[200],
            mb: 1,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            color: theme.palette.slate[400],
            mb: 0.8,
          }}
        >
          {`${subTitle.slice(0, 80)}...`}
        </Typography>
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
            <a href={social.url}>{social.icon}</a>
          </AnimatedButton>
        ))}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
