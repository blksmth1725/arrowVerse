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
        bg="gray.600"
        overflow="hidden"
        mt={10}
      >
        <Image src={img} alt="Card Image" objectFit="cover"></Image>
        <Box p={5}>
          <Stack align="center">
            <Badge
              variant="solid"
              bg="highlight"
              rounded="full"
              h={8}
              w="80%"
              align="center"
            >
              <Text color="white" mt={2}>
                {name}
              </Text>
            </Badge>
          </Stack>
          <Flex>
            <Text color="highlight">Date aired:</Text>
            <Text color="white" as="h2" fontWeight="normal" my={2}>
              {airdate}
            </Text>
          </Flex>
          <Text fontWeight="light">
            A platform for students to study CSE concepts.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Episode;
