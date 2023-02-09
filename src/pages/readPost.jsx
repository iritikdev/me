import {
  Avatar,
  Box,
  Button,
  Card,
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
import { AppButton } from "../components/AppButton";
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
        mt: 8,
        mb: 6,
      }}
    >
      <Container>
        <Card
          key={post?.id}
          sx={{
            backgroundColor: theme.palette.blue[800],
            color: theme.palette.slate[400],
            boxShadow: theme.shadows[0],
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontWeight: "600",
                color: theme.palette.slate[200],
                mb: 2,
              }}
            >
              {post?.title}
            </Typography>
            <CardMedia
              sx={{
                height: {
                  xs: 160,
                  sm: 350,
                },
              }}
              image={post?.cover_image}
              title="green iguana"
            />
            <Box
              sx={{
                // backgroundColor: theme.palette.blue[400],
                color: theme.palette.slate[400],
                borderRadius: "4px",
                mb: 2,
              }}
            >
              <List>
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
      </Container>
    </Box>
  );
}

export default ReadPost;
