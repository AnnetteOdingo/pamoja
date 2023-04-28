import {
  Box,
  Image,
  Flex,
  Text,
  Button,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import Comments from "../shared/Comments";
import axios from "../../axios/index";
const commonWords = [
  "the",
  "of",
  "and",
  "to",
  "a",
  "in",
  "that",
  "is",
  "for",
  "it",
  "with",
  "was",
  "as",
  "be",
  "on",
  "not",
  "he",
  "by",
  "are",
  "this",
  "but",
  "from",
  "or",
  "have",
  "an",
  "they",
  "which",
  "one",
  "you",
  "were",
  "her",
  "all",
  "she",
  "there",
  "would",
  "their",
  "we",
  "him",
  "been",
  "has",
  "when",
  "who",
  "will",
  "more",
  "no",
  "out",
  "do",
  "so",
  "can",
  "what",
  "and—their",
];

export default function Book({ book, user }) {
  const [showComments, setShowComments] = React.useState(false);
  const base_url = `https://pamoja-backend.onrender.com/api`;
  // const base_url = `http://localhost:5000/api`;
  const commentsUrl = `${base_url}/books/${book._id}/comments`;
  const giveUrl = `${base_url}/books/sell/${book._id}`;
  const getUrl = `${base_url}/books/buy/${book._id}`;
  const getFirstWords = (str) => {
    const words = str.trim().split(/\s+/);
    return words.slice(0, 60).join(" ");
  };
  const removePunctuation = (word) => {
    const lastChar = word.slice(-1);
    if (
      lastChar === "." ||
      lastChar === "," ||
      lastChar === ":" ||
      lastChar === "!" ||
      lastChar === "?" ||
      lastChar === ";"
    ) {
      return word.slice(0, -1);
    } else {
      return word;
    }
  };
  const tags = [
    ...new Set(
      book.description
        .split(" ")
        .filter((word) => !commonWords.includes(word.toLowerCase()))
        .slice(0, 16)
    ),
  ];
  const exchangeBook = async () => {
    if (book.user === user._id) {
      await axios()
        .put(giveUrl, { ...book, isExchanged: true })
        .then((res) => {})
        .catch((error) => {
          alert(error.response.data.message);
        });
    } else {
      await axios()
        .put(getUrl, {...book, purchaseId: user._id })
        .then((res) => {
          alert("Waiting for seller");
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    }
  };
  return (
    
    <Box
      maxWidth={"1200px"}
      marginY="40px"
      border="1px solid black"
      background="#fff"
      padding="64px"
      borderRadius={"60px"}
    >
      <Flex width='100%'>
        <Box height="360px" minWidth="300px">
          <Image
            height="100%"
            width="100%"
            objectFit=" contain"
            src={ book.photo || "https://static.vecteezy.com/system/resources/previews/000/541/091/large_2x/green-book-on-white-background-vector.jpg"}
          />
        </Box>

        <Box paddingX={"32px"} width='calc(100% - 300px)'>
          <Box>
            <Flex justifyContent={"space-between"} marginBottom="16px">
              <Text fontWeight={600} fontSize="24px" alignSelf={"center"}>
                {book.title} {book.edition} edition
              </Text>
              <Button
                cursor={"pointer"}
                height="80px"
                width="80px"
                color="#fff"
                fontWeight={700}
                fontSize="24px"
                background="linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), #1e88e5"
                _hover={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), #1e88e5",
                }}
                padding="26px"
                borderRadius={"50%"}
                onClick={exchangeBook}
              >
                {book.user === user.id ? "Give" : "Get"}
              </Button>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text marginBottom={0} fontWeight={600} fontSize="18px">
                Autor
              </Text>
              <Text marginBottom={0} fontWeight={600} fontSize="18px">
                location
              </Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text marginBottom={"8px"}>{book.author}</Text>
              <Text marginBottom={"8px"}> {book.location}</Text>
            </Flex>
          </Box>
          <Box>
            <Text marginBottom={0} fontWeight={600} fontSize="18px">
              Description
            </Text>
            <Text marginBottom={"8px"}>
              {book.description.length ===
              getFirstWords(book.description).length
                ? book.description
                : `${removePunctuation(getFirstWords(book.description))}...`}
            </Text>
            {tags && (
              <Box>
                <Text marginBottom={0} fontWeight={600} fontSize="18px">
                  Tags
                </Text>
                <Wrap>
                  {tags.map((tag, index) => {
                    return (
                      <WrapItem height="24px" key={index}>
                        <Text background="#D4F4DD" paddingX="18px">
                          {" "}
                          {removePunctuation(tag)}{" "}
                        </Text>
                      </WrapItem>
                    );
                  })}
                </Wrap>
              </Box>
            )}
          </Box>
        </Box>
      </Flex>
      {/* Comments */}
      {showComments ? (
        <Box mx="16px">
          <Text
            mt="32px"
            marginBottom={"16px"}
            fontWeight={600}
            fontSize="18px"
          >
            Comments
          </Text>
          <Comments
            comments={book.comments}
            comment={"comment"}
            url={commentsUrl}
          />
          <Flex justifyContent={"flex-end"} mt="8px">
            {" "}
            <Text
              onClick={() => setShowComments(!showComments)}
              color={"blue"}
              _hover={{ textDecoration: "underline" }}
              _active={{ textDecoration: "underline" }}
            >
              Close Comments
            </Text>
          </Flex>
        </Box>
      ) : (
        <Flex justifyContent={"flex-end"} mt="16px">
          {" "}
          <Text
            onClick={() => setShowComments(!showComments)}
            color={"blue"}
            _hover={{ textDecoration: "underline" }}
            _active={{ textDecoration: "underline" }}
          >
            Read Comments
          </Text>
        </Flex>
      )}
    </Box>
  );
}
