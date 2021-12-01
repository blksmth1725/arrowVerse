import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import CastMember from "./CastMember";

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
          <CastMember castMember={castMember} isLoading={isLoading} />
        ))}
      </Grid>
    </Box>
  );
};

export default CastGrid;
