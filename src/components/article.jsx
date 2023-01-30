import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

import { theme } from "../theme";
import SectionHeader from "./sectionHeader";
import { AppButton } from "./AppButton";
import { getPostsByUsername } from "../services/postService";
import { Link } from "react-router-dom";

// const animate = ["fade-right", "fade-up", "fade-left"];

function Article(props) {
  const [articles, setArticles] = useState([]);

  const populateArticles = async () => {
    const { data } = await getPostsByUsername();
    setArticles(data);
  };

  useEffect(() => {
    populateArticles();
  });
  return (
    <div id="blog">
      <Box
        sx={{
          height: {
            xs: "1200px",
            sm: "800px",
            md: "600px",
          },
          px: {
            xs: 2,
            sm: 10,
            md: 16,
          },
        }}
      >
        <SectionHeader title={"Read my latest blog"} number={"04."} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={1.5}
          data-aos="fade-up"
          display={"flex"}
          justifyContent="center"
        >
          {articles.map((post, index) => (
            <>
              {index > 2 ? null : (
                <Card
                  key={index}
                  sx={{
                    width: {
                      xs: 350,
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
                      translate: "0 -4px",
                    },
                  }}
                >
                  <CardMedia
                    sx={{ height: 150 }}
                    image={post.cover_image}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      fontSize={15}
                      fontWeight={600}
                      lineHeight={1.35}
                      color={theme.palette.slate[200]}
                      sx={{
                        ":hover": {
                          color: theme.palette.green.main,
                        },
                      }}
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      fontSize={14}
                      color={theme.palette.slate[400]}
                    >
                      {post.description}
                    </Typography>
                  </CardContent>
                  <Box
                    flex={1}
                    sx={{
                      display: "flex",
                      position: "relative",
                    }}
                  >
                    <CardActions>
                      {post.tag_list.map((item, index) => (
                        <>
                          {index > 1 ? null : (
                            <AppButton
                              key={item.id}
                              sx={{
                                py: 0.1,
                                px: 0.4,
                                color: theme.palette.slate[200],
                                textTransform: "none",
                                "&:hover": {
                                  color: theme.palette.slate[200],
                                },
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: 12,
                                  fontWeight: "300",
                                  fontFamily: "Fira Code",
                                }}
                              >
                                {item}
                              </Typography>
                            </AppButton>
                          )}
                        </>
                      ))}
                    </CardActions>
                  </Box>
                </Card>
              )}
            </>
          ))}
        </Stack>
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <AppButton>
            <Link to={"/blog"}>Read more!</Link>
          </AppButton>
        </Box>
      </Box>
    </div>
  );
}

export default Article;
