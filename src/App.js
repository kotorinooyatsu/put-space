import * as React from 'react';
import { useState } from 'react';
import "./App.css";

import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function App() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleClick = () => {
    let put_space_text = '';
    const split_text = inputText.split('');
    for (var i = 0; i < inputText.length; i++) {
      put_space_text = put_space_text + split_text[i] + "　";
    }
    if (put_space_text.slice(-1) == "　") {
      put_space_text = put_space_text.slice(0, -1)
    }
    setOutputText(put_space_text);
  }

  const copyToClipboard = async () => {
    await global.navigator.clipboard.writeText(outputText);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Box
          component="main"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <TextField
            id="outlined-textarea"
            label="テキストを入力"
            multiline
            sx={{ width: 250 }}
            inputProps={inputText}
            onChange={(event) => setInputText(event.target.value)}
          />
        </Box>
        <Box
          component="main"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={handleClick}
          >
            変換
          </Button>
        </Box>
        <Box
          component="main"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <TextField
            hiddenLabel
            id="outlined-textarea"
            // label="テキストを入力"
            // placeholder="Placeholder"
            multiline
            // value={outputText}
            value={outputText}
            // InputProps={{ endAdornment: <ContentCopyIcon onclick={() => copyToClipboard} /> }}
            sx={{ width: 250 }}
          />
        </Box>
      </header>
    </div>
  );
}
