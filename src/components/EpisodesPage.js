import React, { useState, useEffect, useMemo } from "react";
import { Box, Flex, Grid } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";

import { fetchEpisodes } from "../api";
import { objToArr, flattenJSON } from "../utils/helpers";
import CastMember from "./CastMember";
import Episode from "./Episode";

const CastGrid = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEpisodes();
      setEpisodes(data);
    };

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

  return (
    <Box h="100vh">
      <Flex>
        <Box>
          <Text>Episodes</Text>
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
