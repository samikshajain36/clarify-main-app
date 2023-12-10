import React from 'react';
import CurrencyList from 'currency-list'
import { Link } from 'react-router-dom'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutlineSharp';
import getCurrencySymbol from 'currency-symbols';
import './CountryDropdown.css'
import {useForm} from 'react-hook-form'

export default function CurrencyDropdown({setCountry, total}) {
    const currencyList = [{ currency: null, symbol: null }]
    const currency = CurrencyList.getAll('en_US')
    const [selected, setSelected] = React.useState(currencyList[0].currency);
    const [index, setIndex] = React.useState(0);

    for (let i in currency) {
        const obj = {
            currency: currency[i].code,
            symbol: currency[i].symbol_native
        }
        currencyList.push(obj)
    }

  var { register, handleSubmit, formState: { errors } } = useForm();

  const onSelect = e =>{
        setSelected(e.target.value);
        setCountry(e.target.value);
        setIndex(currencyList.findIndex((val)=>{
            return val.currency === e.target.value
        }))
        console.log()

  }
    return (
        <>
            <div className="d-flex currency-main-container">
                <div className="d-flex currency-dropdown-container">
                    <form className="d-flex currency-select">
                        <label className='country-label' htmlFor="">Currency: &nbsp;</label>
                        <select className='country-input-dropdown' name="" id="" value={selected} {...register("currency", {required: true})} onChange={onSelect}>
                            {
                                currencyList.map(currency => {
                                    return (
                                        <option value={currency.currency}>{currency.currency}</option>
                                    )
                                }
                                )
                            }
                        </select>
                    {errors.currency && <p className='error' style={{ color: 'red', fontSize: 15}}>Field is required</p>}
                    </form>
                    <div>
                        <div className='currency-table-container'>
                            <table className='currency-table'>
                                <tr className='sub-total-amount-item-table-row'>
                                    <th className='sub-total-amount-item-table'>Subtotal: &nbsp;</th>
                                    <td className='country-price d-flex'>{getCurrencySymbol(currencyList[index].currency)} 00.00</td>
                                </tr>
                                <tr>
                                    <th className='total-amount-item-table'>Total: &nbsp;</th>
                                    <td className='country-price d-flex'>{getCurrencySymbol(currencyList[index].currency)} {total}.00</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="country-note">
                    <p><ErrorOutlineIcon className="error-icon" /> &nbsp;If you are going accept payments via PayPal, you may need to convert amount to equivalent USD amount which is accept by PayPal. To know more about PayPal accepted currencies <Link to='https://developer.paypal.com/docs/reports/reference/paypal-supported-currencies/'>Click here</Link></p>
                </div>
            </div>

        </>
    );
}
//         );
//     }
// }