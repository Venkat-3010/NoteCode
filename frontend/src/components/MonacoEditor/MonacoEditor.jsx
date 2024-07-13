import React, { useState } from "react";
import ReactDOM from "react-dom";

import Editor from "@monaco-editor/react";

function MonacoEditor({ theme, language, handleValueChange }) {
  return (
    <>
      <Editor
        height="80vh"
        theme={theme}
        defaultLanguage={language}
        defaultValue={handleValueChange}
      />
    </>
  );
}

export default MonacoEditor;
