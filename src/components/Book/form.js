import React, { useRef, useState } from "react";
import { Box, Text, Input, Button, Stack, Textarea, Image } from "@chakra-ui/react";
import axios from "../../axios/index";

export default function AddBook() {
  const [imageData, setImageData] = useState(null);
  // const base_url = "https://pamoja-backend.onrender.com/api";
  const base_url = "http://localhost:5000/api";

  const titleRef = useRef();
  const descriptionRef = useRef();
  const locationRef = useRef();
  const authorRef = useRef();
  const editionRef = useRef();
  const photoRef = useRef();

  const handleImageUpload = (event) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.onload = (e) => {
      setImageData(e.target.result);
    };
  };
  console.log("id", imageData);
  const submit = (event) => {
    event.preventDefault();
    axios()
      .post(`${base_url}/books`, {
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        location: locationRef.current.value,
        photo: !imageData ? "https://static.vecteezy.com/system/resources/previews/000/541/091/large_2x/green-book-on-white-background-vector.jpg" : imageData,
        author: authorRef.current.value,
        edition: editionRef.value ? editionRef.current.value : "1st",
      })
      .then((res) => {
        titleRef.current.value = null;
        descriptionRef.current.value = null;
        locationRef.current.value = null;
        setImageData(null);
        photoRef.current.value = null;
        authorRef.current.value = null;
        editionRef.current.value = null;
      })
      .catch((error) => {
        alert(error.message);
      });
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

        <label htmlFor="file">Upload photo:</label>
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
          ref={photoRef}
        />

        <Button
          colorScheme={"blue"}
          size="lg"
          width={"fit-content"}
          onClick={submit}
        >
          Add book
        </Button>
        <Image src={imageData} />
      </Stack>
    </Box>
  );
}
