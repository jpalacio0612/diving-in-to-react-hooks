import React from "react";
import {
  Box,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import survey from "../assets/images/state-of-js-2021.png";
import ClassComponentImg from "../assets/images/class-component.png";
import FunctionalComponentImg from "../assets/images/functional-component.png";

const Welcome = () => {
  return (
    <Box width="90%">
      <Tabs>
        <TabList>
          <Tab>What is React?</Tab>
          <Tab>Class Component</Tab>
          <Tab>Functional Component</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box
              width="100%"
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              gap={5}
              textAlign="center"
            >
              <Box>
                <Heading size="xl">What is React?</Heading>
                <Text>A JavaScript library for building user interfaces</Text>
              </Box>
              <Box>
                <Heading size="xl">Why use react?</Heading>
                <Image
                  marginTop={2}
                  borderRadius="3xl"
                  src={survey}
                  maxWidth="3xl"
                />
              </Box>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box display="flex" justifyContent="center">
              <Image objectFit="cover" maxW="520px" src={ClassComponentImg} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box display="flex" justifyContent="center">
              <Image
                objectFit="cover"
                maxW="520px"
                src={FunctionalComponentImg}
              />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Welcome;
