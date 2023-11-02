import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

function TagList({ tag_list }) {
  const theme = useTheme();
  return (
    <Stack direction={"row"} spacing={2}>
      {tag_list.map((item, index) => (
        <>
          {index > 1 ? null : (
            <Box
              key={item.id}
              sx={{
                color: theme.palette.slate[200],
                border: "none",
                backdropFilter : 'blur(16px) saturate(180%)',
                    backgroundColor: 'rgba(17, 25, 40, 0.75)',
                    border : "1px solid rgba(255, 255, 255, 0.125)",
                    borderRadius: "25px",
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
                  fontFamily: "averta",
                  px : 1,
                  py : 0.25
                }}
              >
                {`${item}`}
              </Typography>
            </Box>
          )}
        </>
      ))}
    </Stack>
  );
}

export default TagList;
