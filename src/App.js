import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";

import MainPage from "./components/MainPage";
import CastMemberPage from "./components/CastMemberPage";
import EpisodesPage from "./components/EpisodesPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/castmember/:memberId"
          element={<CastMemberPage />}
        />
        <Route path="/episodes" element={<EpisodesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
