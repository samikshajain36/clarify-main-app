import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import logo from '../../assets/logo-white.png'
import './Sidebar.css'

function Sidebar() {
    const [state, setState] = React.useState(1)
    const [path, setPath] = React.useState(window.location.href.split('/pages'))
    React.useEffect(() => {
        const curve = document.getElementById('curve')
        const link1 = document.getElementById('sidebar-link-1')
        const link2 = document.getElementById('sidebar-link-2')
        const link3 = document.getElementById('sidebar-link-3')

        console.log(path)
        if (state === 1) {
            curve.style.top = '9rem'
            curve.style.transition = '.3s ease'
            link1.style.backgroundColor = '#043f5f'
            link2.style.backgroundColor = '#0c4d71'
            link3.style.backgroundColor = '#0c4d71'
        }
        else if (state === 2) {
            curve.style.top = '12.5rem'
            curve.style.transition = '.3s ease'
            link2.style.backgroundColor = '#043f5f'
            link1.style.backgroundColor = '#0c4d71'
            link3.style.backgroundColor = '#0c4d71'
        }
        else if(state === 3){
            curve.style.top = '16rem'
            curve.style.transition = '.3s ease'
            link3.style.backgroundColor = '#043f5f'
            link2.style.backgroundColor = '#0c4d71'
            link1.style.backgroundColor = '#0c4d71'
        }

    }, [state])

    return (
        <div className='sidebar-container d-flex'>
            <img src={logo} width="248.26px" alt="" />
            <Box className='d-flex'>
                <Box className="d-flex sidebar-links">
                    <Link to='/dashboard' className="sidebar-link" id="sidebar-link-1" onClick={() => { setState(1) }}><DashboardIcon />&nbsp;Dashboard</Link>
                    <Link to='/pages/myInvoices' className="sidebar-link" id="sidebar-link-2" onClick={() => { setState(2) }}><DescriptionOutlinedIcon />&nbsp;My Documents</Link>
                    <Link to='/pages/myReports' className="sidebar-link" id="sidebar-link-3" onClick={() => { setState(3) }}><AutoGraphIcon />&nbsp;My Reports</Link>
                    <div id="curve" >
                        <div className="dot"></div>
                    </div>
                </Box>
            </Box>
        </div>
    )
}

export default Sidebar