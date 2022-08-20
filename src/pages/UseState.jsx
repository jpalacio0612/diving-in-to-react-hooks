import React from "react";
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import Sandbox from "../components/Sandbox";

const exerciseCode = `export default function App() {
  let count = 0

  function handleClick() {
    count = count++
  }
  
  return (
    <div>
      <h2>Count: {count}</h2>  
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}`;

const solutionCode = `import {useState} from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }
  
  return (
    <div>
      <h2>Count: {count}</h2>  
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}`;

const UseState = () => {
  return (
    <Box width="90%">
      <Tabs>
        <TabList>
          <Tab>Exercise</Tab>
          <Tab>Solution</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box>
              <Sandbox
                files={{
                  "/App.js": exerciseCode,
                }}
              />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box>
              <Sandbox
                files={{
                  "/App.js": solutionCode,
                }}
              />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default UseState;
