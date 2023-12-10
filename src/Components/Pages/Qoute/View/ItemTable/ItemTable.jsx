import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './ItemTable.css'
import { useEffect } from 'react';


export default function BasicTable({ item }) {
    const [rows, setRows] = React.useState([]);

    useEffect(() => {
        console.log(item)
        setRows(item)
    }, [rows])
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, backgroundColor: '#c7dbe2' }} aria-label="simple table">
                    <TableHead className="item-table-head">
                        <TableRow className="item-table-header-row">
                            <TableCell className="item-table-head-text">Item Name</TableCell>
                            <TableCell className="item-table-head-text" align="right">SKU</TableCell>
                            <TableCell className="item-table-head-text" align="right">Quantity</TableCell>
                            <TableCell className="item-table-head-text" align="right">Unit Price</TableCell>
                            <TableCell className="item-table-head-text" align="right">Total Amount</TableCell>
                            <TableCell className="item-table-head-text" align="right">Tax</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="start">{row.itemName}</TableCell>
                                <TableCell align="center">{row.sku}</TableCell>
                                <TableCell align="center">{row.quantity}</TableCell>
                                <TableCell align="right">$ {row.unitPrice}</TableCell>
                                <TableCell align="right">$ {row.unitPrice * row.quantity}</TableCell>
                                <TableCell align="right">No Tax</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
            <hr className="long-divider" />
            <div className="invoice-view-currency-container d-flex">
                <div className="d-flex">
                    <p className="heading">Currency &nbsp;</p>
                    <p className="invoice-view-data">AFN</p>
                </div>
                <div>
                    <div className='invoice-view-currency-table-container'>
                        <table className='invoice-view-currency-table'>
                            <tr className='sub-total-amount-item-table-row'>
                                <th className='sub-total-amount-item-table'>Subtotal: &nbsp;</th>
                                <td className='currency-table-data'> 00.00</td>
                            </tr>
                            <tr className='total-amount-item-table-row'>
                                <th className='total-amount-item-table'>Total: &nbsp;</th>
                                <td className='currency-table-data'> 00.00</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
