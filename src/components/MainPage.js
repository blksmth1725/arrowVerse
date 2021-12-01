import React from "react";
import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

const MainPage = ({ arrow, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <Box>
      <h1>{arrow.name}</h1>
      <Box boxSize="sm">
        <Image src={arrow.image.original} />
      </Box>
    </Box>
  );
};

export default MainPage;
