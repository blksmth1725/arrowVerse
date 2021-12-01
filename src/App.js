import React, { useState, useEffect } from "react";
import axios from "axios";
import MainPage from "./components/MainPage";
import { Box } from "@chakra-ui/layout";

function App() {
  const [arrow, setArrow] = useState({});
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArrow = async () => {
      const resultArrow = await axios.get(
        `https://api.tvmaze.com/singlesearch/shows?q=arrow`
      );
      console.log(resultArrow.data);
      setArrow(resultArrow.data);
      setIsLoading(false);
    };
    fetchArrow();
  }, []);

  useEffect(() => {
    const fetchCast = async () => {
      const resultCast = await axios.get(
        `https://api.tvmaze.com/shows/4/cast`
      );
      console.log(resultCast.data);
      setCast(resultCast.data);
    };
    fetchCast();
  }, []);

  return (
    <Box p={20}>
      <MainPage arrow={arrow} isLoading={isLoading} cast={cast} />
    </Box>
  );
}

export default App;
