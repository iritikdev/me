import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { getPostById } from "../services/postService";
import { theme } from "../theme";
import Markdown from "react-markdown";
import AppButton from "./../components/AppButton";
import Badge from "../components/Badge";

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
                  borderRadius: 1,
                }}
                image={post?.cover_image}
                title="cover image"
              />
              <Box display="flex" my={4} columnGap={2}>
                <Avatar alt={post?.user.name} src={post?.user.profile_image} />
                <Box>
                  <Typography fontFamily={"averta-bold"} fontSize={17}>{post?.user.name}</Typography>
                  <Typography fontSize={14}>Post on {new Date(post?.published_at).toDateString()}</Typography>
                </Box>
              </Box>

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
                  fontSize={28}
                  sx={{
                    fontFamily: "averta-bold",
                    color: theme.palette.slate[200],
                    my: 2,
                  }}
                >
                  {post?.title}
                </Typography>
                <Box mb={4}>
                  {post?.tags.map((item, index) => (
                    <Badge key={item.id} colorScheme={"violet"}>
                      {item}
                    </Badge>
                  ))}
                </Box>
              </Box>
              <Box
                fontSize={16}
                className="content"
                dangerouslySetInnerHTML={{ __html: post?.body_html }}
              ></Box>
            </CardContent>
          </Card>
        </Box>
        <Box flex={3} pt={1.8}>
        <Card
        sx={{
          backdropFilter : 'blur(16px) saturate(180%)',
          backgroundColor: 'rgba(17, 25, 40, 0.75)',
          border : "1px solid rgba(255, 255, 255, 0.125)",
          borderRadius: "12px"
        }}
        >
          <CardContent>
            <Typography fontFamily={"averta-semi"} fontSize={20} color={"slate.200"}>More from Ritik Sharma</Typography>
            <Divider />
          </CardContent>
        </Card>
        </Box>
      </Container>
    </Box>
  );
}

export default ReadPost;
