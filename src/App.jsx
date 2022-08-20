import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import UseState from "./pages/useState";
import MainLayout from "./layouts/MainLayout";

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/use-state" element={<UseState />} />
          </Routes>
        </MainLayout>
      </Router>
    </ChakraProvider>
  );
};

export default App;
