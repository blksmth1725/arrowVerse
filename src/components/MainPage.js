import React from "react";
import { Box, Flex, Grid, Link } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Heading, Text } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";

const MainPage = ({ arrow, cast, isLoading }) => {
  const filteredCast = [
    ...new Map(
      cast.map((castMember) => [castMember.person.id, castMember])
    ).values(),
  ];

  console.log(filteredCast);

  return isLoading ? (
    <Heading>Loading...</Heading>
  ) : (
    <Box>
      <Heading>{arrow.name}</Heading>

      <Flex>
        <Box boxSize="md">
          <Image alt="Arrow Cover" src={arrow.image.original} />
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
          <Heading>Summary</Heading>
          <Text letterSpacing="wider" w={900}>
            {arrow.summary}
          </Text>
          <Heading>Cast Members</Heading>
          <Grid templateColumns="repeat(4,1fr)" gap={4}>
            {filteredCast.map((castMember) => (
              <Box key={castMember.person.id}>
                <Link href={castMember.person.url}>
                  <Text>{castMember.person.name}</Text>
                </Link>
              </Box>
            ))}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default MainPage;
