import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Box } from "@chakra-ui/layout";

import MainPage from "./components/MainPage";
import CastMemberPage from "./components/CastMemberPage";

function App() {
  return (
    <Router>
      <Box p={20}>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route
            path="/castmember/:memberId"
            element={<CastMemberPage />}
          />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
