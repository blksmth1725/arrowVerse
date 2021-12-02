import React, { useState, useEffect, useCallback } from "react";
import { Box, Divider, Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";

import {
  isEmpty,
  getPeopleFromCast,
  getCharactersFromCast,
  getPersonsCharacters,
} from "../utils/helpers";
import { fetchCast } from "../api";

const CastMember = () => {
  const { memberId } = useParams();
  const { state } = useLocation();
  const [castMember, setCastMember] = useState({});
  const [characters, setCharacters] = useState([]);

  const fetchData = useCallback(async () => {
    const cast = await fetchCast();
    const allCharacters = getCharactersFromCast(cast);
    const person = getPeopleFromCast(cast).find(
      (person) => person.id === Number(memberId)
    );

    const personsCharacters = getPersonsCharacters({
      id: person.id,
      characters: allCharacters,
    });

    setCastMember(person);
    setCharacters(personsCharacters);
  }, [memberId]);

  useEffect(() => {
    if (state && state.castMember && state.characters) {
      setCastMember(state.castMember);
      setCharacters(state.characters);
    } else {
      fetchData();
    }
  }, [memberId, state, fetchData]);

  console.log("BLKSMTH: characters", characters);

  return isEmpty(castMember) || !characters.length ? (
    <Text>LOADING...</Text>
  ) : (
    <Flex
      bg="background"
      h="100%"
      pt={20}
      align="center"
      justify="center"
    >
      <Box rounded={42} overflow="hidden">
        <Image
          src={castMember.image.original}
          h="82vh"
          w="480px"
          objectFit="cover"
        />
      </Box>
      <Divider
        orientation="vertical"
        colorScheme="white"
        w={10}
        m={20}
      />
      <Box
        w="480px"
        h="82vh"
        rounded={42}
        overflow="hidden"
        bg="gray.600"
      >
        <Flex
          h="100%"
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text color="white" fontSize={24} fontWeight="semibold">
              Name
            </Text>
            <Text color="highlight" fontSize={28} fontWeight="light">
              {castMember.name}
            </Text>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text color="white" fontSize={24} fontWeight="semibold">
              Country
            </Text>
            <Text color="highlight" fontSize={28} fontWeight="light">
              {castMember.country.name}
            </Text>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text color="white" fontSize={24} fontWeight="semibold">
              Birthday
            </Text>
            <Text color="highlight" fontSize={28} fontWeight="light">
              {castMember.birthday}
            </Text>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize={24} fontWeight="semibold">
              Gender
            </Text>
            <Text color="highlight" fontSize={28} fontWeight="light">
              {castMember.gender}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CastMember;
