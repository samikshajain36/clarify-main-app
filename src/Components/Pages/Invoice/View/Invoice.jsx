import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Buttons from './Buttons/Buttons'
import { useParams } from 'react-router-dom';
import Invoice from "./Invoice/index.jsx"
import './Invoice.css'

export default function SimpleContainer(props) {
    const {id} = useParams();
    

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="1000px">
                <Box className="invoice-main-container">
                    <Box className='d-flex'>
                    <Buttons/>
                    </Box>
                    <Invoice id={id}/>
                </Box>
            </Container>
        </React.Fragment>
    );
}