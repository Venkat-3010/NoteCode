import React, { useState } from 'react';
import axios from 'axios';
import MonacoEditor from 'react-monaco-editor';
import snippetApi from './api/snippetApi';

function App() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('html');
  const [theme, setTheme] = useState('vs');
  const [snippetId, setSnippetId] = useState('');

  const handleShare = async () => {
    try {
      const snippetData = { code, language, theme }
      const newSnippet = await snippetApi.createSnippet(snippetData);
      setSnippetId(newSnippet.id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async () => {
    try {
      await snippetApi.updateSnippet(snippetId, { code });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>NoteCode</h1>
      <div>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="html">HTML</option>
          <option value="javascript">JavaScript</option>
          <option value="css">CSS</option>
        </select>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="vs">Light Theme</option>
          <option value="vs-dark">Dark Theme</option>
        </select>
        <button onClick={handleShare} disabled={snippetId}>Share</button>
        <button onClick={handleEdit} disabled={!snippetId}>Edit</button>
      </div>
      <MonacoEditor
        width={'75vw'}
        height={'100vh'}
        language={language}
        theme={theme}
        value={code}
        onChange={setCode}
        options={{
          minimap: { enabled: true },
          automaticLayout: true,
        }}
        editorDidMount={(editor) => {
          editor.focus();
        }}
      />
      {snippetId && <p>Share this URL: {`${window.location.origin}/snippet/${snippetId}`}</p>}
    </div>
  );
}

export default App;
