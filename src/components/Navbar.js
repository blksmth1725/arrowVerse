import React, { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { fetchShow } from "../api";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/image";
import arrowVerse from "../images/arrowVerse.png";

const Navbar = () => {
  const [arrow, setArrow] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchShow();
      setArrow(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Box bg="primary">
        <Flex justify="flex-start" align="center">
          <Link to="/">
            <Text
              ml={10}
              color="highlight"
              fontWeight="semibold"
              fontSize={64}
            >
              {arrow.name}
            </Text>
          </Link>
        </Flex>
        <Box ml={5} pb={5}>
          <Image w={56} src={arrowVerse} />
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
