import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Menu } from "../../../components";

const NavInfo = () => {
  const [commentsCount, setCommentCount] = useState<number>(5);

  return (
    <Stack
      flex={1}
      flexDirection="row"
      alignItems="center"
      color={"#fff"}
      fontFamily="var(--main-font-family)"
      justifyContent={"space-between"}
      pr={2}
    >
      <Stack flexDirection={"row"} alignItems="center">
        <WbSunnyIcon />
        <Typography
          fontSize={"1.2rem"}
          fontFamily={"var(--main-font-family)"}
          fontWeight="700"
          variant="subtitle2"
          sx={{ marginLeft: "1.1rem" }}
        >
          {commentsCount} Suggestions
        </Typography>
      </Stack>
      <Menu />
    </Stack>
  );
};

export default NavInfo;
