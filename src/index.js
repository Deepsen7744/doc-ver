import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext";
import {ChakraProvider ,theme} from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <AppContextProvider>
    <ChakraProvider theme={theme}>
      <App />
      </ChakraProvider>
    </AppContextProvider>
    </BrowserRouter> 
);