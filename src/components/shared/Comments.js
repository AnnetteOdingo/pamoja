import { Avatar, Box, Text, Flex, Textarea, Button } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function Comments({ comments }) {
  const { user } = useAuth();

  return (
    <Box>
      {comments.map((comment, index) => {
        return (
          <Flex padding="16px" justifyContent={"flex-start"} border='1px dashed #7c7c7c' marginBottom='8px'>
            <Box maxWidth="120px" textAlign={"center"}>
              <Avatar
                src={`https://avatars.test.readeo.com/default-profile-${0}.png`}
              />
              <Text>Aps</Text>
            </Box>
            <Text paddingLeft={"32px"} key={index}>
              {comment}{" "}
            </Text>
          </Flex>
        );
      })}
      <Textarea placeholder="Add a comment..." />

      <Button mt='18px' height={'54px'} colorScheme={'blue'}>Comment</Button>
    </Box>
  );
}
