import React, { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { fetchShow } from "../api";
import { Link } from "react-router-dom";

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
      </Box>
    </div>
  );
};

export default Navbar;
