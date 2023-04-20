import { Box, Text, Wrap, WrapItem, Flex } from "@chakra-ui/react";
import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import Comments from "../shared/Comments";
import axios from "../../axios/index";
export default function Lesson({ lesson, user }) {
  const [showComments, setShowComments] = React.useState(false);
  // const base_url = `https://pamoja-backend.onrender.com/api`;
  const base_url = `http://localhost:5000/api`;
  const commentsUrl = `${base_url}/lessons/${lesson._id}/comments`;
  const teachUrl = `${base_url}/lessons/teach/${lesson._id}`;
  const attendUrl = `${base_url}/lessons/attend/${lesson._id}`;
  const startSession = () => {
    debugger;
    if (lesson.user !== user._id) {
      axios()
        .put(teachUrl, { ...lesson, teachId: user._id })
        .then((res) => {
          alert("Waiting for student to approve");
        })
        .catch((error) => {
          debugger;
          alert(error.response.data.message);
        });
    } else {
      axios()
        .put(attendUrl, { ...lesson, isTaught: true })
        .then((res) => {})
        .catch((error) => {
          alert(error.response.data.message);
        });
    }
  };
  return (
    <Box
      padding={"40px 60px"}
      borderBottom={"1px solid #7c7c7c"}
      className="borderBottomNo"
    >
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Text
            minWidth={"150px"}
            // paddingX={"24px"}
            fontWeight={600}
            fontSize="18px"
            marginBottom={"8px"}
          >
            {lesson.topic}
          </Text>
          <Text marginBottom={"8px"}>{lesson.description}</Text>
          <Wrap marginBottom={"8px"}>
            <WrapItem height="24px">
              <Text background="#D4F4DD" paddingX="18px">
                {lesson.course}
              </Text>
            </WrapItem>
          </Wrap>
        </Box>
        <Box cursor="pointer" onClick={startSession}>
          <FaChalkboardTeacher color="#3e92cc" size="40px" />
          <Text
            _hover={{
              color: "blue",
              textDecoration: "underline",
            }}
            color="rgb(8, 50, 97)"
            fontWeight={600}
          >
            {lesson.user === user._id ? "Attended" : "Teach"}
          </Text>
        </Box>
      </Flex>
      <Box>
        <Text
          marginBottom={0}
          onClick={() => setShowComments(!showComments)}
          color={"blue"}
          _hover={{ textDecoration: "underline" }}
          _active={{ textDecoration: "underline" }}
          textDecoration="none"
          marginTop={"8px"}
          // paddingLeft="22px"
        >
          {!showComments ? "Chat" : "Close"}
        </Text>
        {showComments && (
          <Box padding="20px 60px">
            <Comments
              comments={lesson.comments}
              comment={"comment"}
              url={commentsUrl}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}
