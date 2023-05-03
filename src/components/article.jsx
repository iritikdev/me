import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { theme } from "../theme";
import SectionHeader from "./sectionHeader";
import { AppButton } from "./AppButton";
import { Link } from "react-router-dom";
import { Rings } from "react-loader-spinner";
import useArticles from "../hooks/useArticles";

function Article(props) {
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
            md: 16,
          },
        }}
      >
        <SectionHeader number={"04."} title={"Read my latest blog"} />

        <Box display="flex" flexWrap="wrap" gap={3} justifyContent="center">
          {isLoading && (
            <Rings
              height="80"
              width="80"
              color={theme.palette.green.main}
              radius="6"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="rings-loading"
            />
          )}
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
                    <CardMedia sx={{ height: 150 }} image={post.cover_image} />
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
                  </Link>

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
                                border: "none",
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
        </Box>
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
