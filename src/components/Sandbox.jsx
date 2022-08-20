import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { monokaiPro } from "@codesandbox/sandpack-themes";

const Sandbox = ({ ...props }) => {
  return (
    <Sandpack
      template="react"
      theme={{
        ...monokaiPro,
        font: {
          ...monokaiPro.font,
          lineHeight: "1.5",
          size: "16px",
        },
      }}
      options={{
        showLineNumbers: true,
        showInlineErrors: true,
        wrapContent: true,
        editorHeight: 600,
      }}
      {...props}
    />
  );
};

export default Sandbox;
