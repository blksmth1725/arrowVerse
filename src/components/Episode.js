import React from "react";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";

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
    <Box>
      <Flex p={14} direction="column" bg="gray.600">
        <Flex>
          <Flex direction="column" align="center">
            <Text color="highlight" fontSize={18}>
              {name}
            </Text>
            <Image src={img} h={40} w="200px" objectFit="cover" />
          </Flex>
          <Box w="70%" bg="tomato">
            <Flex direction="column">
              <Text fontSize={18} color="highlight">
                Summary
              </Text>
              <Text>{removeTags(summary)}</Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Episode;
