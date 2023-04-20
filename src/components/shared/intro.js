import { Box, Text } from "@chakra-ui/react";

import React from "react";

export default function PageIntro({ user, cost }) {
  const subtext1 = cost === "50" ? "give a book " : "teach a lesson";
  const subtext2 = cost === "50" ? "receive a book" : "have a lesson";
  const text =
    cost === "5"
      ? ` You have ${user.credits} credits, each time you submit a bug you receive ${cost} credits. Each time you commment on a bug you receive 2 credits.`
      : ` You have ${user.credits} credits, each time you ${subtext1} you receive ${cost} credits. Each time you ${subtext2} you lose ${cost} credits. You can
    only ${subtext2} if your credits are greater than or equal to ${cost}.`;
  return (
    <Box>
      <Text>
        {text}
      </Text>
    </Box>
  );
}
