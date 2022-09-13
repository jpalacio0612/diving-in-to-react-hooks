import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Welcome from "./pages/Welcome";
import UseState from "./pages/useState";
import UseEffect from "./pages/UseEffect";
import UseRef from "./pages/UseRef";
import CustomHook from "./pages/CustomHook";

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
            <Route path="/use-effect" element={<UseEffect />} />
            <Route path="/use-ref" element={<UseRef />} />
            <Route path="/custom-hook" element={<CustomHook />} />
          </Routes>
        </MainLayout>
      </Router>
    </ChakraProvider>
  );
};

export default App;
