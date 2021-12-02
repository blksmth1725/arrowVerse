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

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route
          path="/castmember/:memberId"
          element={<CastMemberPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
