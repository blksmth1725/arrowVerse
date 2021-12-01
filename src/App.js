import React, { useState, useEffect } from "react";
import axios from "axios";
import MainPage from "./components/MainPage";
import { Box } from "@chakra-ui/layout";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Box p={20}>
      <MainPage />
    </Box>
  );
}

export default App;
