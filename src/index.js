//React
import React from "react";
import ReactDOM from "react-dom";

//App
import App from "./App";

// Styling
import { appTheme } from "./utils/theme";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={appTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
