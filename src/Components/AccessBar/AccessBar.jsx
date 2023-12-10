import Nav from 'react-bootstrap/Nav';
import React from 'react'
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import Dropdown from './Dropdown/Dropdown'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './AccessBar.css'

export default function NavDropdownExample() {
    const [user, setUser] = React.useState({})
    const [toggle, setToggle] = React.useState(false)
    const navigate = new useNavigate();
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    React.useEffect(() => {
        var token = 'Bearer ' + localStorage.getItem('token')
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`, {
            headers: {
                'Authentication': token
            }
        }).then(res => { setUser(res.data) })
    }, [])

    const toggleDriver = () => {
        setToggle(!toggle)
    }
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('auth')
        window.location.reload();
        window.location.replace('/signin');
    }
    return (
        <>
            <Nav className="navbar" variant="pills" activeKey="1" onSelect={handleSelect}>
                <Dropdown />
                <div className='profile-icon-container d-flex' onClick={toggleDriver} style={{ color: 'black' }}>
                    <LanguageSharpIcon /> &nbsp; EN &nbsp;
                    <img src="https://fatoura.work/assets/images/avatar.jpg" className='profile-icon' alt="" />
                    <div className='d-flex' style={{ color: 'black' }}>Hi,&nbsp;<div style={{ textTransform: 'capitalize', color: 'black' }}>{user.fname}</div></div>
                </div>
            </Nav>
            {
                toggle && <div className="user-dropdown-container d-flex">
                    <a className='user-dropdown-link' href='/pages/profile'>My Profile</a>
                    <Link className='user-dropdown-link' to='/pages/subscriptions'>Subscription</Link>
                    <Link className='user-dropdown-link' to='/pages/help'>Help</Link>
                    <Link className='user-dropdown-link' onClick={logout}>Logout</Link>
                </div>
            }
        </>
    );
}
