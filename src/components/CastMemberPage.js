import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { CSVLink } from "react-csv";
import { Box, Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";

import {
  isEmpty,
  getPeopleFromCast,
  getCharactersFromCast,
  getPersonsCharacters,
  flattenJSON,
  getCSVHeaderData,
} from "../utils/helpers";
import { fetchCast } from "../api";
import { Button } from "@chakra-ui/button";

const CastMember = () => {
  const { memberId } = useParams();
  const { state } = useLocation();
  const [castMember, setCastMember] = useState({});
  const [characters, setCharacters] = useState([]);

  const csvObject = useMemo(
    () => flattenJSON(castMember),
    [castMember]
  );
  const csvHeaders = useMemo(
    () => getCSVHeaderData(csvObject),
    [csvObject]
  );

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

  return isEmpty(castMember) || !characters.length ? (
    <Text>LOADING...</Text>
  ) : (
    <Flex
      bg="background"
      h="100vh"
      pt={20}
      align="center"
      justify="center"
    >
      <Flex w="100%" justify="space-evenly" mb={20}>
        <Box rounded={42} overflow="hidden">
          <Image
            src={castMember.image.original}
            h="82vh"
            w="480px"
            objectFit="cover"
          />
        </Box>
        <Box
          w="480px"
          h="82vh"
          rounded={42}
          overflow="hidden"
          bg="gray.600"
        >
          <Flex
            mt={10}
            h="80%"
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
              <Text
                color="highlight"
                fontSize={28}
                fontWeight="light"
              >
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
              <Text
                color="highlight"
                fontSize={28}
                fontWeight="light"
              >
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
              <Text
                color="highlight"
                fontSize={28}
                fontWeight="light"
              >
                {castMember.birthday}
              </Text>
            </Flex>
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Text color="white" fontSize={24} fontWeight="semibold">
                Gender
              </Text>
              <Text
                color="highlight"
                fontSize={28}
                fontWeight="light"
              >
                {castMember.gender}
              </Text>
            </Flex>
          </Flex>
          <Flex justify="center">
            {console.log("csv", {
              csvHeaders,
              data: [castMember],
            })}
            <CSVLink data={[castMember]} headers={csvHeaders}>
              <Button pb={4} bg="highlight" h={32} w="500px">
                <Text
                  pb={4}
                  color="white"
                  fontWeight="semibold"
                  fontSize={24}
                >
                  Download my Info
                </Text>
              </Button>
            </CSVLink>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CastMember;
