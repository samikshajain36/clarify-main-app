import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from '@mui/material/Button';
import './Subscription.css'
import { Box, Container } from '@mui/system';
import Dialog from "./Dialog"

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}


export default function BasicTable() {
    const [dialog, setDialog] = React.useState(false)
    const rows = [
        createData('Create (Invoices, Bills, Quotes, Purchase Orders)', 'Yes', 'Yes', 'Yes'),
        createData('Save Invoices', 'Yes', 'Yes', 'Yes'),
        createData('Get paid through PayPal', 'No', 'No', 'Yes'),
        createData('Send Invoice by email', 'Yes', 'Yes', 'Yes'),
        createData('Search invoices by date range and type', 'Yes', 'Yes', 'Yes'),
        createData('Pay now by email', 'Yes', 'Yes', 'Yes'),
        createData('Track Payments', 'Yes', 'Yes', 'Yes'),
        createData('Export in CSV and PDF', 'Yes', 'Yes', 'Yes'),
        createData('Multi-Currency', 'Yes', 'Yes', 'Yes'),
        createData('Sequential Invoice Numbering', 'Yes', 'Yes', 'Yes'),
        createData('Form Limitation', 10, 1500, 5000),
        createData('    ', <></>, <><Button variant="contained" sx={{ padding: '16px 40px', borderRadius: '1rem', textTransform: 'capitalize', backgroundColor: '#0c4d71' }} onClick={() => setDialog(true)}> Upgrade<ArrowForwardIcon /></Button></>, <><Button variant="contained" sx={{ padding: '16px 40px', borderRadius: '1rem', textTransform: 'capitalize', backgroundColor: '#0c4d71' }} onClick={() => setDialog(true)}> Upgrade<ArrowForwardIcon /></Button></>),
        createData('Need more forms limit? Contact us here'),
    
    ];

    return (
        <>
            {dialog && <Dialog setDialog = {setDialog}/>}
            <Container sx={{ pt: 10 }}>
                <Box className="d-flex" sx={{ flexDirection: 'column', justifyContent: 'center', ml: 15, p: '1rem 2rem', minWidth: '100%', borderRadius: 5, backgroundColor: '#EBF6F7' }}>
                    <TableContainer component={Paper} sx={{ borderRadius: 5, maxWidth: '100%', mb: 4, textAlign: 'start', }}>
                        <h2 style={{ fontSize: 16, fontWeight: 'bold', lineHeight: 5 }}>&nbsp; &nbsp; Current Plan Details</h2>
                        <Table sx={{ maxWidth: 650, backgroundColor: '#ffff', fontSize: 16, fontWeight: 'bold', p: '5px 10px' }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="start" sx={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', p: '0px 0px ', width: 10 }}>Plan</TableCell>
                                    <TableCell align="start" sx={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', p: '0px 0px ', width: 10 }}>Remaining Balance</TableCell>
                                    <TableCell align="start" sx={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', p: '0px 0px ', width: 10 }}>Price</TableCell>
                                    <TableCell align="start" sx={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', p: '0px 0px ', width: 10 }}>Expiration Date</TableCell>
                                </TableRow>
                                <TableRow sx={{ maxWidth: '50%' }}>
                                    <TableCell align="left" sx={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Free</TableCell>
                                    <TableCell align="left" sx={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>6 Invoices</TableCell>
                                    <TableCell align="left" sx={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>$0.00</TableCell>
                                    <TableCell align="left" sx={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Nov 9, 2023</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TableContainer component={Paper} sx={{ borderRadius: 5, maxWidth: '100%' }}>
                        <Table sx={{ minWidth: 650, backgroundColor: '#ffff', fontSize: 16, fontWeight: 'bold' }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontSize: 16, fontWeight: 'bold' }}>Plan Features</TableCell>
                                    <TableCell align="right" sx={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Free <br />$0/year</TableCell>
                                    <TableCell align="right" sx={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Basic<br />$90/year</TableCell>
                                    <TableCell align="right" sx={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Pro<br />$140/year</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" sx={{ fontSize: 16, fontWeight: 'bold' }}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right" sx={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>{row.calories}</TableCell>
                                        <TableCell align="right" sx={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>{row.fat}</TableCell>
                                        <TableCell align="right" sx={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>{row.carbs}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </>
    );
}
