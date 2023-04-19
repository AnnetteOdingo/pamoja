import { Box, Stack, Text, Button , Input, Textarea} from "@chakra-ui/react";
import React, {useRef} from "react";

export default function DocumentBug(){
    const courseRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    return(
        <Box width="600px" marginTop={"20px"}>
      <Text mb="16px" fontSize={"24px"} fontWeight={600}>
        Document a Bug
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
          placeholder="Enter bug title"
          background="#fff"
          border="2px solid #3AA5F3"
          _placeholder={{ opacity: 1, color: "#000000" }}
          ref={titleRef}
          size="lg"
        />
        <Textarea
          type="text"
          placeholder="Enter bug description"
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
          Add bug
        </Button>
      </Stack>
        </Box>
    )
}