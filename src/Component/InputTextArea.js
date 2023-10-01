import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function InputTextArea() {
  return (
    <TextField
      id="outlined-textarea"
      label="テキストを入力"
      multiline
      sx={{ width: 250 }}
    />
  );
}
