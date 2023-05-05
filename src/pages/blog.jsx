import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  CardActions,
  useTheme,
} from "@mui/material";
import { Rings } from "react-loader-spinner";
import { Link } from "react-router-dom";

import AppButton from "../components/AppButton";
import useArticles from "../hooks/useArticles";
import LoadingSpinner from "../components/LoadingSpinner";
import TagList from "../components/TagList";
import CardTitle from "../components/CardTitle";
import CardSubtitle from "../components/CardSubtitle";

function Blog(props) {
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
              backgroundColor: theme.palette.blue[400],
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
                sx={{ height: 120 }}
                image={post.cover_image}
                title="green iguana"
              />
              <CardContent>
                <CardTitle>{post.title}</CardTitle>
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
