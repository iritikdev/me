import { Box, Stack } from "@mui/material";

import { AnimatedButton } from "./AnimatedButton";
import SocialIcons from "./SocialIcons";

function SocialSideBar() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 5,
        left: 40,
        py: 2,
        px: 1,
        display: { lg: "block", md: "none", sm: "none", xs: "none" },
      }}
    >
      <Box
        display={"flex"}
        alignItems="center"
        flexDirection={"column"}
        rowGap={2}
      >
        <SocialIcons spacing={3} />
        <Box
          sx={{
            backgroundColor: "slate.400",
            height: 125,
            width: 1.5,
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default SocialSideBar;
