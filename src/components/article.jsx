import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
 
} from "@mui/material";
import { Link } from "react-router-dom";

import { theme } from "../theme";

import { RiArrowRightUpLine } from "react-icons/ri";
import useArticles from "../hooks/useArticles";
import CardSubtitle from "./CardSubtitle";
import CardTitle from "./CardTitle";
import LoadingSpinner from "./LoadingSpinner";
import TagList from "./TagList";
import SectionHeader from "./sectionHeader";

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
                    
                    boxShadow: "none",
                    backdropFilter : 'blur(16px) saturate(180%)',
                    backgroundColor: 'rgba(17, 25, 40, 0.75)',
                    border : "1px solid rgba(255, 255, 255, 0.125)",
                    borderRadius: "12px",
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
                    <CardMedia sx={{ height: 140 }} image={post.cover_image} />

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
            <Button endIcon={<RiArrowRightUpLine fontSize={16}  />} sx={{backgroundColor : "#8244ff" , px : 4, py : 1.25, borderRadius : "25px", fontSize:13, fontFamily : "inter", color: "white", "&:hover": {backgroundColor:"rgba(130, 68, 255, 0.8)"}}}>Read more</Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default Article;
