import { styled, Button } from "@mui/material";

export const StyledBtn = styled(Button)(({ theme }) => ({
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
    <StyledBtn disableElevation href="#">
      {content}
    </StyledBtn>
  );
};

export default StyledButton;
