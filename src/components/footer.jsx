import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { DiJavascript1, DiReact } from "react-icons/di";
import { SiMaterialui, SiNodedotjs, SiExpress } from "react-icons/si";

import { theme } from "../theme";

export const stack = [
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
    id: 3,
    name: "mui",
    icon: <SiMaterialui color={theme.palette.blue[800]} size={14} />,
    color: "#007fff",
  },
  {
    id: 4,
    name: "Node",
    icon: <SiNodedotjs color={theme.palette.blue[800]} size={14} />,
    color: "#026e00",
  },
  {
    id: 5,
    name: "Express",
    icon: <SiExpress color={theme.palette.blue[800]} size={14} />,
    color: "#259dff",
  },
];

function Footer(props) {
  return (
    <Box
      sx={{
        height: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            cursor: "pointer",
            pb: 1,
            fontSize: 12,
            fontWeight: "300",
            fontFamily: "Fira Code",
            color: theme.palette.slate[200],
            "&:hover": {
              color: theme.palette.green.main,
            },
          }}
        >
          Design adapted from Brittany & Built by&nbsp;
          <Typography
            component={"span"}
            sx={{
              fontSize: 12,
              fontFamily: "Inter",
              fontWeight: "600",
            }}
          >
            @me
          </Typography>
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: {
                md: "auto",
                xs: 250,
              },
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              justifyContent: "center",
            }}
          >
            {stack.map((item) => (
              <Button
                key={item.id}
                startIcon={item.icon}
                sx={{
                  backgroundColor: item.color,
                  py: 0.2,

                  "&:hover": {
                    color: theme.palette.blue[800],
                    backgroundColor: item.color,
                  },
                }}
              >
                <Typography
                  sx={{
                    textTransform: "none",
                    fontSize: 10,
                    fontWeight: "300",
                    fontFamily: "Fira Code",
                    color: theme.palette.blue[800],
                  }}
                >
                  {item.name}
                </Typography>
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
