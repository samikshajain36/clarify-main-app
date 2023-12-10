import React, { useEffect } from 'react'
import PaymentTwoToneIcon from '@mui/icons-material/PaymentTwoTone';
import PaymentIcon from '@mui/icons-material/Payment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import axios from 'axios';
import './Cards.css'

function Cards() {
    const [invoice, setInvoice] = React.useState([])
    const [bill, setBill] = React.useState([])
    const [qoute, setQoute] = React.useState([])
    const [po, setPo] = React.useState([])
    const [paidCount, setPaidCount] = React.useState(0);
    const [unpaidCount, setUnpaidCount] = React.useState(0);

    const getCount = (arr) =>{
       const paid =  arr.filter(ele => ele.paymentStatus === "paid");
       const unpaid =  arr.filter(ele => ele.paymentStatus === "unpaid");

       setPaidCount(paidCount + paid.length);
       setUnpaidCount(unpaidCount + unpaid.length);
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/invoice`, { headers: { 'authentication': 'Bearer ' + localStorage.getItem('token') } }).then(  res => {
              setInvoice(res.data.invoice)
        })
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/bill`, { headers: { 'authentication': 'Bearer ' + localStorage.getItem('token') } }).then(  res => {
              setBill(res.data.bills)
        })
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/qoute`, { headers: { 'authentication': 'Bearer ' + localStorage.getItem('token') } }).then(  res => {
              setQoute(res.data.qoute)
        })
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/purchase`, { headers: { 'authentication': 'Bearer ' + localStorage.getItem('token') } }).then(  res => {
              setPo(res.data.purchase)
        })
        getCount(invoice)
        getCount(bill)
        getCount(qoute)
        getCount(po)
    }, [paidCount, unpaidCount])
        return (
            <>
                {
                    <div className="d-flex">
                        <div className="dashboard-cards">
                            <h6 className='dashboard-label'>Dashboard</h6>
                            <div className="d-flex">
                                <div className="card">
                                    <div className="card-icon-container">
                                        <PaymentTwoToneIcon className="card-icons" />
                                    </div>
                                    <h1>{paidCount}</h1> <p>Paid</p></div>
                                <div className="card">
                                    <div className="card-icon-container">
                                        <PaymentIcon className="card-icons" />
                                    </div>
                                    <h1>{unpaidCount}</h1>
                                    <p>Unpaid</p>
                                </div>
                                <div className="card">
                                    <div className="card-icon-container">
                                        <AccessTimeIcon className="card-icons" />
                                    </div>
                                    <h1>0</h1>
                                    <p>Overdue</p>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-pricing">
                            <table>
                                <tr>
                                    <th>Customer Name</th>
                                    <th>Invoice Amount</th>
                                </tr>
                                {/* <hr style={{color: 'white', fontWeight: '900'}}/> */}
                                <tr>
                                    <td>darshan</td>
                                    <td>$5000.00</td>
                                </tr>
                                <button className='pricicing-card-btn'>View more details</button>
                            </table>
                        </div>
                    </div>
                }
            </>
        )
    }

export default Cards