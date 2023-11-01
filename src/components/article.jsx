import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import { theme } from "../theme";
import AppButton from "./AppButton";
import SectionHeader from "./sectionHeader";
import useArticles from "../hooks/useArticles";
import LoadingSpinner from "./LoadingSpinner";
import TagList from "./TagList";
import CardTitle from "./CardTitle";
import CardSubtitle from "./CardSubtitle";

function Article() {
  const { data: articles, isLoading, error } = useArticles();

  if (error) return <p>Something went wrong</p>;

  return (
    <div id="blog">
      <Box
        sx={{
          mb: {
            xs: 20,
            sm: 20,
            md: 20,
          },
          px: {
            xs: 2,
            sm: 10,
            md: 14,
          },
        }}
      >
        <SectionHeader number={"05."} title={"Read my latest blog"} />

        <Box display="flex" flexWrap="wrap" gap={3} justifyContent="center">
          <LoadingSpinner isLoading={isLoading} theme={theme} />
          {articles?.map((post, index) => (
            <>
              {index > 2 ? null : (
                <Card
                  key={index}
                  sx={{
                    width: {
                      xs: 300,
                      sm: 275,
                    },
                    cursor: "pointer",
                    backgroundColor: theme.palette.blue[400],
                    boxShadow: "none",
                    transition: theme.transitions.create(
                      ["translate", "transform"],
                      {
                        duration: theme.transitions.duration.standard,
                      }
                    ),
                    "&:hover": {
                      translate: "0 -3px",
                    },
                  }}
                >
                  <Link to={`/blog/${post.id}`}>
                    <CardMedia sx={{ height: 130 }} image={post.cover_image} />

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
                    <CardActions sx={{ pl: 2 }}>
                      <TagList tag_list={post.tag_list} />
                    </CardActions>
                  </Box>
                </Card>
              )}
            </>
          ))}
        </Box>
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link to={"/blog"} color={theme.palette.green.main}>
            <AppButton>Read more!</AppButton>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default Article;
