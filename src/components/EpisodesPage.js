import React, { useState, useEffect } from "react";
import { Box, Flex, Grid } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";

import { fetchEpisodes } from "../api";
import Episode from "./Episode";
import { Spinner } from "@chakra-ui/react";

const CastGrid = () => {
  const [episodes, setEpisodes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEpisodes();
      setEpisodes(data);
    };

    setIsLoading(false);
    fetchData();
  }, []);

  const onSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

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

      <div className="search-bar-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search For episode by name"
          onChange={onSearch}
        />
      </div>

      <Grid
        pl={28}
        pr={28}
        justifyContent="space-around"
        mt={5}
        templateColumns="repeat(2,1fr)"
        gap={6}
      >
        {episodes
          .filter((episode) => {
            if (searchTerm === "") {
              return episode;
            } else if (
              episode.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return episode;
            }
          })
          .map((episode) => {
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
