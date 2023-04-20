import { Avatar, Box, Text, Flex, Textarea, Button } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import axios from "../../axios/index";

export default function Comments({ comments, comment, url }) {
  const { user } = useAuth();
  const commentRef = useRef();

  const submit = (event) => {
    event.preventDefault();
    axios()
      .put(`${url}`, {
        comment: commentRef.current.value,
        userId: user._id,
      })
      .then((res) => {
        commentRef.current.value = null;
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <Box>
      {comments.map((comment, index) => {
        return (
          <Flex
            padding="16px"
            justifyContent={"flex-start"}
            border="1px dashed #7c7c7c"
            marginBottom="18px"
          >
            <Box maxWidth="120px" textAlign={"center"}>
              <Avatar src={comment.userAvatar} />
              <Text>{comment.username}</Text>
            </Box>
            <Text paddingLeft={"32px"} key={index}>
              {comment.comment}{" "}
            </Text>
          </Flex>
        );
      })}
      <Textarea placeholder={`Add a ${comment}...`} ref={commentRef} />

      <Button mt="28px" height={"54px"} colorScheme={"blue"} onClick={submit}>
        Submit
      </Button>
    </Box>
  );
}
