import React, { useState, useEffect, useMemo } from "react";
import { Box, Flex, Grid } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";

import { fetchCast } from "../api";
import {
  getPeopleFromCast,
  getCharactersFromCast,
  getPersonsCharacters,
} from "../utils/helpers";
import CastMember from "./CastMember";

const CastGrid = () => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCast();
      setCast(data);
    };

    fetchData();
  }, []);

  const people = useMemo(() => getPeopleFromCast(cast), [cast]);

  const characters = useMemo(
    () => getCharactersFromCast(cast),
    [cast]
  );

  return (
    <Box>
      <Flex justify="center" align="center">
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
      </Grid>
    </Box>
  );
};

export default CastGrid;
