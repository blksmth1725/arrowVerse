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
      <Flex pl={20} pr={20} pt={8} pb={8} direction="column">
        <Box bg="gray.600" rounded={20} overflow="hidden">
          <Flex justify="center" align="start">
            <Flex bg="highlight" direction="column">
              <Text
                color="white"
                fontSize={18}
                fontWeight="semibold"
                mb={3}
              >
                {name}
              </Text>
              <Image src={img} h={44} w="200px" objectFit="cover" />
            </Flex>
            <Box w="70%" bg="tomato">
              <Flex direction="column" justify="center">
                <Text fontSize={18} color="highlight">
                  Summary
                </Text>
                <Text>{removeTags(summary)}</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Episode;
