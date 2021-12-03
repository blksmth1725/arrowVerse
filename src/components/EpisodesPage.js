import React, { useState, useEffect, useMemo } from "react";
import { Box, Flex, Grid } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";

import { fetchEpisodes } from "../api";
import { objToArr, flattenJSON } from "../utils/helpers";
import CastMember from "./CastMember";
import Episode from "./Episode";
import { Spinner } from "@chakra-ui/react";

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

  console.log(episodes.map((x) => x));
  console.log(episodes.map((x) => x.id));
  console.log(episodes.map((x) => x.name));

  // const people = useMemo(() => getPeopleFromCast(cast), [cast]);

  // const characters = useMemo(
  //   () => getCharactersFromCast(cast),
  //   [cast]
  // );

  return isLoading ? (
    <Spinner
      thickness="4px"
      emptyColor="gray.200"
      color="highlight"
      size="xl"
    />
  ) : (
    <Box h="100vh">
      <Flex justify="center" mt={10}>
        <Box>
          <Text color="white" fontSize={40} fontWeight="semibold">
            Episodes
          </Text>
        </Box>
      </Flex>
      {episodes.map((episode) => {
        return (
          <Episode
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
      {/* <Flex justify="center" align="center">
        <Text
          color="white"
          mb={14}
          fontSize={40}
          fontWeight="semibold"
        >
          Cast
        </Text>
      </Flex>
      <Grid templateColumns="repeat(3,1fr)" gap={4}>
        {people.map((person) => {
          const personsCharacters = getPersonsCharacters({
            id: person.id,
            characters,
          });

          return (
            <CastMember
              key={person.id}
              castMember={person}
              characters={personsCharacters}
            />
          );
        })}
      </Grid> */}
    </Box>
  );
};

export default CastGrid;
