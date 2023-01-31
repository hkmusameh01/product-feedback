import { Box, Stack, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { StyledButton, RoadmapStatus } from "../../../components";

const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
const roadmapFakeData = [
  { status: "Planned", color: "#f49f86", number: 1 },
  { status: "In-Progress", color: "#ad1fea", number: 1 },
  { status: "Live", color: "#61bdfa", number: 1 },
];

const StyledBox = styled(Box)(({ theme }) => ({
  borderRadius: "var(--root-border-raduis)",
  padding: "var(--root-padding)",
  [theme.breakpoints.down("lg")]: {
    width: "32%",
    minHeight: "100%",
  },
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  flex: 2,
  justifyContent: "space-between",
  height: "31.5rem",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "row",
  },
}));

const Side = () => {
  return (
    <StyledStack>
      <StyledBox
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          minHeight: "8.5rem",
          backgroundImage:
            "radial-gradient(circle at -5rem -15rem,#61bdfa 0,transparent 50%),radial-gradient(circle at calc(100% + 5rem) calc(100% + 5rem),#f49f86 0,transparent 50%),radial-gradient(farthest-corner at 100% 0,#e84a6f 0,#ad1fea 50%,#26a8ed 100%);",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: "white",
            fontSize: "1.2rem",
            fontFamily: "Jost",
            fontWeight: "700",
            lineHeight: "1.3",
          }}
        >
          Product Feedback
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "white",
            opacity: ".6",
            fontFamily: "Jost",
            fontWeight: "500",
            fontSize: ".9rem",
          }}
        >
          Suggestion Board
        </Typography>
      </StyledBox>
      <StyledBox
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.8rem",
          backgroundColor: "white",
        }}
      >
        {categories.map((cat, i) => (
          <StyledButton key={i + cat} content={cat}></StyledButton>
        ))}
      </StyledBox>
      <StyledBox sx={{ height: "10rem", backgroundColor: "white" }}>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "1.1rem",
              color: "#3a4373",
              opactiry: "0.7",
              fontFamily: "Jost",
              fontWeight: "700",
              lineHeight: "1.3",
            }}
          >
            Roadmap
          </Typography>
          <Link
            to="/roadmap"
            style={{
              fontSize: ".9rem",
              color: "var(--button-color)",
              fontWeight: "600",
            }}
          >
            View
          </Link>
        </Stack>
        <Box>
          <Stack
            flexDirection="column"
            alignItems="space-between"
            justifyContent="space-between"
          >
            {roadmapFakeData.map((status, i) => (
              <Stack flexDirection={"row"} justifyContent="space-between">
                <RoadmapStatus
                  status={status.status}
                  color={status.color}
                ></RoadmapStatus>
                <Typography
                  sx={{
                    fontFamily: "Jost",
                    fontWeight: "700",
                    color: "#647196",
                  }}
                >
                  {status.number}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </StyledBox>
    </StyledStack>
  );
};

export default Side;
