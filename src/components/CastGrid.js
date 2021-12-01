import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Flex, Grid, Link } from "@chakra-ui/layout";
import { Heading, Text } from "@chakra-ui/layout";

const CastGrid = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const filteredCast = [
    ...new Map(
      cast.map((castMember) => [castMember.person.id, castMember])
    ).values(),
  ];

  useEffect(() => {
    const fetchCast = async () => {
      const resultCast = await axios.get(
        `https://api.tvmaze.com/shows/4/cast`
      );
      console.log(resultCast.data);
      setCast(resultCast.data);
      setIsLoading(false);
    };
    fetchCast();
  }, []);

  return (
    <Box>
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
  );
};

export default CastGrid;
