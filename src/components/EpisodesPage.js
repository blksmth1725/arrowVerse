import React, { useState, useEffect } from "react";
import { Box, Flex, Grid } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";

import { fetchEpisodes } from "../api";
import Episode from "./Episode";
import { Spinner } from "@chakra-ui/react";
import Searchbar from "./SearchBar";

const CastGrid = () => {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEpisodes();
      setEpisodes(data);
    };

    setIsLoading(false);
    fetchData();
  }, []);

  console.log(
    episodes.map((ep) => {
      return ep.rating.average;
    })
  );

  return isLoading ? (
    <Spinner
      thickness="4px"
      emptyColor="gray.200"
      color="highlight"
      size="xl"
    />
  ) : (
    <Box h="100%" bg="gray.800">
      <Flex
        bg="highlight"
        justify="center"
        align="center"
        w="100%"
        h={28}
      >
        <Text color="white" fontSize={40} fontWeight="semibold">
          Episodes
        </Text>
      </Flex>

      <Searchbar />
      <Grid
        pl={28}
        pr={28}
        justifyContent="space-around"
        mt={5}
        templateColumns="repeat(2,1fr)"
        gap={6}
      >
        {episodes.map((episode) => {
          return (
            <Episode
              key={episode.id}
              name={episode.name}
              img={episode.image.original}
              rating={episode.rating}
              season={episode.season}
              airdate={episode.airdate}
              airtime={episode.airtime}
              summary={episode.summary}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default CastGrid;
