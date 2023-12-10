import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';
import './Feature.css';

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box className='feature' sx={{ textAlign: 'left' }}>
                    <Typography id='pricing' variant='h5' sx={{ fontFamily: 'Gilroy-ExtraBold', fontSize: 20 }}>
                        <CallMadeIcon /> &nbsp; feature
                    </Typography>
                    <Box className="feature-caption-container">
                        <Typography variant='h3' className="feature-caption">
                            Create your own customized invoices
                        </Typography>
                    </Box>
                    <Box className="feature-content-container">
                        <img src="https://fatoura.work/assets/images/section3.1.svg" alt="" />
                        <Typography variant='h5' className="feature-text">
                        Create professional and elegant looking estimates and invoices in any Arabic or English language with any currency in a matter of seconds, and easily deliver them to your clients. 
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}
