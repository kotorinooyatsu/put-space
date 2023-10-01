import * as React from 'react';
import TextField from '@mui/material/TextField';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function OutputTextArea() {
  return (
    <TextField
      hiddenLabel
      id="outlined-textarea"
      // label="テキストを入力"
      // placeholder="Placeholder"
      multiline
      InputProps={{ endAdornment: <ContentCopyIcon /> }}
      sx={{ width: 250 }}
    />
  );
}
