import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import { Box } from "@chakra-ui/layout";

import MainPage from "./components/MainPage";
import CastMemberPage from "./components/CastMemberPage";
import CharacterPage from "./components/CharacterPage";
import CastGrid from "./components/CastGrid";

function App() {
  return (
    <Router>
      <Box>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route
            path="/castmember/:memberId"
            element={<CastMemberPage />}
          />
          <Route path="/castmembergrid" element={<CastGrid />} />
          <Route
            path="/character/:characterId"
            element={<CharacterPage />}
          />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
