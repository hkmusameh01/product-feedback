import {
  styled,
  InputBase,
  Button,
  Box,
  Typography,
  InputLabel
} from "@mui/material";

export const BootstrapBox = styled(Box)(({ theme }) => ({
  gap: 2,
  fontSize: "1.1rem",
  backgroundColor: "white",
  height: "fit-content",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "var(--root-border-raduis)",
  padding: "2rem 1.8rem",
  [theme.breakpoints.up("xs")]: {
    width: "80%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "55%",
  },
  [theme.breakpoints.up("md")]: {
    width: "43%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "30%",
  },
})) as typeof Box;

export const BootstrapLabel = styled(InputLabel)(({ theme }) => ({
  fontFamily: "Jost",
  fontWeight: "700",
  color: "#3a4373",
}))

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  borderRadius: 5,
  border: "1px solid transparent",
  "label + &": {
    marginTop: theme.spacing(0.2),
    marginBotton: theme.spacing(1),
    width: "100%",
  },
  "& .MuiInputBase-input": {
    borderRadius: 5,
    backgroundColor: "var(--body-bg-color)",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: ["Jost", "sans-serif"].join(","),
  },
  "&:foucs, label + &": {
    color: "black",
  },
})) as typeof InputBase;

export const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  fontFamily: 'Jost',
  fontWeight: '700',
  padding: "0.7rem 12px",
  border: "none",
  lineHeight: 1.5,
  backgroundColor: "#ad1fea",
  "&:hover": {
    backgroundColor: "#c356f5",
    boxShadow: "none",
  },
}) as typeof Button;

export const BootstrapTypography = styled(Typography)(({ theme }) => ({
  variant: "subtitle1",
  height: "2rem",
  color: "red",
  mt: 0.5,
  ml: 1,
  fontSize: 15,
  fontFamily: "Jost",
})) as typeof Typography;