import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button } from "@mui/material";
import { StyledBtn } from "../components/StyledButton";

const votesNum = 7;

const Votes = () => {
  return (
    <StyledBtn
      startIcon={<KeyboardArrowUpIcon sx={{ color: "var(--button-color)" }} />}
      sx={{
        height: "fit-content",
        padding: "0.8rem",
        minWidth: "fit-content",
        display: "flex",
        flexDirection: "column",
        color: "black",
      }}
    >
      {votesNum}
    </StyledBtn>
  );
};

export default Votes;
