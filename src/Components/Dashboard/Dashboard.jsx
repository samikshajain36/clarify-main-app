import React from 'react'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Chart from '../Chart/Chart'
import Cards from './Cards/Cards'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'
function Dashboard() {
    const navigate = useNavigate()
    return (
        <>
            {localStorage.getItem('auth') ?
                <div className="link-list">
                    <Cards />
                    <div className="chart-container d-flex">
                        <Chart />
                        <div className="chart-single-card">
                            <div className="d-flex">
                                <h6>Sales Report</h6>
                                <div className="d-flex">
                                    <div className="cellular-bars">
                                        <div className="cellular-bar"><SignalCellularAltIcon /></div>
                                        <div className="cellular-bar"><SignalCellularAltIcon /></div>
                                        <div className="cellular-bar"><SignalCellularAltIcon /></div>
                                    </div>
                                    <div className="prices-container">
                                        <div className="d-flex prices">
                                            <div className="price"><h4 className='price-number'>5000.00</h4><h4 className='price-status'>Monthly</h4></div>
                                            <div className="price"><h4 className='price-number'>5000.00</h4><h4 className='price-status'>Yearly</h4></div>
                                            <div className="price"><h4 className='price-number'>5000.00</h4><h4 className='price-status'>Quarterly</h4></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : <>
                    {navigate('/signin')}
                </>
            }
        </>
    )
}

export default Dashboard