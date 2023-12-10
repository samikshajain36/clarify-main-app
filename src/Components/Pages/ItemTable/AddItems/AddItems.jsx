import './AddItems.css'
import * as React from 'react';
import { Box } from '@mui/system';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useForm} from 'react-hook-form'

function MyVerticallyCenteredModal(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    props.add.push(data);
    props.setModalShow(false)
  }
  return (
    <Modal className='modal-dialog-box' {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <label className="add-item-form-label">Add New Item</label>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <Box className='d-flex'>
          <Box className="single-input-field d-flex">
            <label htmlFor="">Item Name</label>
            <input type="text" minWidth="398px:" {...register("itemName", {required: true})}/>
            {errors.itemName && <p className='error' style={{ color: 'red', fontSize: '30px !important', opacity: '.6', marginLeft: 20}}>Required</p>}
          </Box>
          <Box className="single-input-field d-flex">
            <label htmlFor="">SKU</label>
            <input type="number" {...register("sku")}/>
          </Box>
          <Box className="single-input-field d-flex">
            <label htmlFor="">Quantity</label>
            <input type="number" defaultValue={0} {...register("quantity", {required: true, min: 1})}/>
            {errors.quantity && <p className='error' style={{ color: 'red', fontSize: '30px !important', opacity: '.6', marginLeft: 20}}>Min is 1</p>}
          </Box>
          <Box className="single-input-field d-flex">
            <label htmlFor="">Unit Price</label>
            <input type="number" defaultValue={0} {...register("unitPrice")}/>
          </Box>
          </Box>
          <Box className='add-item-submit-btn-container'>
            <Button type="submit" className="add-item-btn" variant="primary" onClick={() => {}}>
              Add
            </Button>
            <Button className="add-item-btn" variant="primary" onClick={() => props.setModalShow(false)}>
              Cancel
            </Button>
          </Box>
      </form>
    </Modal>
  );
}

export default function App(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className='add-item-btn-container'>
        <Button className="item-btn" variant="primary" onClick={() => setModalShow(true)}>
          + Add more items
        </Button>
        <Button className="item-btn" variant="primary">
          Save item list
        </Button>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow = {setModalShow}
        add = {props.rows}
      />
    </>
  );
}