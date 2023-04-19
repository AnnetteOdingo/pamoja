import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Comments from "../shared/Comments";

export default function Bug() {
  const [showComments, setShowComments] = React.useState(false);
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
        <Text marginBottom={0}>Life</Text>
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
        <Text marginBottom={0}>abcd</Text>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
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
            comments={[
              "Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Ut diam quam nulla porttitor massa id.",
              "At risus viverra adipiscing at",
            ]}
            comment={'fix'}
          />
        </Box>
}
      </Box>
    </Box>
  );
}
