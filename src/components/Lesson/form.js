import { Box, Stack, Text, Button , Input, Textarea} from "@chakra-ui/react";
import React, {useRef} from "react";

export default function LessonForm(){
    const courseRef = useRef();
    const topicRef = useRef();
    const descriptionRef = useRef();
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
        >
          Book
        </Button>
      </Stack>
        </Box>
    )
}