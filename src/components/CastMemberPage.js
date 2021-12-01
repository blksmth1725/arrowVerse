import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/layout";
import { Link, Text } from "@chakra-ui/layout";
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
    <Box key={castMember.id}>
      <Text>{castMember.id}</Text>
      <Link href={castMember.url}>
        <Text>{castMember.name}</Text>
      </Link>
    </Box>
  );
};

export default CastMember;
