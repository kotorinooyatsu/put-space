import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

export default function InputTextArea() {
  const input_text = useState("");

  return (
    <TextField
      id="outlined-textarea"
      label="テキストを入力"
      multiline
      sx={{ width: 250 }}
      value={input_text}
    />
  );
}
