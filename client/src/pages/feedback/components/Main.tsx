import { Stack } from "@mui/material";

import { Navbar } from "../../../components";
import FeedbackSec from "./FeedbackSec";

const Main = () => {
  return (
    <Stack flex={6}>
      <Navbar />
      <FeedbackSec />
    </Stack>
  );
};

export default Main;
