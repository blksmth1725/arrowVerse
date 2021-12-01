import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Box } from "@chakra-ui/layout";

import MainPage from "./components/MainPage";
import CastMemberPage from "./components/CastMemberPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Box p={20}>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route
              path="/castmember/:memberId"
              element={<CastMemberPage />}
            />
          </Routes>
        </Box>
      </div>
    </Router>
  );
}

export default App;
