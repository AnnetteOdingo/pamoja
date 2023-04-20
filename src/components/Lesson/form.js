import { Box, Stack, Text, Button , Input, Textarea} from "@chakra-ui/react";
import React, {useRef} from "react";
import axios from "../../axios/index";

export default function LessonForm(){
    const courseRef = useRef();
    const topicRef = useRef();
    const descriptionRef = useRef();
     const base_url = "https://pamoja-backend.onrender.com/api";
  // const base_url = "http://localhost:5000/api";
  const submit = (event) => {
    event.preventDefault();
    axios()
      .post(`${base_url}/lessons`, {
        topic: topicRef.current.value,
        course: courseRef.current.value,
        description: descriptionRef.current.value,
      })
      .then((res) => {
        topicRef.current.value = null;
        descriptionRef.current.value = null;
        courseRef.current.value = null;
      })
      .catch((error) => {
        alert(error.message);
      });
  };
    return(
        <Box width="600px" marginTop={"20px"}>
      <Text mb="16px" fontSize={"24px"} fontWeight={600}>
        Book a Lesson
      </Text>
      <Stack spacing={5}>
      <Input
          type="text"
          placeholder="Enter course name"
          background="#fff"
          border="2px solid #3AA5F3"
          _placeholder={{ opacity: 1, color: "#000000" }}
          ref={courseRef}
          size="lg"
        />
      <Input
          type="text"
          placeholder="Enter topic"
          background="#fff"
          border="2px solid #3AA5F3"
          _placeholder={{ opacity: 1, color: "#000000" }}
          ref={topicRef}
          size="lg"
        />
        <Textarea
          type="text"
          placeholder="Enter description"
          background="#fff"
          border="2px solid #3AA5F3"
          _placeholder={{ opacity: 1, color: "#000000" }}
          ref={descriptionRef}
          size="lg"
        />
        <Button
          colorScheme={"blue"}
          size="lg"
          width={"fit-content"}
          onClick={submit}
        >
          Book
        </Button>
      </Stack>
        </Box>
    )
}