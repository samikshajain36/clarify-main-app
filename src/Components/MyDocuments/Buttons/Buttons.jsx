import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function BasicButtons() {
  return (
    <Stack spacing={1} direction="row">
      <Button variant="outlined" sx={{textTransform: 'capitalize', backgroundColor: 'white', color: 'black', borderRadius: '2rem', borderColor: 'black'}}>All Documents</Button>
      <Button variant="contained" sx={{textTransform: 'capitalize', backgroundColor: '#0c4d71', borderRadius: '2rem'}}><ContentCopyRoundedIcon sx={{fontSize: '100%'}}/> &nbsp;Copy</Button>
      <Button variant="contained" sx={{textTransform: 'capitalize', backgroundColor: '#0c4d71', borderRadius: '2rem'}}><DeleteOutlineIcon sx={{fontSize: '100%'}}/>&nbsp;Delete</Button>
    </Stack>
  );
}
