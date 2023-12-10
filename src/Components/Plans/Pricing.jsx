import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';
import PricingTable from './PricingTable'

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{textAlign: 'left'}}>
                    <Typography id='pricing' variant='h5' sx={{fontFamily: 'Gilroy-ExtraBold', fontSize: 20}}>
                        <CallMadeIcon /> &nbsp; pricing
                    </Typography>
                    <Typography variant='h3' sx={{fontFamily: 'Gilroy-ExtraBold', fontSize: 48}}>
                        Choose the plan which suits you
                    </Typography>
                    <PricingTable/>
                </Box>
            </Container>
        </React.Fragment>
    );
}
