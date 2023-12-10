import React, { useEffect, useState } from 'react'
import { Box, Container, Button } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import CurrencyList from 'currency-list'
import QrCodeRoundedIcon from '@mui/icons-material/QrCodeRounded';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import PaypalDialog from '../PaypalDialog/PaypalDialog'
import axios from 'axios'
import './Profile.css'
import { Stack } from '@mui/system';

function Profile() {
    const countryList = CurrencyList.getAll('en_US')
    const [country, setCountry] = useState([countryList.code])
    const [dialog, setDialog] = useState(false);
    const [user, setUser] = useState([]);
    const [editUser, setEditUser] = useState(true);

    for (let i in countryList) {
        country.push(countryList[i].code)
    }

    useEffect(() => {
        var token = 'Bearer ' + localStorage.getItem('token')
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`, {
            headers: {
                'Authentication': token
            }
        }).then(res => { setUser(res.data) })
    }, [])

    return (
        <React.Fragment>
            <CssBaseline />
            {dialog && <PaypalDialog dialog={dialog} setDialog={setDialog} />}
            {localStorage.getItem('auth') ? 
            <Container maxWidth="1000px">
                <Box className="profile-main-container">
                    <div className="profile-container" >
                        <div className="user-detail">
                            <p>Profile Picture</p>
                            <div className="avatar-container d-flex">
                                <img className='image-user-avatar' src="https://fatoura.work/assets/images/avatar.jpg" alt="" />
                                <div className="upload-image-container">
                                    <input type='file' className='profile-upload-btn' accept='image/*' />
                                    <p>Add Image</p>
                                </div>
                            </div>
                            <div className="personal-information-container d-flex">
                                <p>Personal Information</p>
                                {
                                    editUser ? <Button className="personal-information-edit-btn" onClick={() => setEditUser(false)}>Edit</Button> :
                                        <Stack className="edit-btn-container" spacing={1} direction="row">
                                            <Button variant="outlined" className="edit-btn-outline" onClick={() => setEditUser(true)}>Cancel</Button>
                                            <Button variant="contained" className="edit-btn" onClick={() => setEditUser(true)}>Save</Button>
                                        </Stack>
                                }
                            </div>
                            <div className="user-detail-input-container d-flex">
                                <div className="user-detail-input-wrapper d-flex">
                                    <label htmlFor="">First Name</label>
                                    <input type="text" className='profile-input-fields' defaultValue={user.fname} disabled={editUser} />
                                </div>
                                <div className="user-detail-input-wrapper d-flex">
                                    <label htmlFor="">Last Name</label>
                                    <input type="text" className='profile-input-fields' defaultValue={user.lname} disabled={editUser} />
                                </div>
                            </div>
                            <div className="user-detail-input-container d-flex">
                                <div className="user-detail-input-wrapper d-flex">
                                    <label htmlFor="">Email Address</label>
                                    <input type="text" className='profile-input-fields email' defaultValue={user.email} disabled={editUser} />
                                </div>
                                <div className="user-detail-input-wrapper d-flex">
                                    <label htmlFor="">Contact Number</label>
                                    <input type="text" className='profile-input-fields' defaultValue={user.phone} disabled={editUser} />
                                </div>
                            </div>
                            <div className="password-container d-flex">
                                <p>Personal Information</p>
                                <Button className="password-edit-btn"><CreateRoundedIcon /></Button>
                            </div>
                        </div>
                    </div>
                    <div className="profile-container" >
                        <div className="user-detail">
                            <p>Company Logo</p>
                            <div className="avatar-container d-flex">
                                <img className='company-user-avatar' src="https://fatoura.work/assets/images/avatar.jpg" alt="" />
                                <div className="upload-image-container">
                                    <input type='file' className='profile-upload-btn' accept='image/*' />
                                    <p>Add Image</p>
                                </div>
                            </div>
                            <div className="personal-information-container d-flex">
                                <p>Company Setting</p>
                                <Button className="personal-information-edit-btn">Edit</Button>
                            </div>
                            <div className="user-detail-input-container d-flex">
                                <div className="user-detail-input-wrapper d-flex">
                                    <label htmlFor="">Company Name</label>
                                    <input type="text" className='company-input-fields' />
                                </div>
                            </div>
                            <div className="user-detail-input-container d-flex">
                                <div className="user-detail-input-wrapper d-flex">
                                    <label htmlFor="">Entity Id</label>
                                    <input type="text" className='company-input-fields' />
                                </div>
                            </div>
                            <div className="user-detail-input-container d-flex">
                                <div className="user-detail-input-wrapper d-flex">
                                    <label htmlFor="">Company Address</label>
                                    <textarea rows={4} className='company-input-fields' />
                                </div>
                            </div>
                            <div className="user-detail-input-container d-flex">
                                <div className="user-detail-input-wrapper d-flex">
                                    <label htmlFor="">Tax Number</label>
                                    <input type="number" className='tax-input-fields' />
                                </div>
                                <div className="user-detail-input-wrapper d-flex">
                                    <label htmlFor="">Country Selection</label>
                                    <select className='currency-input-fields' name="" id="">
                                        {country.map(item =>
                                            <option>{item}</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                            <div className="user-detail-input-container d-flex">
                                <div className="user-detail-input-wrapper d-flex">
                                    <p>Decimal Settings</p>
                                    <div className="decimal-wrapper">
                                        <input type="radio" name="decimal" id="" />
                                        <label htmlFor="">&nbsp;2 Decimal&nbsp;&nbsp;&nbsp;</label>
                                        <input type="radio" name="decimal" id="" />
                                        <label htmlFor="">&nbsp;3 Decimal</label>
                                    </div>
                                </div>
                            </div>
                            <div className="user-detail-input-container d-flex">
                                <div className="user-detail-input-wrapper d-flex">
                                    <p>QR Code Settings</p>
                                    <div className="user-detail-input-wrapper d-flex">
                                        <label htmlFor="">Heading</label>
                                        <input type="text" className='company-input-fields' />
                                    </div>
                                </div>
                            </div>
                            <div className="user-detail-input-container d-flex">
                                <div className="qr-code-wrapper d-flex">
                                    <label htmlFor="">Image</label>
                                    <QrCodeRoundedIcon className="profile-qr-code" />
                                </div>
                                <div className="upload-image-container additional-uploads">
                                    <input type='file' className='add-qr-code' accept='image/*' />
                                    <p className='pl'>Add Image</p>
                                </div>
                            </div>
                            <div className="user-detail-input-container d-flex">
                                <div className="e-sign-wrapper d-flex">
                                    <p>E-Sign Settings</p>
                                    <PhotoOutlinedIcon className="profile-e-sign" />
                                </div>
                                <div className="upload-image-container additional-uploads">
                                    <input type='file' className='add-image' accept='image/*' />
                                    <p>Add Image</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-container" >
                        <div className="user-detail">
                            <div className="d-flex">
                                <p>PayPal Payment Settings &nbsp;</p>
                                <button className='paypal-payment-link' onClick={() => setDialog(true)}>How to?</button>
                            </div>
                            <p className="paypal-breif-content">This is a Pro feature. Upgrade your account to configure these settings</p>
                        </div>
                    </div>
                </Box>
            </Container>: window.location.replace('/signin')}
        </React.Fragment>
    )
}

export default Profile