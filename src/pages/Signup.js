import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Flex,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

export default function SignUpPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { getUserProfile } = useAuth();
  const base_url = "https://pamoja-backend.onrender.com/api";
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const toggleVisible = (e) => {
    e.preventDefault();
    setPasswordVisible((prevState) => !prevState);
  };
  const submit = (event) => {
    event.preventDefault();
    axios
      .post(`${base_url}/users`, {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        if (res.data.token) {
          setIsLoading(true);
          sessionStorage.setItem("token", res.data.token);
        }
        getUserProfile();
      })
      .catch((error) => {
        alert(error.message);
      });
    setTimeout(() => {
      navigate("/");
      nameRef.current.value = "";
      passwordRef.current.value = "";
      emailRef.current.value = "";
      setIsLoading(false);
    }, 2000);
  };
  return (
    <Flex height="calc(100vh - 66px)" alignItems={"center"}>
      <Flex
        height={"max-content"}
        width="70%"
        background="#fff"
        borderRadius="80px"
        justifyContent={"center"}
        margin="0 auto"
        border="1px solid black"
      >
        <Flex
          py="4rem"
          flexDirection={"column"}
          textAlign="center"
          width={"400px"}
        >
          <Text
            fontFamily="Montserrat"
            fontSize="36px"
            fontWeight="600"
            lineHeight="44px"
            letterSpacing="0em"
            textAlign="center"
            paddingBottom={"24px"}
          >
            Create your account
          </Text>

          <Text
            fontFamily="Montserrat"
            fontSize="26px"
            fontWeight="400"
            lineHeight="32px"
            letterSpacing="0em"
            textAlign="center"
          >
            Sign up as a language expert and start sharing your knowledge today!
          </Text>
          <Box>
            <Input
              type="text"
              placeholder="Name"
              pr="4.5rem"
              height="60px"
              borderRadius={"20px"}
              background="#fff"
              border="2px solid #3AA5F3"
              paddingLeft={"2rem"}
              marginTop="2rem"
              _placeholder={{ opacity: 1, color: "#000000" }}
              ref={nameRef}
            />

            <Input
              type="email"
              placeholder="Enter email"
              pr="4.5rem"
              height="60px"
              background="#fff"
              borderRadius={"20px"}
              border="2px solid #3AA5F3"
              paddingLeft={"2rem"}
              marginY="2rem"
              _placeholder={{ opacity: 1, color: "#000000" }}
              ref={emailRef}
            />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter password"
                height="60px"
                borderRadius={"20px"}
                background="#fff"
                border="2px solid #3AA5F3"
                paddingLeft={"2rem"}
                _placeholder={{ opacity: 1, color: "#000000" }}
                ref={passwordRef}
              />
              <InputRightElement width="4.5rem">
                <Button
                  as="span"
                  h="1.75rem"
                  size="sm"
                  onClick={toggleVisible}
                  margin="2 rem auto"
                >
                  {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              marginBottom="32px"
              borderRadius="20px"
              height="60px"
              width="240px"
              color="#fff"
              background={"#3182CE"}
              fontWeight={700}
              fontSize="24px"
              marginTop={"3rem"}
              _hover={{ background: "#3182CE" }}
              _active={{ background: "#3182CE" }}
              onClick={submit}
            >
              {isLoading ? (
                <span>
                  {" "}
                  <Spinner /> SIGN UP
                </span>
              ) : (
                "SIGN UP"
              )}
            </Button>
            <Text>
              Already have an account? <Link to="/login">Login</Link>
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
