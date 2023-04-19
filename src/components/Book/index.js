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

export default function Book() {
  const [showComments, setShowComments] = React.useState(false);
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
  const description =
    "Ikigai reveals the secrets to their longevity and happiness: how they eat, how they move, how they work, how they foster collaboration and community, and—their best-kept secret—how they find the ikigai that brings satisfaction to their lives. And it provides practical tools to help you discover your own ikigai.Ikigai reveals the secrets to their longevity and happiness: how they eat, how they move, how they work, how they foster collaboration and community, and—their best-kept secret—how they find the ikigai that brings satisfaction to their lives. And it provides practical tools to help you discover your own ikigai.";
  const tags = [
    ...new Set(
      description
        .split(" ")
        .filter((word) => !commonWords.includes(word.toLowerCase()))
        .slice(0, 16)
    ),
  ];

  return (
    <Box
      maxWidth={"1200px"}
      marginY="40px"
      border="1px solid black"
      background="#fff"
      padding="64px"
      borderRadius={"60px"}
    >
      <Flex>
        <Box height="360px" minWidth="300px">
          <Image
            height="100%"
            width="100%"
            objectFit=" contain"
            src="https://m.media-amazon.com/images/I/41mtUoTi8ZL._SX351_BO1,204,203,200_.jpg"
          />
        </Box>

        <Box paddingX={"32px"}>
          <Box>
            <Flex justifyContent={"space-between"} marginBottom="16px">
              <Text fontWeight={600} fontSize="24px" alignSelf={"center"}>
                Ikigai 1st Edition
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
              >
                Get
              </Button>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text marginBottom={0} fontWeight={600} fontSize="18px">
                Author
              </Text>
              <Text marginBottom={0} fontWeight={600} fontSize="18px">
                Location
              </Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text marginBottom={"8px"}>Daudi</Text>
              <Text marginBottom={"8px"}>Allendale</Text>
            </Flex>
          </Box>
          <Box>
            <Text marginBottom={0} fontWeight={600} fontSize="18px">
              Description
            </Text>
            <Text marginBottom={"8px"}>
              {description.length === getFirstWords(description).length
                ? description
                : `${removePunctuation(getFirstWords(description))}...`}
            </Text>
            {tags && (
              <Box>
                <Text marginBottom={0} fontWeight={600} fontSize="18px">
                  Tags
                </Text>
                <Wrap>
                  {tags.map((tag, index) => {
                    return (
                      <WrapItem height="24px">
                        <Text background="#D4F4DD" paddingX="18px" key={index}>
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
            comments={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              "the book is new",
              "the book is new",
              "the book is new",
            ]}
            comment={'comment'}
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
        <Flex justifyContent={"flex-end"} mt='16px'>
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
