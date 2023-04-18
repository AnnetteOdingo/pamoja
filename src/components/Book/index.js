import {
  Box,
  Image,
  Flex,
  Heading,
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
  ":",
  ",",
  ";",
];

export default function Book() {
  const getFirstWords = (str) => {
    const words = str.trim().split(/\s+/);
    return words.slice(0, 50).join(" ");
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
        .slice(0, 12)
    ),
  ];

  return (
    <Box>
      <Flex>
        <Image
          height="360px"
          width="300px"
          src="https://m.media-amazon.com/images/I/41mtUoTi8ZL._SX351_BO1,204,203,200_.jpg"
        />
        <Box>
          <Box>
            <Flex>
              <Heading>Author</Heading>
              <Heading>Location</Heading>
            </Flex>
            <Flex>
              <Text>Daudi</Text>
              <Text>Allendale</Text>
            </Flex>
          </Box>
          <Box>
            <Heading>Description</Heading>
            <Text>
              {description.length === getFirstWords(description).length
                ? description
                : `${getFirstWords(description)}...`}
            </Text>
            {tags && (
              <Box>
                <Heading>Tags</Heading>
                <Wrap>
                  {tags.map((tag, index) => {
                    return (
                      <WrapItem>
                        <Text  key={index}> {removePunctuation(tag)} </Text>
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
      <Box>
        <Heading>Comments</Heading>
        <Comments
          comments={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","the book is new", "the book is new", "the book is new"]}
        />
        <Button>Add a Comment</Button>
      </Box>
    </Box>
  );
}
