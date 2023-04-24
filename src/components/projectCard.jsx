import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { externalIcon } from "../assets";
import { theme } from "./../theme";

function ProjectCard({
  id,
  title,
  subTitle,
  tags,
  url,
  githubUrl,
  project_image,
}) {
  return (
    <Card
      key={id}
      sx={{
        position: "relative",
        width: 275,
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
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          top: 20,
          right: 20,
          overflow: "hidden",
          backgroundColor: "rgba(0,0,0,0.75)",
          borderRadius: 0.75,
          pb: 0.75,
          px: 1,
        }}
      >
        <a href={githubUrl} target="_blank">
          <SiGithub size={22} color="#ccd6f6" strokeWidth={1} />
        </a>
        <a href={url} target="_blank">
          <img src={externalIcon} alt="" width={16} />
        </a>
      </CardActions>

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

      {/* Card Actions */}
      <CardActions>
        {tags.map((tag) => (
          <Button
            size="small"
            sx={{
              textTransform: "capitalize",
              color: theme.palette.slate[400],
            }}
          >
            {tag}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
