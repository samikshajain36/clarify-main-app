import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AddIcon from '@mui/icons-material/Add';
import UploadImage from '../../UploadImage/Image'
import ItemTable from '../../ItemTable/ItemTable'
import RequiredError from '../../RequiredError/RequiredError'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import './PurchaseOrder.css'

export default function SimpleContainer() {
    const formData = new FormData();
    const date = new Date();
    const [invoiceNumber, setInvoiceNumber] = React.useState("INV" + date.getFullYear() + "-000")
    const navigate = new useNavigate()

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/purchase`, { headers: { 'Authentication': "Bearer " + localStorage.getItem('token') } })
            .then(res => { setInvoiceNumber(invoiceNumber.concat(res.data.invoice.length + 1)) })
    }, [])
    const [item, setItem] = React.useState([])
    const [error, setError] = React.useState(false)
    const [submit, setSubmit] = React.useState(false)

    var { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const finalItem = JSON.stringify(item)
        const finalResult = Object.assign(data, { itemArray: finalItem })
        if (item.length > 0 && submit) {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/purchase`, finalResult,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authentication': "Bearer " + localStorage.getItem('token')
                    },
                }).then(() => {
                    navigate('/pages/myInvoices')
                })

            console.log("JSON: ", finalResult)
        }
        else {
            item.length < 1 && setError(true)
        }
    }

    return (
        <React.Fragment>
            {error && <RequiredError setError={setError} />}
            <CssBaseline />
            <Container maxWidth="1000px">
                <Box className="invoice-main-container">
                    <Box className='d-flex'>
                        <span className='invoice-label-icon'><AddIcon /></span>
                        <label htmlFor="invoice-form" className='form-label'>CREATE - Purchase Order</label>
                    </Box>
                    <form onSubmit={handleSubmit(onSubmit)} className="invoice-form" sx={{ bgcolor: '#d7e7eb', height: 'auto', minWidth: '902.1px' }}>
                        <Box className="invoice-form-container">
                            <Box className='d-flex'>
                                <Box>
                                    <Box className="form-input-colum">
                                        <label htmlFor="invoice-number">Purchase Order Number</label>
                                        <input className='form-input-field' type="text" name="invoice-number" value={invoiceNumber} disabled {...register("invoiceNumber")} />
                                        <label htmlFor="">Purchase Order Date</label>
                                        <input className='form-input-field' type="date" id='date' value={date.toLocaleDateString()} {...register("invoiceDate")} />
                                        <label htmlFor="">Due Date</label>
                                        <input type="date" {...register("dueDate")} />
                                        <label htmlFor="">Reference Number</label>
                                        <input type="text" {...register("referenceNumber")} />

                                        <label htmlFor="">Client Name</label>
                                        <hr />
                                        <label htmlFor=""><PersonOutlineIcon />&nbsp;Customer Name</label>
                                        <input type="text" {...register("customerName", { required: true })} />
                                        {errors.customerName && <p className='error' style={{ color: 'red', fontSize: '30px !important', opacity: '.6' }}>Field is required</p>}
                                        <label htmlFor=""><PeopleOutlineIcon />&nbsp;Billing Address</label>
                                        <textarea className="address-input-field" type="text" rows="6" {...register("billingAddress", { required: true })} />
                                        {errors.customerName && <p className='error' style={{ color: 'red', fontSize: '30px !important', opacity: '.6' }}>Field is required</p>}
                                        <label htmlFor=""><LocalShippingIcon />&nbsp;Shipping Address</label>
                                        <textarea className="address-input-field" type="text" rows="6" {...register("shippingAddress")} />
                                        <hr />
                                        <label htmlFor=""><ListAltIcon />&nbsp;Description</label>
                                        <input type="text" className='invoice-description' {...register("invoiceNumber")} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="invoice-company-section">
                                <UploadImage title="Add Company Logo" formData={formData} />
                                <label className='company-fields' htmlFor=""><PersonOutlineIcon />&nbsp;Company Name</label>
                                <input className='company-fields' type="text" {...register("companyName", { required: true })} />
                                {errors.customerName && <p className='error' style={{ color: 'red', fontSize: '30px !important', opacity: '.6', marginLeft: 20 }}>Field is required</p>}
                                <label className='company-fields' htmlFor=""><CorporateFareOutlinedIcon />&nbsp;Company Address</label>
                                <textarea className='company-fields company-address address-input-field' rows="6" cols="20" type="text" {...register("companyAddress", { required: true })} />
                                {errors.customerName && <p className='error' style={{ color: 'red', fontSize: '30px !important', opacity: '.6', marginLeft: 20 }}>Field is required</p>}
                                <label className='company-fields' htmlFor="">Entity ID</label>
                                <input className='company-fields' type="text" {...register("entityId")} />
                                <label className='company-fields' htmlFor="">GST Number</label>
                                <input className='company-fields' type="text" {...register("gstNumber")} />
                            </Box>
                        </Box>
                        <ItemTable setItem={setItem} item={item} />
                        <hr style={{ width: "100%" }} />
                        <Box className="invoice-single-input-block-container">
                            <Box className="invoice-single-input-block">
                                <label htmlFor="">Terms and Conditions</label>
                                <textarea className="address-input-field term-and-condition-input" type="text" rows="6" cols={100} {...register("termsAndCondition")} />
                            </Box>
                        </Box>
                        <Box className="save-invoice-btn-container d-flex">
                            <Box className="d-flex btn-sub-container">
                                <button type='submit' className='invoice-btn-save' onClick={() => setSubmit(true)}>Save Invoice</button>
                                <button className='invoice-btn-discard'>Discard</button>
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Container>
        </React.Fragment>
    );
}