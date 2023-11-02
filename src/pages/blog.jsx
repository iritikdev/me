import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
  useTheme,
} from "@mui/material";

import { Link } from "react-router-dom";
import CardSubtitle from "../components/CardSubtitle";
import CardTitle from "../components/CardTitle";
import LoadingSpinner from "../components/LoadingSpinner";
import TagList from "../components/TagList";
import useArticles from "../hooks/useArticles";

function Blog() {
  const theme = useTheme();
  const { data: posts, isLoading, error } = useArticles();

  return (
    <Box
      pb={4}
      pt={14}
      sx={{
        color: theme.palette.slate[400],
        fontFamily: "Inter",
      }}
      
    >
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        <LoadingSpinner isLoading={isLoading} theme={theme} />
        {posts?.map((post, index) => (
          <Card
            data-aos="fade-in"
            key={index}
            sx={{
              width: {
                xs: 300,
                sm: 250,
              },
              cursor: "pointer",
              backdropFilter: "blur(16px) saturate(180%)",
              backgroundColor: "rgba(17, 25, 40, 0.75)",
              border: "1px solid rgba(255, 255, 255, 0.125)",
              borderRadius: "12px",

              boxShadow: "none",
              transition: theme.transitions.create(["translate", "transform"], {
                duration: theme.transitions.duration.standard,
              }),
              "&:hover": {
                translate: "0 -4px",
              },
            }}
          >
            <Link to={`/blog/${post.id}`}>
              <CardMedia
                sx={{ height: 130 }}
                image={post.cover_image}
                
              />
              <CardContent>
                <Typography sx={{fontFamily:"averta-bold", color : "slate.200", mb:0.8}}>{post.title}</Typography>
                <CardSubtitle>{post.description}</CardSubtitle>
              </CardContent>
            </Link>
            <Box
              flex={1}
              sx={{
                display: "flex",
                position: "relative",
              }}
            >
              <CardActions>
                <TagList tag_list={post.tag_list} />
              </CardActions>
            </Box>
          </Card>
        ))}
      </Container>
    </Box>
  );
}

export default Blog;
