import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxElement(props) {
  return (
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
      {props.name}
    </Box>
  )
}