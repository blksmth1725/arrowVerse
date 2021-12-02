import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Flex } from "@chakra-ui/layout";
import { Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import CastGrid from "./CastGrid";

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
            color="white"
            className="top-left"
            fontWeight="semibold"
            fontSize={96}
          >
            {arrow.name}
          </Text>
        </Flex>
      </Box>

      {/* Summary Container */}
      <Flex>
        <Box pt={14} h={96} bg="gray.600">
          <Text
            mb={5}
            pl={10}
            color="highlight"
            fontSize={26}
            fontWeight="semibold"
          >
            Summary
          </Text>
          <Box w="100%" pl={10} pr={10}>
            <Text color="white" letterSpacing="wider" fontSize={16}>
              {removeTags(arrow.summary)}
            </Text>
          </Box>

          {/* Description Container */}
          <Flex ml={10} mt={14}>
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
                mr={10}
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
              {arrow.genres.map((genre, index, arr) => (
                <Flex>
                  <Text
                    opacity="70%"
                    ml={3}
                    fontSize={18}
                    fontWeight="light"
                  >
                    {genre} {index !== arr.length - 1 ? ", " : ""}
                  </Text>
                </Flex>
              ))}
            </Flex>

            <Flex>
              <Text
                ml={10}
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
                ml={10}
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
        </Box>
      </Flex>
      {/* Links Contianer */}
      <Box bg="gray.800" w="100%" p={14}>
        <CastGrid />
      </Box>
    </Box>
  );
};

export default MainPage;
