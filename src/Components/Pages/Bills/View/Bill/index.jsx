import React from 'react'
import ItemTable from './ItemTable/ItemTable'
import axios from 'axios'

const Index = ({id}) => {
    const [bill, setBill] = React.useState({})
    const [item, setItem] = React.useState([])

    React.useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/view/bill/${id}`, { headers: { 'authentication': 'Bearer ' + localStorage.getItem('token')}}).then(res => {
            setBill(res.data.result)
            setItem([...res.data.result.items])
        })
    }, [item, bill])
    
    return (
        <div className="invoice-view" id="document">
            <label htmlFor="" className='invoice-view-label d-flex'>Bill</label>
            <div className="invoice-view-number d-flex">
                <div className="invoice-view-number-container">
                    <p className="heading  bill-heading">Bill Number: &nbsp;</p>
                    <p className="invoice-view-data">{bill.billNumber}</p>
                </div>
                <div className="invoice-view-company-name1">{bill.companyName}</div>
            </div>
            <div className="invoice-view-number d-flex">
                <div className="invoice-view-number-container">
                    <p className="heading  bill-heading">Invoice Date: &nbsp;</p>
                    <p className="invoice-view-data">{bill.billDate}</p>
                </div>
                <div className="invoice-view-company-name">{bill.companyName}</div>
            </div>
            <div className="invoice-view-number d-flex">
                <div className="invoice-view-number-container">
                    <p className="heading  bill-heading">Reference Number: &nbsp;</p>
                    <p className="invoice-view-data">{bill.referenceNumber}</p>
                </div>
            </div>
            <div className="invoice-view-number d-flex">
                <div className="invoice-view-number-container">
                    <p className="heading  bill-heading">Due Date: &nbsp;</p>
                    <p className="invoice-view-data">{bill.dueDate}</p>
                </div>
            </div>
            <div className="invoice-view-number">
                <div className="invoice-view-number-container-client">
                    <p className="heading  bill-heading">Vendor Name &nbsp;</p>
                    <hr className="mini-divider" />

                    <p className="invoice-view-client-data">{bill.customerName}</p>
                    <p className="invoice-view-client-data">Billing Address: </p>
                    <p className="invoice-view-data">{bill.billingAddress}</p>
                    <hr className="mini-divider" />

                    <p className="heading  bill-heading">Description &nbsp;</p>
                    {item.length > 0 && <ItemTable item={item} />}
                </div>
            </div>
            <div className="invoice-view-number d-flex">
                <div className="invoice-view-number-container">
                    <p className="heading  bill-heading">Terms and Conditions: &nbsp;</p>
                    <p className="invoice-view-data">{bill.termsAndCondition}</p>
                </div>
            </div>
        </div>
    )
}

export default Index