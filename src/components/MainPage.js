import React from "react";
import { Box, Flex, Grid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Heading, Text } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";

const MainPage = ({ arrow, cast, isLoading }) => {
  return isLoading ? (
    <Heading>Loading...</Heading>
  ) : (
    <Box p={24}>
      <Heading>{arrow.name}</Heading>
      <Flex>
        <Box boxSize="md">
          <Image src={arrow.image.original} />
          <Spacer />
          <Text>Type: {arrow.type}</Text>
          <Box mt={4} bg="tomato" s={3}>
            <Flex>
              Genre:{" "}
              {arrow.genres.map((genre) => (
                <Text ml={2}>{genre}</Text>
              ))}
            </Flex>
          </Box>
        </Box>
        <Spacer />
        <Box>
          <Box>
            <Text>Date Premiered: {arrow.premiered}</Text>
            <Text>Date Ended: {arrow.ended}</Text>
          </Box>
          <Heading mt={36}>Summary</Heading>
          <Text letterSpacing="wider" w={900} mb={36}>
            {arrow.summary}
          </Text>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            {cast.map((castMember) => (
              <Box>{castMember.person.name}</Box>
            ))}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default MainPage;
