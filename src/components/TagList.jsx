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
                {`#${item}`}
              </Typography>
            </Box>
          )}
        </>
      ))}
    </Stack>
  );
}

export default TagList;
