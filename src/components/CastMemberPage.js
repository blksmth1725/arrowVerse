import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Divider, Flex, Grid } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { isEmpty } from "../utils/helpers";
import { useParams } from "react-router";

const CastMember = () => {
  const [castMember, setCastMember] = useState({});
  const { memberId } = useParams();

  useEffect(() => {
    const fetchCastMemeber = async () => {
      const resultCastMember = await axios.get(
        `https://api.tvmaze.com/people/${memberId}`
      );
      console.log(resultCastMember.data);
      setCastMember(resultCastMember.data);
    };
    if (memberId) {
      fetchCastMemeber();
    }
  }, [memberId]);

  return isEmpty(castMember) ? (
    <Text>LOADING...</Text>
  ) : (
    <Flex pt={20} align="center" justify="center">
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
        color="highlight"
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
        <Grid
          mt={28}
          ml={8}
          mr={8}
          templateRows="repeat(4, 1fr)"
          gap={20}
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize={24} fontWeight="semibold">
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
            <Text fontSize={24} fontWeight="semibold">
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
            <Text fontSize={24} fontWeight="semibold">
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
        </Grid>
      </Box>
    </Flex>
  );
};

export default CastMember;
