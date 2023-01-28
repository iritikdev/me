import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import SectionHeader from "./sectionHeader";

import { one, two, three } from "../assets";
import { DiJavascript1, DiReact } from "react-icons/di";
import { SiMaterialui, SiNodedotjs, SiExpress } from "react-icons/si";

import { theme } from "../theme";
const articles = [
  {
    source: {
      id: null,
      name: "Biztoc.com",
    },
    author: "businessinsider.com",
    title:
      "Elon Musk is the 'enemy' inside Tesla, a top Wall Street analyst warns to agent.",
    description:
      'Elon Musk has faced concern from Tesla investors and analysts due to his preoccupation with Twitter. Getty Images Jeffries analyst Philippe Houchois warned that Elon Musk poses a risk to Tesla on Thursday. Houchois called Musk "the enemy" inside of Tesla, in …',
    url: "https://biztoc.com/x/885316ca935d79ec",
    urlToImage: one,
    publishedAt: "2023-01-28T10:58:06Z",
  },
  {
    source: {
      id: null,
      name: "Biztoc.com",
    },
    author: "huffpost.com",
    title:
      "Elon Musk Faces SEC Investigation Over Tesla's 'Self-Driving' Claims: Report",
    description:
      "The Securities and Exchange Commission is investigating Tesla CEO Elon Musk’s role in “shaping” the company’s claims on “self-driving” cars, Bloomberg reported Friday. Sources told Bloomberg that the review is part of an investigation into Tesla’s statements …",
    url: "https://biztoc.com/x/a06db41e681c4c8a",
    urlToImage: two,
    publishedAt: "2023-01-28T10:50:04Z",
    content:
      "The Securities and Exchange Commission is investigating Tesla CEO Elon Musks role in shaping the companys claims on self-driving cars, Bloomberg reported Friday.Sources told Bloomberg that the review… [+262 chars]",
  },
  {
    source: {
      id: null,
      name: "Biztoc.com",
    },
    author: "wsj.com",
    title:
      "Where Are Stocks, Bonds and Crypto Headed Next? Five Investors Look Into Crystal Ball",
    description:
      "A new trading year kicked off just weeks ago. Already it bears little resemblance to the carnage of 2022. After languishing throughout last year, growth stocks have zoomed higher. Tesla Inc. and Nvidia Corp., for example, have jumped more than 30%. The outloo…",
    url: "https://biztoc.com/x/29d75889c310385a",
    urlToImage: three,
    publishedAt: "2023-01-28T10:46:06Z",
    content:
      "A new trading year kicked off just weeks ago. Already it bears little resemblance to the carnage of 2022.After languishing throughout last year, growth stocks have zoomed higher. Tesla Inc. and Nvidi… [+248 chars]",
  },
];

const stack = [
  {
    id: 1,
    name: "JavaScript",
    icon: <DiJavascript1 color={theme.palette.blue[800]} size={16} />,
    color: "#fcdc00",
  },
  {
    id: 2,
    name: "React",
    icon: <DiReact color={theme.palette.blue[800]} size={16} />,
    color: "#61dafb",
  },

  {
    id: 5,
    name: "Express",
    icon: <SiExpress color={theme.palette.blue[800]} size={14} />,
    color: "#259dff",
  },
];
const animate = ["fade-right", "fade-up", "fade-left"];

function Article(props) {
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
            md: 20,
          },
        }}
      >
        <SectionHeader title={"Read my latest blog"} number={"04."} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={1.5}
          data-aos="fade-up"
        >
          {articles.map((article, index) => (
            <Card
              key={index}
              // data-aos={animate[index]}
              sx={{
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
                image={article.urlToImage}
                title="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  fontSize={14}
                  fontWeight={600}
                  lineHeight={1.35}
                  color={theme.palette.slate[200]}
                  sx={{
                    ":hover": {
                      color: theme.palette.green.main,
                    },
                  }}
                >
                  {article.title}
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={13.5}
                  color={theme.palette.slate[400]}
                >
                  {article.description.slice(0, 125)}
                </Typography>
              </CardContent>
              <CardActions>
                {stack.map((item) => (
                  <Button
                    key={item.id}
                    sx={{
                      px: 0.0,
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
                      {item.name}
                    </Typography>
                  </Button>
                ))}
              </CardActions>
            </Card>
          ))}
        </Stack>
      </Box>
    </div>
  );
}

export default Article;
