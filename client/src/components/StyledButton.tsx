import { styled, Button } from "@mui/material";

const StyledBtn = styled(Button)(({ theme }) => ({
  backgroundColor: "var(--button-bg-color)",
  borderRadius: "var(--button-border-raduis)",
  fontFamily: "Jost",
  fontWeight: "600",
  fontSize: ".8rem",
  textTransform: "none",
  padding: "var(--button-padding)",
  "&:hover": {
    backgroundColor: "var(--button-bg-hover)",
  },
}));

const StyledButton = ({ content }: { content: string }) => {
  return (
    <StyledBtn disableElevation href="#" sx={{}}>
      {content}
    </StyledBtn>
  );
};

export default StyledButton;
