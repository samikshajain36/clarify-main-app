import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tax from './NoTaxButton/NoTaxBadge'
import Paper from '@mui/material/Paper';
import AddItems from './AddItems/AddItems'
import getCurrencySymbol from 'currency-symbols';
import CountryDropdown from './AddItems/CountryDropdown/CountryDropdown'
import ActionBtn from '../../MyDocuments/ActionBtn'
import RateReviewIcon from '@mui/icons-material/RateReview';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import './ItemTable.css'


export default function BasicTable({ setItem, item }) {
    const [rows, setRows] = React.useState([]);
    const [total, setTotal] = React.useState()
    const [country, setCountry] = React.useState(0)

    React.useEffect(() => {
        setRows(item)
        rows.map(ele => {
            setTotal(total + ele.unitPrice * ele.quantity);
        })
    }, [])
    setItem(rows)

    const deleteItem = (index) => {
        delete rows[index];
    }

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
                            <TableCell className="item-table-head-text" align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {item !== undefined && item.length >= 1 ? rows.map((row, index) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="start">{row.itemName}</TableCell>
                                <TableCell align="center">{row.sku}</TableCell>
                                <TableCell align="center">{row.quantity}</TableCell>
                                <TableCell align="right">{getCurrencySymbol(country)} {row.unitPrice}</TableCell>
                                <TableCell align="right">{getCurrencySymbol(country)} {row.unitPrice * row.quantity}</TableCell>
                                <TableCell align="right"><Tax /></TableCell>
                                <TableCell align="right" className='d-flex'><ActionBtn className="action-btn" color="white" bgColor="#82a6b9"  icon = {<DeleteOutlinedIcon/>} tooltip="Delete"/><ActionBtn className="action-btn" color="white" bgColor="#82a6b9" icon={<RateReviewIcon/>} tooltip="Edit"/></TableCell>
                            </TableRow>
                        )) : <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="start"></TableCell>
                            <TableCell align="start"></TableCell>
                            <TableCell align="start"></TableCell>
                            <TableCell align="center" className='custom-table-cell'>No Item added</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>}
                    </TableBody>
                </Table>
                <AddItems rows={rows} />
            </TableContainer>
            <CountryDropdown setCountry={setCountry} total = {total}/>
        </>
    );
}
