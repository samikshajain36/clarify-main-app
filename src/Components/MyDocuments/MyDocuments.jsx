import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Buttons from './Buttons/Buttons'
import Checkbox from '@mui/material/Checkbox';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import ActionBtn from './ActionBtn'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './MyDocuments.css'

export default function SimpleContainer() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [mark, setMark] = React.useState(false)
    const [invoice, setInvoice] = React.useState([])
    const [bill, setBill] = React.useState([])
    const [qoute, setQoute] = React.useState([])
    const [po, setPo] = React.useState([])
    const navigate = new useNavigate();
    const [quantity, setQuantity] = React.useState(0)

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/invoice`, { headers: { 'authentication': 'Bearer ' + localStorage.getItem('token') } }).then(res => {
            setInvoice(res.data.invoice)
        })
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/bill`, { headers: { 'authentication': 'Bearer ' + localStorage.getItem('token') } }).then(res => {
            setBill(res.data.bills)          


        })
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/qoute`, { headers: { 'authentication': 'Bearer ' + localStorage.getItem('token') } }).then(res => {
            setQoute(res.data.qoute)
        })
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/purchase`, { headers: { 'authentication': 'Bearer ' + localStorage.getItem('token') } }).then(res => {
            setPo(res.data.purchase)
        })
    }, [])



    const viewInvoice = async (item) => {
        const url = "/pages/myInvoices/viewInvoice/" + item._id
        navigate(url);
    }
    const viewBill = async (item) => {
        const url = "/pages/myBills/viewBill/" + item._id
        navigate(url);
    }
    const viewQoute = async (item) => {
        const url = "/pages/myQoutes/viewQoute/" + item._id
        navigate(url);
    }
    const viewPurchase = async (item) => {
        const url = "/pages/myPurchases/viewPurchase/" + item._id
        navigate(url);
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="1000px">
                <Box className="invoice-view-main-container">
                    <Box className='d-flex invoice-view-header'>
                        <span className='myDocuments-view-label'>My Invoices</span>
                        <Buttons />
                    </Box>
                    <Box className='invoice-view-table-container'>
                        <table className='invoice-view-table'>
                            <tr className='invoice-view-table-head-container'>
                                <td className='invoice-view-table-head checkbox'><Checkbox {...label} sx={{ borderRadius: '20rem' }} onClick={() => setMark(!mark)} checked={mark} /></td>
                                <td className='invoice-view-table-head'>Customer Name</td>
                                <td className='invoice-view-table-head'>Type</td>
                                <td className='invoice-view-table-head'>Invoice #</td>
                                <td className='invoice-view-table-head'>Date Issued</td>
                                <td className='invoice-view-table-head'>Amount</td>
                                <td className='invoice-view-table-head'>Tax</td>
                                <td className='invoice-view-table-head'>Amount Paid</td>
                                <td className='invoice-view-table-head'>Amount Due</td>
                                <td className='invoice-view-table-head'>Total Amount</td>
                                <td className='invoice-view-table-head'>Action</td>
                            </tr>
                            {(invoice.length < 1 && bill.length < 1 && qoute.length < 1 && po.length < 1) && <div className='d-flex' style={{ justifyContent: 'center', position: 'absolute', left: '55%' }}>No Receipt</div>}
                            {invoice.map((item, index) => (
                                <tr className='' key={index}>
                                    <td className='invoice-view-table-data checkbox'><Checkbox {...label} sx={{ borderRadius: '20rem' }} checked={mark} /></td>
                                    <td className='invoice-view-table-data'>{item.customerName}</td>
                                    <td className='invoice-view-table-data'>{item.type}</td>
                                    <td className='invoice-view-table-data' style={{ width: "12rem" }}>{item.invoiceNumber}</td>
                                    <td className='invoice-view-table-data'>{item.invoiceDate}</td>
                                    {item.items.map(ele => (
                                        <>
                                            <td className='invoice-view-table-data'>${ele.quantity * ele.unitPrice}</td>
                                            <td className='invoice-view-table-data'>${ele.tax ? ele.tax : "00.00"}</td>
                                            <td className='invoice-view-table-data'>$00.00</td>
                                            <td className='invoice-view-table-data'>$0.00</td>
                                            <td className='invoice-view-table-data'>${ele.quantity * ele.unitPrice}</td>
                                        </>
                                    ))}
                                    <td className='invoice-view-table-data invoice-view-action-btns d-flex'>
                                        <a href="#" className='invoice-view-links'>
                                            <ActionBtn className='invoice-view-action-btn invoice-view-action-edit-btn' tooltip="Edit" icon={<SaveAsOutlinedIcon />} bgColor="#AFDEE1" color="black" />
                                        </a>&nbsp;&nbsp;
                                        <div className='invoice-view-links' onClick={() => viewInvoice(item)}>
                                            <ActionBtn className='invoice-view-action-btn' tooltip="View" icon={<TextSnippetOutlinedIcon />} bgColor="#AFDEE1" color="black" />
                                        </div>
                                    </td>
                                </tr>
                            ))
                            }
                            {bill.map((item, index) => (
                                <tr className='' key={index}>
                                    <td className='invoice-view-table-data checkbox'><Checkbox {...label} sx={{ borderRadius: '20rem' }} checked={mark} /></td>
                                    <td className='invoice-view-table-data'>{item.customerName}</td>
                                    <td className='invoice-view-table-data'>{item.type}</td>
                                    <td className='invoice-view-table-data'>{item.billNumber}</td>
                                    <td className='invoice-view-table-data'>{item.billDate}</td>
                                    <td className='invoice-view-table-data'>$52.00</td>
                                    <td className='invoice-view-table-data'>$0.00</td>
                                    <td className='invoice-view-table-data'>$52.00</td>
                                    <td className='invoice-view-table-data'>$0.00</td>
                                    <td className='invoice-view-table-data'>$52.00</td>
                                    <td className='invoice-view-table-data invoice-view-action-btns d-flex'>
                                        <a href="#" className='invoice-view-links'>
                                            <ActionBtn className='invoice-view-action-btn invoice-view-action-edit-btn' tooltip="Edit" icon={<SaveAsOutlinedIcon />} bgColor="#AFDEE1" color="black" />
                                        </a>&nbsp;&nbsp;
                                        <div className='invoice-view-links' onClick={() => viewBill(item)}>
                                            <ActionBtn className='invoice-view-action-btn' tooltip="View" icon={<TextSnippetOutlinedIcon />} bgColor="#AFDEE1" color="black" />
                                        </div>
                                    </td>
                                </tr>
                            ))
                            }
                            {qoute.map((item, index) => (
                                <tr className='' key={index}>
                                    <td className='invoice-view-table-data checkbox'><Checkbox {...label} sx={{ borderRadius: '20rem' }} checked={mark} /></td>
                                    <td className='invoice-view-table-data'>{item.customerName}</td>
                                    <td className='invoice-view-table-data'>{item.type}</td>
                                    <td className='invoice-view-table-data'>{item.qouteNumber}</td>
                                    <td className='invoice-view-table-data'>{item.qouteDate}</td>
                                    <td className='invoice-view-table-data'>$52.00</td>
                                    <td className='invoice-view-table-data'>$0.00</td>
                                    <td className='invoice-view-table-data'>$52.00</td>
                                    <td className='invoice-view-table-data'>$0.00</td>
                                    <td className='invoice-view-table-data'>$52.00</td>
                                    <td className='invoice-view-table-data invoice-view-action-btns d-flex'>
                                        <a href="#" className='invoice-view-links'>
                                            <ActionBtn className='invoice-view-action-btn invoice-view-action-edit-btn' tooltip="Edit" icon={<SaveAsOutlinedIcon />} bgColor="#AFDEE1" color="black" />
                                        </a>&nbsp;&nbsp;
                                        <div className='invoice-view-links' onClick={() => viewQoute(item)}>
                                            <ActionBtn className='invoice-view-action-btn' tooltip="View" icon={<TextSnippetOutlinedIcon />} bgColor="#AFDEE1" color="black" />
                                        </div>
                                    </td>
                                </tr>
                            ))
                            }
                            {po.map((item, index) => (
                                <tr className='' key={index}>
                                    <td className='invoice-view-table-data checkbox'><Checkbox {...label} sx={{ borderRadius: '20rem' }} checked={mark} /></td>
                                    <td className='invoice-view-table-data'>{item.customerName}</td>
                                    <td className='invoice-view-table-data'>{item.type}</td>
                                    <td className='invoice-view-table-data'>{item.purchaseNumber}</td>
                                    <td className='invoice-view-table-data'>{item.purchaseDate}</td>
                                    <td className='invoice-view-table-data'>$52.00</td>
                                    <td className='invoice-view-table-data'>$0.00</td>
                                    <td className='invoice-view-table-data'>$52.00</td>
                                    <td className='invoice-view-table-data'>$0.00</td>
                                    <td className='invoice-view-table-data'>$52.00</td>
                                    <td className='invoice-view-table-data invoice-view-action-btns d-flex'>
                                        <a href="#" className='invoice-view-links'>
                                            <ActionBtn className='invoice-view-action-btn invoice-view-action-edit-btn' tooltip="Edit" icon={<SaveAsOutlinedIcon />} bgColor="#AFDEE1" color="black" />
                                        </a>&nbsp;&nbsp;
                                        <div className='invoice-view-links' onClick={() => viewPurchase(item)}>
                                            <ActionBtn className='invoice-view-action-btn' tooltip="View" icon={<TextSnippetOutlinedIcon />} bgColor="#AFDEE1" color="black" />
                                        </div>
                                    </td>
                                </tr>
                            ))
                            }
                        </table>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}