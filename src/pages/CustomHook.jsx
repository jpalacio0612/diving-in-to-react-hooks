import React from "react";
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import Sandbox from "../components/Sandbox";

const exerciseCode = `import { useEffect, useState } from "react";

export default function App() {
  const [state, setState] = useState({
    status: "idle",
    characters: null,
    error: null
  });
  const { status, characters, error } = state;

  useEffect(() => {
    setState({ status: "pending" });
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setState({ status: "resolved", characters: data.results });
      })
      .catch((error) => setState({ status: "rejected", error }));
  }, []);

  return (
    <div>
      <h1>Rick and Morty</h1>
      {status === "pending" && <h2>Loading...</h2>}
      {status === "rejected" && <h2>{error.message}</h2>}
      {status === "resolved" &&
        characters.map((character) => (
          <div>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
    </div>
  );
}`;

const solutionCode = `import useFetch from "./useFetch";

export default function App() {
  const { status, data: characters, error } = useFetch(
    "https://rickandmortyapi.com/api/character"
  );

  return (
    <div>
      <h1>Rick and Morty</h1>
      {status === "pending" && <h2>Loading...</h2>}
      {status === "rejected" && <h2>{error.message}</h2>}
      {status === "resolved" &&
        characters.map((character) => (
          <div>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
    </div>
  );
}
`;

const useFetchCode = `import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({
    status: "idle",
    data: null,
    error: null
  });

  useEffect(() => {
    setState({ status: "pending" });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setState({ status: "resolved", data: data.results });
      })
      .catch((error) => setState({ status: "rejected", error }));
  }, [url]);

  return state;
};

export default useFetch;
`;

const CustomHook = () => {
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
                  "/useFetch.js": "",
                }}
              />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box>
              <Sandbox
                files={{
                  "/App.js": solutionCode,
                  "/useFetch.js": useFetchCode,
                }}
              />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default CustomHook;
