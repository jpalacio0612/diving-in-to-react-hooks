import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "@chakra-ui/react";
import Navigation from "./Navigation";

const MainLayout = ({ children }) => {
  return (
    <Box
      minHeight="100vh"
      background="linear-gradient(.82deg,#0a0a36 61.99%,#171786 116.05%)"
    >
      <Box
        height="full"
        width="full"
        backgroundImage="url(//d17dednewomw88.cloudfront.net/assets/dist/fonts/hero-dots.svg)"
        backgroundSize="cover"
        backgroundPosition="center -5rem"
      >
        <Navigation />
        <Flex width="100%" justifyContent="center">
          {children}
        </Flex>
      </Box>
    </Box>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
