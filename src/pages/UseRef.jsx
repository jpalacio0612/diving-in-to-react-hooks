import React from "react";
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import Sandbox from "../components/Sandbox";

const exerciseCode = `import { useRef, useEffect } from "react";
import simpleParallax from "simple-parallax-js";

const styles = {
  div: {
    width: "100vw",
    height: "60vh",
    backgroundColor: "lightBlue"
  },
  image: {
    width: "100vw",
    height: "60vvh"
  }
}

const imageUrl =
  "https://images.unsplash.com/photo-1531966662811-c6501e46eda6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80";

export default function App() {
  return (
    <div>
      <div style={styles.div} />
      <img alt="wood" style={styles.image} src={imageUrl} />
      <div style={styles.div} />
    </div>
  );
}`;

const solutionCode = `import { useRef, useEffect } from "react";
import simpleParallax from "simple-parallax-js";

const styles = {
  div: {
    width: "100vw",
    height: "60vh",
    backgroundColor: "lightBlue"
  },
  image: {
    width: "100vw",
    height: "60vvh"
  }
}

const imageUrl =
  "https://images.unsplash.com/photo-1531966662811-c6501e46eda6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80";

export default function App() {
  const imgRef = useRef();

  useEffect(() => {
  new simpleParallax(imgRef.current);
  }, []);

  return (
    <div>
      <div style={styles.div} />
      <img alt="wood" style={styles.image} ref={imgRef} src={imageUrl} />
      <div style={styles.div} />
    </div>
  );
}`;

const UseEffect = () => {
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
                customSetup={{
                  dependencies: {
                    "simple-parallax-js": "5.5.0",
                  },
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
                customSetup={{
                  dependencies: {
                    "simple-parallax-js": "5.5.0",
                  },
                }}
              />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default UseEffect;
