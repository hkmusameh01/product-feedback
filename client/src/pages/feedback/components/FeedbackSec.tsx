import { Stack, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import Votes from "../../../Votes/Votes";
import { Link } from "react-router-dom";

const data = {
  title: "Molestiae nemo in sunt.",
  content:
    "Reiciendis enim soluta excepturi. Ullam sit enim voluptatibus qui. Similique quis sed. Culpa amet sit recusandae. Neque reprehenderit impedit consequatur nostrum et similique voluptatem.",
  votes: 7,
  commentsNum: 9,
  category: "UI",
};

const FeedbackSec = () => {
  return (
    <Stack
      bgcolor={"white"}
      flexDirection={"row"}
      p={3}
      margin="2rem 0"
      borderRadius={"var(--root-border-raduis)"}
    >
      <Votes />
      <Stack ml={5}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Typography
            fontFamily={"Jost"}
            fontWeight={700}
            variant="h6"
            color={"#3a4373"}
            sx={{ "&:hover": { color: "var(--button-color)" } }}
          >
            {data.title}
          </Typography>
        </Link>
        <Typography
          width={"80%"}
          variant="subtitle1"
          fontFamily={"Jost"}
          fontWeight="400"
          color={"#647196"}
          lineHeight={1.4}
          margin={"0.8rem 0 1.5rem"}
        >
          {data.content}
        </Typography>
        <Stack flexDirection={"row"} alignItems="center" pr={2}>
          <Typography
            sx={{
              backgroundColor: "var(--button-bg-color)",
              borderRadius: "var(--button-border-raduis)",
              fontFamily: "Jost",
              fontWeight: "600",
              fontSize: ".8rem",
              textTransform: "none",
              padding: "var(--button-padding)",
              color: "var(--button-color)",
            }}
          >
            {data.category}
          </Typography>
          <ChatBubbleOutlineIcon
            sx={{
              marginLeft: "auto",
              marginRight: "0.7rem",
              color: "#3a4373",
              opacity: "0.5",
            }}
            fontSize="small"
          />
          <Typography
            fontFamily="Jost"
            fontSize={"0.85rem"}
            fontWeight={700}
            color="#3a4373"
          >
            {data.commentsNum}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FeedbackSec;
