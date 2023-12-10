import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

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
    createData('    ', <><Button variant="outlined" sx={{borderRadius: '1rem', textTransform: 'capitalize', color: 'black', border: '.1px solid rgb(198, 198, 198)', padding: "0.8rem 0rem", width: "8rem", '&:hover': {backgroundColor: 'white'}}}> Start Now<ArrowForwardIcon/></Button></>, <><Button variant="contained" sx={{padding: '16px 40px', borderRadius: '1rem', textTransform: 'capitalize', backgroundColor: '#0c4d71', padding: "0.8rem 0rem", width: "8rem"}}> Get This<ArrowForwardIcon/></Button></>, <><Button variant="contained" sx={{padding: '16px 40px', borderRadius: '1rem', textTransform: 'capitalize', backgroundColor: '#0c4d71', padding: "0.8rem 0rem", width: "8rem"}}> Get This<ArrowForwardIcon/></Button></>),

];

export default function BasicTable() {
    return (
        <TableContainer component={Paper} sx={{ borderRadius: 5, mt: 10, mb: 10 }}>
            <Table sx={{ minWidth: 650, backgroundColor: '#EBF6F7', fontSize: 16, fontWeight: 'bold' }} aria-label="simple table">
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
    );
}
