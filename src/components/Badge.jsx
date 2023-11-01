import { Box } from "@mui/material";
import React from "react";
import { theme } from "../theme";

function Badge({ children, sm=false }) {
  return (
    <Box
      display={"inline-flex"}
      bgcolor={theme.palette.green.accent}
      borderRadius={6}
      py={"5px"}
      px={2}
      color={theme.palette.green.main}
      fontFamily={"Inter"}
      fontSize={sm ? 11 : "small"}
      ml={1}
    >
      {children}
    </Box>
  );
}

export default Badge;
