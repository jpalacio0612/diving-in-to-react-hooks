import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Flex, Heading, IconButton, Image } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const pages = [
  {
    index: 0,
    path: "/",
    label: "Introduction",
  },
  {
    index: 1,
    path: "/use-state",
    label: "useState",
  },
];

const Navigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentPage = pages.find((page) => page.path === pathname);

  const handleNextPage = () => {
    const nextPagePath = pages[currentPage.index + 1].path;
    navigate(nextPagePath);
  };

  const handlePreviousPage = () => {
    const previousPagePath = pages[currentPage.index - 1].path;
    navigate(previousPagePath);
  };

  return (
    <Box
      marginX="auto"
      maxWidth="80rem"
      paddingY={8}
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
      alignItems="center"
    >
      <Image src="https://d17dednewomw88.cloudfront.net/assets/images/logo-36133121.svg" />
      <Flex gap={2} justifySelf="center">
        <IconButton
          disabled={currentPage.index === 0}
          onClick={handlePreviousPage}
          icon={<ChevronLeftIcon />}
        />
        <Heading>{currentPage.label}</Heading>
        <IconButton
          disabled={currentPage.index === pages.length - 1}
          onClick={handleNextPage}
          icon={<ChevronRightIcon />}
        />
      </Flex>
    </Box>
  );
};

export default Navigation;
