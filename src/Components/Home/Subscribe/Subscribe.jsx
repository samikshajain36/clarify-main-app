import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Subscribe.css';

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container className='subscribe-container' maxWidth="lg">
                <Box className='subscribe' sx={{ textAlign: 'left' }}>
                    <Box>
                        <Box className="subscribe-caption-container">
                            <Typography id='pricing' variant='h5' sx={{ fontFamily: 'Gilroy-ExtraBold', fontSize: 20 }}>
                                <CallMadeIcon /> &nbsp; subscribe to our newsletter
                            </Typography>
                            <Typography variant='h3' className="subscribe-caption">
                                Be the first to know
                            </Typography>
                        </Box>
                        <Box className="subscribe-content-container">
                            <Box className="subscribe-content">
                                <TextField id="outlined-basic" label="Enter your Email Address" variant="outlined" />
                                <Button variant="outlined" className="subscribe-btn"> Subscribe &nbsp; <ArrowForwardIcon /></Button>
                            </Box>
                        </Box>
                    </Box>
                    <img src="https://fatoura.work/assets/images/section7.svg" alt="" />
                </Box>
            </Container>
        </React.Fragment>
    );
}