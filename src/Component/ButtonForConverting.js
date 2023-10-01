import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonForConverting() {
  function handleClick() {
    alert('Click')
  }

  return (
    <Button
      variant="contained"
      size="large"
      onClick={handleClick}
    >
      変換
    </Button>
  );
}