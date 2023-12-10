import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ItemTable from './ItemTable/ItemTable'
import axios from 'axios'
import Buttons from './Buttons/Buttons'
import { useParams } from 'react-router-dom';
// import './Invoice.css'
import QrCode from './QRCode/QrCode';

export default function SimpleContainer(props) {
    const {id} = useParams();
    const [purchase, setPurchase] = React.useState([])
    const [item, setItem] = React.useState([])

    React.useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/view/purchase/${id}`, { headers: { 'authentication': 'Bearer ' + localStorage.getItem('token')}}).then(res => {
            setPurchase(res.data.result)
            console.log(res.data)
            setItem([...res.data.result.items])
        })
    }, [])

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="1000px">
                <Box className="invoice-main-container">
                    <Box className='d-flex'>
                    <Buttons/>
                    </Box>
                    <div className="invoice-view" id="purchase">
                        <label htmlFor="" className='invoice-view-label d-flex'>INVOICE</label>
                        <div className="invoice-view-number d-flex">
                            <div className="invoice-view-number-container">
                                <p className="heading">Invoice Number: &nbsp;</p>
                                <p className="invoice-view-data">{purchase.purchaseNumber}</p>
                            </div>
                            <div className="invoice-view-company-name1">{purchase.companyName}</div>
                        </div>
                        <div className="invoice-view-number d-flex">
                            <div className="invoice-view-number-container">
                                <p className="heading">Invoice Date: &nbsp;</p>
                                <p className="invoice-view-data">{purchase.purchaseDate}</p>
                            </div>
                            <div className="invoice-view-company-name">{purchase.companyName}</div>
                        </div>
                        <div className="invoice-view-number d-flex">
                            <div className="invoice-view-number-container">
                                <p className="heading">Reference Number: &nbsp;</p>
                                <p className="invoice-view-data">{purchase.referenceNumber}</p>
                            </div>
                        </div>
                        <div className="invoice-view-number d-flex">
                            <div className="invoice-view-number-container">
                                <p className="heading">Due Date: &nbsp;</p>
                                <p className="invoice-view-data">{purchase.dueDate}</p>
                            </div>
                        </div>
                        <div className="invoice-view-number">
                            <div className="invoice-view-number-container-client">
                                <p className="heading">Client Name &nbsp;</p>
                                <hr className="mini-divider" />

                                <p className="invoice-view-client-data">{purchase.customerName}</p>
                                <p className="invoice-view-client-data">Billing Address: </p>
                                <p className="invoice-view-data">{purchase.billingAddress}</p>
                                <hr className="mini-divider" />

                                <p className="heading">Description &nbsp;</p>
                                {item.length > 0 && <ItemTable item = {item}/>}

                                <p className="heading">E-purchase &nbsp;</p>
                                <QrCode invoiceNumber = {purchase.purchaseNumber}/>
                            </div>
                        </div>
                    </div>
                </Box>
            </Container>
        </React.Fragment>
    );
}