import React from 'react'
import ItemTable from '../ItemTable/ItemTable'
import axios from 'axios'
import QrCode from '../QRCode/QrCode';

const Index = ({id}) => {

    const [invoice, setInvoice] = React.useState([])
    const [item, setItem] = React.useState([])

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/view/invoice/${id}`, { headers: { 'authentication': 'Bearer ' + localStorage.getItem('token') } }).then(res => {
            setInvoice(res.data.invoice[0])
            setItem([...res.data.result.items])
        })
    })

    return (
        <div className="invoice-view" id="invoice">
            <label htmlFor="" className='invoice-view-label d-flex'>INVOICE</label>
            <div className="invoice-view-number d-flex">
                <div className="invoice-view-number-container">
                    <p className="heading">Invoice Number: &nbsp;</p>
                    <p className="invoice-view-data">{invoice.invoiceNumber}</p>
                </div>
                <div className="invoice-view-company-name1">{invoice.companyName}</div>
            </div>
            <div className="invoice-view-number d-flex">
                <div className="invoice-view-number-container">
                    <p className="heading">Invoice Date: &nbsp;</p>
                    <p className="invoice-view-data">{invoice.invoiceDate}</p>
                </div>
                <div className="invoice-view-company-name">{invoice.companyName}</div>
            </div>
            <div className="invoice-view-number d-flex">
                <div className="invoice-view-number-container">
                    <p className="heading">Reference Number: &nbsp;</p>
                    <p className="invoice-view-data">{invoice.referenceNumber}</p>
                </div>
            </div>
            <div className="invoice-view-number d-flex">
                <div className="invoice-view-number-container">
                    <p className="heading">Due Date: &nbsp;</p>
                    <p className="invoice-view-data">{invoice.dueDate}</p>
                </div>
            </div>
            <div className="invoice-view-number">
                <div className="invoice-view-number-container-client">
                    <p className="heading">Client Name &nbsp;</p>
                    <hr className="mini-divider" />

                    <p className="invoice-view-client-data">{invoice.customerName}</p>
                    <p className="invoice-view-client-data">Billing Address: </p>
                    <p className="invoice-view-data">{invoice.billingAddress}</p>
                    <hr className="mini-divider" />

                    <p className="heading">Description &nbsp;</p>
                    {item.length > 0 && <ItemTable item={item} />}

                    <p className="heading">E-Invoice &nbsp;</p>
                    <QrCode invoiceNumber={invoice.invoiceNumber} />
                </div>
            </div>
        </div>
    )
}

export default Index