import React, { useRef, useState } from "react";
import { Box, Text, Input, Button, Stack, Textarea } from "@chakra-ui/react";
import axios from "../../axios";

export default function AddBook() {
  const [imageData, setImageData] = useState("");
  const titleRef = useRef();
  const descriptionRef = useRef();
  const locationRef = useRef();
  const authorRef = useRef();
  const editionRef = useRef();
  const handleImageUpload = (event) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.onload = (e) => {
      setImageData(e.target.result);
    };
  };

  return (
    <Box width="600px" marginTop={"20px"}>
      <Text mb="16px" fontSize={"24px"} fontWeight={600}>
        Add a Book
      </Text>
      <Stack spacing={5}>
        <Input
          type="text"
          placeholder="Enter book title"
          background="#fff"
          border="2px solid #3AA5F3"
          _placeholder={{ opacity: 1, color: "#000000" }}
          ref={titleRef}
          size="lg"
        />
        <Input
          type="text"
          placeholder="Enter pick up location"
          background="#fff"
          border="2px solid #3AA5F3"
          _placeholder={{ opacity: 1, color: "#000000" }}
          ref={locationRef}
          size="lg"
        />
        <Input
          type="text"
          placeholder="Enter author name"
          background="#fff"
          border="2px solid #3AA5F3"
          _placeholder={{ opacity: 1, color: "#000000" }}
          ref={authorRef}
          size="lg"
        />
        <Input
          type="text"
          placeholder="Enter book edition"
          background="#fff"
          border="2px solid #3AA5F3"
          _placeholder={{ opacity: 1, color: "#000000" }}
          ref={editionRef}
          size="lg"
        />
        <Textarea
          type="text"
          placeholder="Enter book description"
          background="#fff"
          border="2px solid #3AA5F3"
          _placeholder={{ opacity: 1, color: "#000000" }}
          ref={descriptionRef}
          size="lg"
        />

        <label for="file">Upload photo:</label>
        <Input
          id="file"
          type="file"
          accept="image/*"
          placeholder="Enter a photo of the book"
          background="#fff"
          border="2px solid #3AA5F3"
          _placeholder={{ opacity: 1, color: "#000000" }}
          size="lg"
          onChange={handleImageUpload}
          paddingTop="6px"
        />

        <Button colorScheme={"blue"} size="lg" width={"fit-content"}>
          Add book
        </Button>
      </Stack>
    </Box>
  );
}
