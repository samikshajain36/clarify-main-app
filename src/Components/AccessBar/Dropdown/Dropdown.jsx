import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom'
import './Dropdown.css'
function BasicExample() {
    return (
        <Dropdown>
            <div className="dropdown-container">
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-btn">
                    Create New +
                </Dropdown.Toggle>
                <div className="dropdown-text">Create New +</div>
            </div>
            {/* <div className="dropdown-menu"> */}
                <Dropdown.Menu>
                    <Dropdown.Item href=""><Link to="/pages/myInvoice" className='dropdown-item'>Invoice</Link></Dropdown.Item>
                    <Dropdown.Item href=""><Link to="/pages/myBill" className='dropdown-item'>Bill</Link></Dropdown.Item>
                    <Dropdown.Item href=""><Link to="/pages/myQoute" className='dropdown-item'>Qoute</Link></Dropdown.Item>
                    <Dropdown.Item href=""><Link to="/pages/myPurchaseOrder" className='dropdown-item'>Purchase Order</Link></Dropdown.Item>
                </Dropdown.Menu>
            {/* </div> */}
        </Dropdown>
    );
}

export default BasicExample;