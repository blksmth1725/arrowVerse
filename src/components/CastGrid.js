import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Flex, Grid } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";

import CastMember from "./CastMember";

const CastGrid = () => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const resultCast = await axios.get(
        `https://api.tvmaze.com/shows/4/cast`
      );
      setCast(resultCast.data);
      console.log(resultCast.data);
    };
    fetchCast();
  }, []);

  const filteredCast = [
    ...new Map(
      cast.map((castMember) => [castMember.person.id, castMember])
    ).values(),
  ];

  console.log(filteredCast);

  return (
    <Box>
      <Flex justify="center" align="center">
        <Text
          color="white"
          mb={14}
          fontSize={40}
          fontWeight="semibold"
        >
          Cast
        </Text>
      </Flex>
      <Grid templateColumns="repeat(3,1fr)" gap={4}>
        {filteredCast.map((castMember) => (
          <CastMember
            key={castMember.person.id}
            castMember={castMember}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default CastGrid;
