import {
  Button,
  Fade,
  Menu as MUIMenu,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

import "./menu.css";

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontFamily: "var(--main-font-family)",
  paddingTop: "0.8rem",
  paddingBottom: ".8rem",
}));

const Menu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        sx={{
          color: "white",
          fontFamily: "var(--main-font-family)",
          textTransform: "none",
        }}
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Sort by{" "}
        <Typography fontFamily="var(--main-font-family)" fontWeight={"700"}>
          : Most Upvotes
        </Typography>
      </Button>
      <MUIMenu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <StyledMenuItem onClick={handleClose}>Most Upvotes</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>Least Upvotes</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>Most Comments</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>Least Comments</StyledMenuItem>
      </MUIMenu>
    </>
  );
};

export default Menu;
