import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({type}) {
  return (
    <Stack spacing={2} direction="row">
      <Button type={type} variant="contained" sx={{backgroundColor: '#0c4d71', borderRadius: '2rem'}}>Add</Button>
    </Stack>
  );
}