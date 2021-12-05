import React from "react";
import { useState } from "react";
import { Input, Flex } from "@chakra-ui/react";

function Searchbar({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleInput = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  const handleEnterKeyPressed = (e) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  return (
    <div>
      <div className="control">
        <Flex mt={10} justify="center">
          <Input
            size="lg"
            w="40%"
            className="input"
            onChange={handleInput}
            onKeyPress={handleEnterKeyPressed}
            variant="filled"
            value={searchText}
            placeholder="Search for Episode"
          />
        </Flex>
      </div>
    </div>
  );
}

export default Searchbar;
