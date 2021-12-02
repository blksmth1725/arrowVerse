import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";

const CastMember = ({ castMember, characters }) => {
  return (
    <Box>
      <Flex justify="center" align="center">
        <Link
          to={`/castmember/${castMember.id}`}
          state={{
            castMember,
            characters,
          }}
        >
          <Button bg="highlight" w="200px">
            <Text color="white" fontSize={18}>
              {castMember.name}
            </Text>
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default CastMember;
