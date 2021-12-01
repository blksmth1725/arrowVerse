//React
import React from "react";
import ReactDOM from "react-dom";

//App
import App from "./App";

// Styling
import { appTheme } from "./utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={appTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
