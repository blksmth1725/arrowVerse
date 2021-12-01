import React from "react";
import { Box } from "@chakra-ui/layout";
import { Link, Text } from "@chakra-ui/layout";

const CastMember = ({ castMember }) => {
  return (
    <Box>
      <Link href={`/castmember/${castMember.person.id}`}>
        <Text>{castMember.person.name}</Text>
      </Link>
    </Box>
  );
};

export default CastMember;
