import { Box } from "@mui/material";
import React from "react";

function Badge({ colorScheme, children, sm = false }) {
  return (
    <Box
      color={`${colorScheme}.main`}
      bgcolor={`${colorScheme}.accent`}
      borderRadius={6}
      display={"inline-flex"}
      fontFamily={"Inter"}
      fontSize={sm ? 11 : "small"}
      mr={1}
      my={0.3}
      px={2}
      py={"5px"}
    >
      {children}
    </Box>
  );
}

export default Badge;
