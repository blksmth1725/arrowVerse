import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Box, Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Spinner } from "@chakra-ui/spinner";
import { Button } from "@chakra-ui/button";

import { fetchShow } from "../api";
import { removeTags } from "../utils/helpers";
import CastGrid from "./CastGrid";

const MainPage = () => {
  const [arrow, setArrow] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchShow();
      setArrow(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <Flex h="100vh" justify="center" align="center">
      <Spinner
        thickness="4px"
        emptyColor="gray.200"
        color="highlight"
        size="xl"
      />
    </Flex>
  ) : (
    <Box>
      {/* Image Conatainer */}
      <Box
        className="cointainer"
        h="620px"
        w="100%"
        overflow="hidden"
      >
        <Image
          alt="Arrow Cover"
          src={arrow.image.original}
          objectFit="cover"
        />
      </Box>

      {/* Summary Container */}
      <Flex>
        <Box pt={14} h="355px" bg="gray.600">
          <Text
            mb={8}
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
          <Flex ml={10} mt={12}>
            <Flex>
              <Text
                color="highlight"
                fontSize={18}
                fontWeight="semibold"
              >
                Type:
              </Text>
              <Text
                color="white"
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
                    color="white"
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
              <Text
                color="white"
                opacity="70%"
                fontSize={18}
                fontWeight="light"
                ml={3}
              >
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
              <Text
                ml={3}
                color="white"
                opacity="70%"
                fontSize={18}
                fontWeight="light"
              >
                {arrow.ended}
              </Text>
            </Flex>
          </Flex>
          <Flex w="100%" display="flex" justifyContent="flex-end">
            <Box h={14} w="100%">
              <Link to="/episodes">
                <Button
                  color="white"
                  h="100%"
                  ml="80%"
                  bg="highlight"
                  w="300px"
                >
                  EPISODES
                </Button>
              </Link>
            </Box>
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
