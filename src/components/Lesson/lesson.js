import { Box, Text, Wrap, WrapItem, Flex } from "@chakra-ui/react";
import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import Comments from "../shared/Comments";
export default function Lesson() {
  const [showComments, setShowComments] = React.useState(false);
  return (
    <Box
      padding={"40px 60px"}
      borderBottom={"1px solid #7c7c7c"}
      className="borderBottomNo"
    >
      <Flex alignItems={"flex-start"}>
        <Box minWidth={"800px"} margin="auto">
          <Text
            minWidth={"150px"}
            paddingX={"24px"}
            fontWeight={600}
            fontSize="18px"
            marginBottom={"8px"}
          >
            Data Structures
          </Text>
          <Text paddingX={"24px"} marginBottom={"8px"}>
            I need some help with Graphs, I still don't understand breadth first
            search.
          </Text>
          <Wrap paddingX={"24px"} marginBottom={"8px"}>
            <WrapItem height="24px">
              <Text background="#D4F4DD" paddingX="18px">
                Comp Science
              </Text>
            </WrapItem>
          </Wrap>
        </Box>
        <Box cursor="pointer">
          <FaChalkboardTeacher color="#3e92cc" size="40px" />
          <Text
            _hover={{
              color: "blue",
              textDecoration: "underline",
            }}
            color="rgb(8, 50, 97)"
            fontWeight={600}
          >
            Teach
          </Text>
        </Box>
      </Flex>
      <Box width='800px' margin='0 auto'>
        <Text
          marginBottom={0}
          onClick={() => setShowComments(!showComments)}
          color={"blue"}
          _hover={{ textDecoration: "underline" }}
          _active={{ textDecoration: "underline" }}
          textDecoration="none"
          marginTop={"8px"}
        >
          {!showComments ? "Chat" : "Close"}
        </Text>
        {showComments && (
          <Box padding="20px 60px">
            <Comments
              comments={[
                "Hi, I can help with graphs, when are you free?",
                "Saturday at 6:00pm",
              ]}
              comment={"comment"}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}
