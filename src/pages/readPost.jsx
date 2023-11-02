import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AppButton from "../components/AppButton";
import { getPostById } from "../services/postService";
import { theme } from "../theme";
import { Parser } from "html-to-react";
import { Rings } from "react-loader-spinner";
import Contact from "./../components/contact";

function ReadPost(props) {
  const params = useParams();
  const [post, setPost] = useState();

  const populatePost = async () => {
    const { data } = await getPostById(params.id);
    setPost(data);
  };

  useEffect(() => {
    populatePost();
  }, []);

  if (post === undefined || post === null) {
    return (
      <Box
        flex={1}
        display={"flex"}
        justifyContent="center"
        mt={8}
        mb={6}
        data-aos="fade-up"
      >
        {!post && (
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
      </Box>
    );
  }

  return (
    <Box
      sx={{
        fontFamily: "Inter",
        mt: 10,
        mb: 10,
      }}
    >
      <Container
        sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
      >
        
        <Box flex={8}>
          <Card
            key={post?.id}
            sx={{
              
              backgroundColor: theme.palette.blue[800],
              color: theme.palette.slate[400],
              boxShadow: theme.shadows[0],
            }}
          >
            <CardContent>
              <CardMedia
                sx={{
                  height: {
                    xs: 160,
                    sm: 350,
                  },
                }}
                image={post?.cover_image}
                title="cover image"
              />
              <Box
                sx={{
                  color: theme.palette.slate[400],
                  borderRadius: "4px",
                  mb: 2,
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                   fontFamily : "averta-bold",
                    color: theme.palette.slate[200],
                    my: 2,
                  }}
                >
                  {post?.title}
                </Typography>
                <List sx={{
                  backdropFilter : 'blur(16px) saturate(180%)',
                  backgroundColor: 'rgba(17, 25, 40, 0.75)',
                  border : "1px solid rgba(255, 255, 255, 0.125)",
                  borderRadius: "12px"
                }}>
                  <ListItem alignItems="flex-start" key={post?.id}>
                    <ListItemAvatar>
                      <Avatar
                        alt={post?.user.name}
                        src={post?.user.profile_image}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primaryTypographyProps={{
                        sx: {
                          fontWeight: "600",
                          color: theme.palette.slate[200],
                        },
                      }}
                      primary={post?.user.name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            color={theme.palette.slate[400]}
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body1"
                          >
                            Published: {post?.readable_publish_date}
                          </Typography>
                          <Typography
                            color={theme.palette.slate[400]}
                          ></Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </List>
              </Box>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: post?.body_html }}
              ></div>
            </CardContent>
            <CardActions>
              {post?.tags.map((item, index) => (
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
              ))}
            </CardActions>
          </Card>
        </Box>
        <Box flex={3} pt={1.8}>
          <Card sx={{ bgcolor: "#112240", boxShadow: "none" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={
                  "https://c4.wallpaperflare.com/wallpaper/670/883/685/plexus-atoms-neutrons-electrons-wallpaper-preview.jpg"
                }
                alt="Ritik Sharma"
              />
              <CardContent sx={{ color: theme.palette.slate[200] }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontWeight={"500"}
                >
                  Ritik Kumar
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.slate[400] }}
                >
                  I’m a fullstack developer specializing in building (and
                  occasionally designing) exceptional digital experiences.
                  Currently, I’m studied computer science & engineering at LNJP
                  institute of technology.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}

export default ReadPost;
