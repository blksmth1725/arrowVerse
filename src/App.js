import React, { useState, useEffect } from "react";
import axios from "axios";
import MainPage from "./components/MainPage";

function App() {
  const [arrow, setArrow] = useState({});
  const [cast, setCast] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const resultArrow = await axios.get(
        `https://api.tvmaze.com/singlesearch/shows?q=arrow`
      );
      console.log(resultArrow.data);
      setArrow(resultArrow.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const resultCast = await axios.get(
        `https://api.tvmaze.com/shows/4/cast`
      );
      console.log(resultCast.data);
      setCast(resultCast.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="App">
      <MainPage arrow={arrow} isLoading={isLoading} cast={cast} />
    </div>
  );
}

export default App;
