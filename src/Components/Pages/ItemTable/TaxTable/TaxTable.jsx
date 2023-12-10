import { Box } from '@mui/material'
import React from 'react'
import AddBtn from './AddBtn'
import { useForm } from 'react-hook-form';
import './TaxTable.css'

function TaxTable(props) {
    var { register, handleSubmit, formState: { errors } } = useForm();
    const [table, setTable] = React.useState([])

    const onSubmit = (e) => {
        e.rate += '%';
        table.push(e);
    }

    const setSelectValue = (rate) => {
        props.setSelectedTax({rate});
        props.setOpen(false);
        props.setChange(true)
    }
    return (
        <div className="tax-table-container">
            <label className='table-label' htmlFor="">Saved Taxes</label>
            <table className="tax-table">
                <tr className='table-head'>
                    <th className='tax-table-head-text'>Tax Name</th>
                    <th className='table-head-text'>Rate %</th>
                    <th className="blank-head"></th>
                </tr>
                {table.length < 1 && <div className='d-flex' style={{justifyContent: 'right', left: '35%', paddingBottom: 5}}>No Tax Added Yet</div>}
                {
                    table.map((el) => (
                        <>
                            {
                                <tr>
                                    <td className="table-content" style={{ color: 'black' }}>{el.name}</td>
                                    <td className="table-content" style={{ color: 'black' }}>{el.rate}</td>
                                    <td className="table-content"><button className='tax-table-add-btn' onClick={() => setSelectValue(el.rate)}>Add</button></td>
                                </tr>
                            }
                        </>
                    ))}
            </table>
            <hr minWidth="100%" />
            <label className='table-label' htmlFor="">Add New Tax</label>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <Box className="d-flex">
                    <Box>
                        <label htmlFor="" className="add-tax-input-label">Tax Name</label>
                        <input className="add-tax-input" type="text" {...register("name", { required: true })} />
                        {errors.name && <p className='error' style={{ color: 'red', fontSize: 15 }}>Required</p>}
                    </Box>
                    <Box>
                        <label htmlFor="" className="add-tax-input-label">Rate</label>
                        <input className="add-tax-input" type="number" defaultValue={0} {...register("rate", { required: true, min: 1})} />
                        {errors.rate && <p className='error' style={{ color: 'red', fontSize: 15 }}>Required and It must be greater than 0</p>}
                    </Box>
                </Box>
                <br />
                <AddBtn type="submit" />
            </form>

        </div>
    )
}

export default TaxTable