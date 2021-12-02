import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { Link, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";

const CastMember = ({ castMember }) => {
  return (
    <Box>
      <Flex justify="center" align="center">
        <Link href={`/castmember/${castMember.person.id}`}>
          <Button bg="highlight">
            <Text fontSize={10}>{castMember.person.name}</Text>
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default CastMember;
