import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Divider, Flex } from "@chakra-ui/layout";
import { Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Spacer } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

const MainPage = () => {
  const [arrow, setArrow] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArrow = async () => {
      const resultArrow = await axios.get(
        `https://api.tvmaze.com/singlesearch/shows?q=arrow`
      );
      console.log(resultArrow.data);
      setArrow(resultArrow.data);
      setIsLoading(false);
    };
    fetchArrow();
  }, []);

  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  return isLoading ? (
    <Heading>Loading...</Heading>
  ) : (
    <Box>
      {/* Image Conatainer */}
      <Box
        className="cointainer"
        h="440px"
        w="100%"
        overflow="hidden"
      >
        <Image
          alt="Arrow Cover"
          src={arrow.image.original}
          objectFit="cover"
        />
        <Flex justify="center" align="center" pb={20}>
          <Text
            className="top-left"
            fontWeight="semibold"
            fontSize={96}
          >
            Arrow
          </Text>
        </Flex>
      </Box>

      {/* Description Container */}
      <Flex>
        <Flex h={96} ml={20} mr={20} direction="column">
          <Flex>
            <Text
              color="highlight"
              fontSize={18}
              fontWeight="semibold"
            >
              Type:
            </Text>
            <Text
              opacity="70%"
              ml={3}
              fontSize={18}
              fontWeight="light"
            >
              {arrow.type}
            </Text>
          </Flex>

          <Flex>
            <Text
              color="highlight"
              fontSize={18}
              fontWeight="semibold"
            >
              Genre:
            </Text>
            {arrow.genres.map((genre) => (
              <Text
                opacity="70%"
                ml={3}
                fontSize={18}
                fontWeight="light"
              >
                {genre}
              </Text>
            ))}
          </Flex>

          <Flex>
            <Text
              color="highlight"
              fontSize={18}
              fontWeight="semibold"
            >
              Date Premiered:
            </Text>
            <Text opacity="70%" fontSize={18} fontWeight="light">
              {arrow.premiered}
            </Text>
          </Flex>

          <Flex>
            <Text
              color="highlight"
              fontSize={18}
              fontWeight="semibold"
            >
              Date Ended:
            </Text>
            <Text opacity="70%" fontSize={18} fontWeight="light">
              {arrow.ended}
            </Text>
          </Flex>
        </Flex>

        {/* Summary Container */}
        <Box h={96} bg="gray.600">
          <Text
            pl={10}
            color="highlight"
            fontSize={26}
            fontWeight="semibold"
          >
            Summary
          </Text>
          <Box w="80%" pl={10} pr={10}>
            <Text letterSpacing="wider" fontSize={16}>
              {removeTags(arrow.summary)}
            </Text>
          </Box>
        </Box>

        {/* Links Contianer */}
        <Box bg="gray.800">
          <Flex
            p={10}
            h="100%"
            direction="column"
            justify="center"
            align="space-around"
          >
            <Button bg="highlight">Episodes</Button>
            <Spacer />
            <Divider />
            <Button bg="highlight">Charactes</Button>
            <Divider />
            <Spacer />
            <Button bg="highlight">Cast Memebers</Button>
          </Flex>
        </Box>
      </Flex>

      {/* <Flex w="100%" h={96}>
        <Box bg="gray.600">
          <Text
            pl={10}
            color="highlight"
            fontSize={26}
            fontWeight="semibold"
          >
            Summary
          </Text>
          <Box w="80%" pl={10} pr={10}>
            <Text letterSpacing="wider" fontSize={16}>
              {removeTags(arrow.summary)}
            </Text>
          </Box> */}
      {/* <Box ml={10} mr={10} pb={14}>
            <Flex>
              <Flex justify="center" align="center">
                <Text
                  color="highlight"
                  fontSize={18}
                  fontWeight="semibold"
                >
                  Type:
                </Text>
                <Text
                  opacity="70%"
                  ml={3}
                  fontSize={18}
                  fontWeight="light"
                >
                  {arrow.type}
                </Text>
              </Flex>
              <Spacer />
              <Flex justify="center" align="center">
                <Text
                  color="highlight"
                  fontSize={18}
                  fontWeight="semibold"
                >
                  Genre:
                </Text>
                {arrow.genres.map((genre) => (
                  <Text
                    opacity="70%"
                    ml={3}
                    fontSize={18}
                    fontWeight="light"
                  >
                    {genre}
                  </Text>
                ))}
              </Flex>
              <Spacer />
              <Flex justify="center" align="center">
                <Flex
                  direction="column"
                  justify="center"
                  align="center"
                >
                  <Text
                    color="highlight"
                    fontSize={18}
                    fontWeight="semibold"
                  >
                    Date Premiered:
                  </Text>
                  <Text
                    opacity="70%"
                    fontSize={18}
                    fontWeight="light"
                  >
                    {arrow.premiered}
                  </Text>
                </Flex>
                <Spacer />
                <Flex
                  pl={8}
                  direction="column"
                  justify="center"
                  align="center"
                >
                  <Text
                    color="highlight"
                    fontSize={18}
                    fontWeight="semibold"
                  >
                    Date Ended:
                  </Text>
                  <Text
                    opacity="70%"
                    fontSize={18}
                    fontWeight="light"
                  >
                    {arrow.ended}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Box> */}
      {/* </Box>
        <Box bg="gray.800">
          <Flex
            p={10}
            h="100%"
            direction="column"
            justify="center"
            align="space-around"
          >
            <Button bg="highlight">Episodes</Button>
            <Spacer />
            <Divider />
            <Button bg="highlight">Charactes</Button>
            <Divider />
            <Spacer />
            <Button bg="highlight">Cast Memebers</Button>
          </Flex> */}
      {/* </Box>
      </Flex> */}
    </Box>
  );
};

export default MainPage;
