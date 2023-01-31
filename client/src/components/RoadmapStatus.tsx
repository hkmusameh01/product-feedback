import { styled, Typography } from "@mui/material";
import React from "react";

const RoadmapStatus = ({
  status,
  color,
}: {
  status: string;
  color: string;
}) => {
  const StyledTypography = styled(Typography)(({ theme }) => ({
    "&::before": {
      content: "''",
      height: "0.6rem",
      width: "0.6rem",
      borderRadius: "50%",
      backgroundColor: `${color}`,
      position: "absolute",
      top: "50%",
      left: "0",
      transform: "translate(0, -50%)",
      marginRight: "1rem",
    },
  }));

  return (
    <StyledTypography
      variant="subtitle1"
      sx={{
        fontSize: "1rem",
        color: "#647196",
        opactiry: "0.8",
        fontFamily: "Jost",
        fontWeight: "400",
        position: "relative",
        paddingLeft: "1.5rem",
      }}
    >
      {status}
    </StyledTypography>
  );
};

export default RoadmapStatus;
