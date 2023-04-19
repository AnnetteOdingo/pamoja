import { Box } from "@chakra-ui/react";
import React from "react";
import Book from "../components/Book";

export default function Books() {
  return (
    <Box maxWidth={"1200px"} margin='0 auto'>
      <Book />
      <Book />
    </Box>
  );
}
