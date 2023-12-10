import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from '@mui/material/Button';


export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="100%" sx={{ p: 1}}>
                <Box sx={{ bgcolor: '#ebf6f7', height: '60vh', p: 0, width: '83%', ml: 31, mt: 10, position: 'relative', borderRadius: '1rem'}}>
                    <Box className="contact-container">
                        <Box className="contact">
                            <Box className='contact-text'>
                                <Typography variant='h3' className="contact-caption">
                                    Let’s Get in <br /> Touch!
                                </Typography>
                            </Box>
                            <Box className='contact-form' sx={{mt: 6}}>
                                <input type="text" className='contact-form-field' placeholder="Full Name" style={{width: 300.7, height: 50}}/>
                                <input type="text" className='contact-form-field' placeholder="Email Address" style={{width: 300.7, height: 50}}/>
                                <textarea className='contact-form-field' rows="6" cols="20" placeholder="Message" />
                                <button className="contact-btn"> Send</button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}
