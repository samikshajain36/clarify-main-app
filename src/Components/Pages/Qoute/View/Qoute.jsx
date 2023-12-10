import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ItemTable from './ItemTable/ItemTable'
import axios from 'axios'
import Buttons from './Buttons/Buttons'
import { useParams } from 'react-router-dom';


export default function SimpleContainer(props) {
    const { id } = useParams();
    const [qoute, setQoute] = React.useState({})
    const [item, setItem] = React.useState([])

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/view/qoute/${id}`, { headers: { 'authentication': 'Bearer ' + localStorage.getItem('token') } }).then(res => {
            setQoute(res.data.result)
            // console.log([...res.data.result.items])
            setItem([...res.data.result.items])
        })
    }, [])

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="1000px">
                <Box className="invoice-main-container">
                    <Box className='d-flex'>
                        <Buttons />
                    </Box>
                    <div className="invoice-view" id="qoutation">
                        <label htmlFor="" className='invoice-view-label d-flex'>Qoute</label>
                        <div className="invoice-view-number d-flex">
                            <div className="invoice-view-number-container">
                                <p className="heading  bill-heading">Bill Number: &nbsp;</p>
                                <p className="invoice-view-data">{qoute.qouteNumber}</p>
                            </div>
                            <div className="invoice-view-company-name1">{qoute.companyName}</div>
                        </div>
                        <div className="invoice-view-number d-flex">
                            <div className="invoice-view-number-container">
                                <p className="heading  bill-heading">Invoice Date: &nbsp;</p>
                                <p className="invoice-view-data">{qoute.qouteDate}</p>
                            </div>
                            <div className="invoice-view-company-name">{qoute.companyName}</div>
                        </div>
                        <div className="invoice-view-number d-flex">
                            <div className="invoice-view-number-container">
                                <p className="heading  bill-heading">Reference Number: &nbsp;</p>
                                <p className="invoice-view-data">{qoute.referenceNumber}</p>
                            </div>
                        </div>
                        <div className="invoice-view-number d-flex">
                            <div className="invoice-view-number-container">
                                <p className="heading  bill-heading">Due Date: &nbsp;</p>
                                <p className="invoice-view-data">{qoute.dueDate}</p>
                            </div>
                        </div>
                        <div className="invoice-view-number">
                            <div className="invoice-view-number-container-client">
                                <p className="heading  bill-heading">Vendor Name &nbsp;</p>
                                <hr className="mini-divider" />

                                <p className="invoice-view-client-data">{qoute.customerName}</p>
                                <p className="invoice-view-client-data">Billing Address: </p>
                                <p className="invoice-view-data">{qoute.billingAddress}</p>
                                <hr className="mini-divider" />

                                <p className="heading  bill-heading">Description &nbsp;</p>
                                {item.length > 0 && <ItemTable item = {item}/>}
                            </div>
                        </div>
                        <div className="invoice-view-number d-flex">
                            <div className="invoice-view-number-container">
                                <p className="heading  bill-heading">Terms and Conditions: &nbsp;</p>
                                <p className="invoice-view-data">{qoute.termsAndCondition}</p>
                            </div>
                        </div>
                    </div>
                </Box>
            </Container>
        </React.Fragment>
    );
}