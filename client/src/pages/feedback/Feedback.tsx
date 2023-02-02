import { Container, styled } from "@mui/material";
import Side from "./components/Side";
import Main from "./components/Main";

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  marginTop: "3.5rem",
  gap: "1.5rem",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

const Feedback = () => {
  return (
    <StyledContainer maxWidth="lg" disableGutters={true}>
      <Side />
      <Main />
    </StyledContainer>
  );
};

export default Feedback;
