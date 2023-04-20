import { Box, Button } from "@chakra-ui/react";
import React from "react";
import Book from "../components/Book";
import PageIntro from "../components/shared/intro";
import { useAuth } from "../contexts/AuthContext";
import { IoMdAdd } from "react-icons/io";
import AddBook from "../components/Book/form";
import axios from "../axios/index";
export default function Books() {
  const [showForm, setShowForm] = React.useState(false);
  const [books, setBooks] = React.useState([]);
  const base_url = "https://pamoja-backend.onrender.com/api";
  // const base_url = 'http://localhost:5000/api';
  const { user } = useAuth();
  // React.useEffect(() => {}, [showForm]);
  React.useEffect(() => {
    axios()
      .get(`${base_url}/books`)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((error) => alert(error.response.data));
  },[books, setBooks]);
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
        <PageIntro user={user} cost={"50"} />{" "}
        {!showForm && (
          <Button
            leftIcon={<IoMdAdd size="24px" />}
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
      {books.filter(book=> !book.isExchanged).map((book, index)=> <Box key={book._id}><Book  user={user} book={book}/></Box>)}
    </Box>
  );
}
