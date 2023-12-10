import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LanguageIcon from '@mui/icons-material/Language';
import {Link} from 'react-router-dom'
import './Button.css'

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row" sx={{ml: '11.2%'}}>
      <Link to = "/signin" className="navbar-btn"><Button variant="outlined" sx={{color: 'black', border: '.1px solid rgb(198, 198, 198)', borderRadius: 2, fontWeight: 'bold', padding: '8px 24px', fontSize: 16, fontFamily: 'Gilroy-ExtraBold', textTransform: 'capitalize', padding: "0.5rem 0rem", width: "6rem"}}>Sign in</Button></Link>
      <Link to = "/auth/register" className="navbar-btn"><Button variant="contained" sx={{backgroundColor: '#0c4d71', borderRadius: 2, fontWeight: 'bold', padding: '8px 24px', fontSize: 16, fontFamily: 'Gilroy-ExtraBold', textTransform: 'capitalize', padding: "0.5rem 0rem", width: "6rem"}}>Sign up</Button></Link>
      <Link to = "/" className="navbar-btn"><Button variant="outlined" sx={{color: 'black', border: '.1px solid rgb(198, 198, 198)', borderRadius: 2, padding: '8px 24px', fontSize: 14}}><LanguageIcon/>EN</Button></Link>
    </Stack>
  );
}