import { Box, Button } from "@chakra-ui/react";
import React from "react";
import Book from "../components/Book";
import PageIntro from "../components/shared/intro";
import { useAuth } from "../contexts/AuthContext";
import { IoMdAdd } from "react-icons/io";
import AddBook from "../components/Book/form";

export default function Books() {
  const [showForm, setShowForm] = React.useState(false);
  const { user } = useAuth();
  React.useEffect(() => {}, [showForm]);
  if (!user) {
    return;
  }

  return (
    <Box maxWidth={"1200px"} margin="0 auto">
      <Box
        border="2px solid #3e92cc"
        marginTop="40px"
        padding={"50px"}
        fontSize="20px"
        background="#fff"
        borderRadius="20px"
      >
        <PageIntro
          user={user}
          cost={"50"}
        />{" "}
        { !showForm && (
          <Button
            leftIcon={<IoMdAdd size='24px' />}
            colorScheme="blue"
            variant="outline"
            onClick={() => setShowForm(!showForm)}
          >
            Add a book
          </Button>
        )}{" "}
        {showForm && (
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={() => setShowForm(!showForm)}
          >
            Cancel
          </Button>
        )}
        {showForm && <AddBook />}
      </Box>
      <Book />
      <Book />
    </Box>
  );
}
