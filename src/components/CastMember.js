import React from "react";
import { Box } from "@chakra-ui/layout";
import { Link, Text } from "@chakra-ui/layout";

const CastMember = ({ castMember }) => {
  return (
    <Box key={castMember.person.id}>
      <Text>{castMember.person.id}</Text>
      <Link href={`/castmember/${castMember.person.id}`}>
        <Text>{castMember.person.name}</Text>
      </Link>
    </Box>
  );
};

export default CastMember;
