import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Comments from "../shared/Comments";

export default function Bug({bug}) {
  const [showComments, setShowComments] = React.useState(false);
  const base_url = `https://pamoja-backend.onrender.com/api`;
  // const base_url = `http://localhost:5000/api`;
  const commentsUrl = `${base_url}/bugs/${bug._id}/comments`;
  return (
    <Box
      marginY="40px"
      border="1px solid black"
      background="#fff"
        padding="36px 18px"
      //   borderRadius={"60px"}
    >
      <Flex
        padding={"8px"}
        alignItems="center"
        paddingRight={"32px"}
      >
        <Text
          minWidth={"150px"}
          paddingX={"24px"}
          marginBottom={0}
          fontWeight={600}
          fontSize="18px"
        >
          Course
        </Text>
        <Text marginBottom={0}>{bug.course}</Text>
      </Flex>
      <Flex
        padding={"8px"}
        alignItems="center"
        paddingRight={"32px"}
      >
        <Text
          minWidth={"150px"}
          paddingX={"24px"}
          marginBottom={0}
          fontWeight={600}
          fontSize="18px"
        >
          Bug
        </Text>
        <Text marginBottom={0}>{bug.title}</Text>
      </Flex>
      <Flex
        padding={"8px"}
        alignItems="center"
        paddingRight={"32px"}
      >
        <Text
          minWidth={"150px"}
          marginBottom={0}
          fontWeight={600}
          fontSize="18px"
          paddingX={"24px"}
        >
          Description
        </Text>
        <Text marginBottom={0}>
          {bug.description}
        </Text>
      </Flex>
      <Box>
        <Flex
          padding={"8px"}
          alignItems="center"
          paddingRight={"32px"}
        >
          <Text
            minWidth={"150px"}
            marginBottom={0}
            fontWeight={600}
            fontSize="18px"
            paddingX={"24px"}
          >
            Fixes
          </Text>
         
            <Text
              marginBottom={0}
              onClick={() => setShowComments(!showComments)}
              color={"blue"}
              _hover={{ textDecoration: "underline" }}
              _active={{ textDecoration: "underline" }}
            >
              {
              !showComments ? "See all fixes" : "Close" }
            </Text>
          
        </Flex>
        { showComments && <Box padding="20px 160px">
          <Comments
            comments={ bug.comments}
            comment={'fix'}
            url={commentsUrl}
          />
        </Box>
}
      </Box>
    </Box>
  );
}
