import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Flex, Grid } from "@chakra-ui/layout";
import { Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { isEmpty } from "../utils/helpers";
import { useParams } from "react-router";

const CastMember = () => {
  const [castMember, setCastMember] = useState({});
  const { memberId } = useParams();

  useEffect(() => {
    const fetchCastMemeber = async () => {
      const resultCastMember = await axios.get(
        `https://api.tvmaze.com/people/${memberId}`
      );
      console.log(resultCastMember.data);
      setCastMember(resultCastMember.data);
    };
    if (memberId) {
      fetchCastMemeber();
    }
  }, [memberId]);

  return isEmpty(castMember) ? (
    <Text>LOADING...</Text>
  ) : (
    <Flex align="center" justify="center">
      <Box w="480px" rounded={42} overflow="hidden">
        <Image src={castMember.image.original} />
      </Box>
    </Flex>
  );
};

export default CastMember;
