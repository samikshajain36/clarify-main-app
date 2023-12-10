import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from '@mui/material/Button';

import './Contact.css'

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container  id='contact' maxWidth="100%" sx={{ bgcolor: '#ebf6f7', height: '99.9vh' }}>
                <Box className="contact-container">
                    <Box className="contact">
                        <Box className='contact-text'>
                            <Typography variant='h5' sx={{ fontFamily: 'Gilroy-ExtraBold', fontSize: 20 }}>
                                <CallMadeIcon /> &nbsp; Contact Us
                            </Typography>
                            <Typography variant='h3' className="contact-caption">
                                Let’s Get in Touch!
                            </Typography>
                        </Box>
                        <Box className='contact-form'>
                            <input type="text" className='contact-form-field' placeholder="Full Name"/>
                            <input type="text" className='contact-form-field' placeholder="Email Address"/>
                            <textarea className='contact-form-field' rows="8" cols="50" placeholder="Message" />
                            <button className="contact-btn"> Send</button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}
