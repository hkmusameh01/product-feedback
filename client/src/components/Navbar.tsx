import { Box, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useLocation } from "react-router-dom";
import NavInfo from "../pages/feedback/components/NavInfo";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <Stack
      flexDirection="row"
      bgcolor={"var(--nav-bar-bg)"}
      borderRadius="var(--root-border-raduis)"
      padding="0.8rem 1.2rem"
    >
      {pathname === "/feedback" ? <NavInfo /> : "/"}
      <Box
        flex={1}
        sx={{
          display: "flex",
        }}
      >
        <Button
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: "#ad1fea",
            fontFamily: "var(--main-font-family)",
            color: "#FFF",
            textTransform: "none",
            fontWeight: "700",
            marginLeft: "auto",
            padding: ".8rem 1rem",
            borderRadius: "var(--button-border-raduis)",
            "&:hover": {
              backgroundColor: "#c356f5 !important",
            },
          }}
        >
          Add Feedback
        </Button>
      </Box>
    </Stack>
  );
};

export default Navbar;
