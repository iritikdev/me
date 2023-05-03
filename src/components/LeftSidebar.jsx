import { Stack } from "@mui/material";

import SocialIcons from "./SocialIcons";
import VerticalLine from "./VerticalLine";

function LeftSidebar() {
  return (
    <Stack
      spacing={3}
      alignItems="center"
      justifyContent={"center"}
      sx={{
        display: { lg: "flex", md: "none", sm: "none", xs: "none" },
        position: "fixed",
        bottom: 5,
        left: 40,
        py: 2,
        px: 1,
      }}
    >
      <SocialIcons spacing={3} />
      <VerticalLine />
    </Stack>
  );
}

export default LeftSidebar;
