import React, { useEffect, useState } from "react";
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
import { Dna, ProgressBar, Rings } from "react-loader-spinner";
import { theme } from "./../theme";

import { getPostsByUsername } from "../services/postService";
import { AppButton } from "./../components/AppButton";

function Blog(props) {
  const theme = useTheme();
  const [posts, setPosts] = useState([]);

  const populatePost = async () => {
    const { data } = await getPostsByUsername();
    setPosts(data);
  };

  useEffect(() => {
    populatePost();
  }, []);

  // if (true)
  //   return (
  //     <Box height={"100vh"} bgcolor="gold">
  //       <Dna
  //         visible={true}
  //         height="80"
  //         width="80"
  //         ariaLabel="dna-loading"
  //         wrapperStyle={{}}
  //         wrapperClass="dna-wrapper"
  //       />
  //     </Box>
  //   );

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
        {posts.length === 0 && (
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
        {posts.map((post, index) => (
          <Card
            data-aos="fade-up"
            key={index}
            sx={{
              width: {
                xs: 350,
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
        ))}
      </Container>
    </Box>
  );
}

export default Blog;
