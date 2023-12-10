import React from 'react'
import { Button } from '@mui/material'
import './Buttons.css'

function Buttons() {
    return (
        <form action="">
            <div className="d-flex">
                <div className="d-flex report-filter-container">
                    <label htmlFor="" className="report-field-label">Date From</label>
                    <input type="date" name="" id="" className='report-filter-fields' />
                </div>
                <div className="d-flex report-filter-container">
                    <label htmlFor="" className="report-field-label">Date To</label>
                    <input type="date" name="" id="" className='report-filter-fields' />
                </div>
                <div className="d-flex report-filter-container">
                    <label htmlFor="" className="report-field-label">Status</label>
                    <input type="text" name="" id="" className='report-filter-fields report-filter-dropdown' placeholder='All Documents'/>
                </div>
                <div className="d-flex report-filter-container">
                    <label htmlFor="" className="report-field-label">Type</label>
                    <input type="text" name="" id="" className='report-filter-fields report-filter-dropdown' placeholder='Invoice'/>
                </div>
                <div className="d-flex report-filter-btn-container">
                    <Button variant='contained' className='report-filter-btn'>Search</Button>
                    <Button variant='contained' className='report-filter-btn'>Export</Button>
                </div>
            </div>
        </form>
    )
}

export default Buttons