import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Flex } from "@chakra-ui/layout";
import { Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Spacer } from "@chakra-ui/layout";
import CastGrid from "./CastGrid";

const MainPage = ({ cast }) => {
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
      <Heading>{arrow.name}</Heading>

      <Flex>
        <Box boxSize="md">
          <Image alt="Arrow Cover" src={arrow.image.original} />
          <Spacer />
          <Text>Type: {arrow.type}</Text>
          <Box mt={4} bg="tomato" s={3}>
            <Flex>
              Genre:{" "}
              {arrow.genres.map((genre) => (
                <Text ml={2}>{genre}</Text>
              ))}
            </Flex>
          </Box>
        </Box>

        <Spacer />

        <Box>
          <Box>
            <Text>Date Premiered: {arrow.premiered}</Text>
            <Text>Date Ended: {arrow.ended}</Text>
          </Box>
          <Heading>Summary</Heading>
          <Text letterSpacing="wider" w={900}>
            {removeTags(arrow.summary)}
          </Text>
          <CastGrid />
        </Box>
      </Flex>
    </Box>
  );
};

export default MainPage;
