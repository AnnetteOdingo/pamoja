import { Avatar, Box, Text, Flex} from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function Comments({ comments }) {
  const { user } = useAuth();

  return (
    <Box>
      {comments.map((comment, index) => {
        return (
          <Flex>
            <Box>
              <Avatar
                src={`https://avatars.test.readeo.com/default-profile-${0}.png`}
              />
              <Text>Aps</Text>
            </Box>
            <Text key={index}>{comment} </Text>
          </Flex>
        );
      })}
    </Box>
  );
}
