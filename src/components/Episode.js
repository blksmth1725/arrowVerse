import React from "react";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Flex,
  Text,
  Stack,
  Badge,
  Spacer,
  Grid,
} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

import { removeTags } from "../utils/helpers";

const Episode = ({
  name,
  img,
  rating,
  season,
  airdate,
  airtime,
  summary,
}) => {
  return (
    <Flex justify="center" align="center">
      <Box
        w="300px"
        rounded="20px"
        bg="gray.800"
        overflow="hidden"
        mt={10}
      >
        <Image
          h={56}
          src={img}
          alt="Card Image"
          objectFit="cover"
        ></Image>
        <Box p={6}>
          <Stack align="center">
            <Badge
              variant="solid"
              bg="highlight"
              rounded="full"
              h={8}
              w="80%"
              align="center"
              mb={3}
            >
              <Text color="white" mt={2}>
                {name}
              </Text>
            </Badge>
          </Stack>
          <Flex my={2}>
            <Text
              fontWeight="semibold"
              color="highlight"
              pr={2}
              my={1}
            >
              Date aired:
            </Text>
            <Text color="white" as="h2" fontWeight="light" my={1}>
              {airdate}
            </Text>
          </Flex>
          <Flex my={1}>
            <Text
              fontWeight="semibold"
              color="highlight"
              pr={2}
              my={1}
            >
              Air time:
            </Text>
            <Text color="white" as="h2" fontWeight="light" my={1}>
              {airtime} Mins
            </Text>
          </Flex>
          <Flex my={1}>
            <Text
              fontWeight="semibold"
              color="highlight"
              pr={2}
              my={1}
            >
              Rating:
            </Text>
            <Text color="white" as="h2" fontWeight="light" my={1}>
              {rating.average}
            </Text>
          </Flex>
          <Flex my={1}>
            <Text
              fontWeight="semibold"
              color="highlight"
              pr={2}
              my={1}
            >
              Season:
            </Text>
            <Text color="white" as="h2" fontWeight="light" my={1}>
              {season}
            </Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Episode;
