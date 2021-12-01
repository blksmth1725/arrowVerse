import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Heading, Text } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";

const MainPage = ({ arrow, isLoading }) => {
  return isLoading ? (
    <Heading>Loading...</Heading>
  ) : (
    <Box p={24}>
      <Heading>{arrow.name}</Heading>
      <Flex>
        <Box boxSize="md">
          <Image src={arrow.image.original} />
          <Text>Type: {arrow.type}</Text>
        </Box>
        <Spacer />
        <Box>
          <Box>
            <Text>Date Premiered: {arrow.premiered}</Text>
            <Text>Date Ended: {arrow.ended}</Text>
          </Box>
          <Heading>Summary</Heading>
          <Text w={96}>{arrow.summary}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default MainPage;
