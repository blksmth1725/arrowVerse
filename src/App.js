import React, { useState, useEffect } from "react";
import axios from "axios";
import MainPage from "./components/MainPage";

function App() {
  const [arrow, setArrow] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://api.tvmaze.com/singlesearch/shows?q=arrow`
      );
      console.log(result.data);
      setArrow(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="App">
      <MainPage arrow={arrow} isLoading={isLoading} />
    </div>
  );
}

export default App;
