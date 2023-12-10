import './NoTaxButton.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TaxTable from '../TaxTable/TaxTable'
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
    const [open, setOpen] = React.useState(false);
    const [tax, setTax] = React.useState([])
    const [selectedTax, setSelectedTax] = React.useState({rate: "No Tax"})
    const [change, setChange] = React.useState(false)
    
    const handleClickOpen = () => {
        setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="tax-btn-container d-flex">
      <Button className="tax-btn" variant="outlined" onClick={handleClickOpen}>
       {selectedTax.rate}
      </Button>
      {change && <button className='cancel-tax' onClick={() => {setSelectedTax({rate: "No Tax"}); setChange(false)}}>x</button> }
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
       <TaxTable content={tax} setSelectedTax={setSelectedTax} setOpen={setOpen} setChange={setChange}/>
      </Dialog>
    </div>
  );
}
