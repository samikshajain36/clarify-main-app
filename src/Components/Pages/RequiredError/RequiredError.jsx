import * as React from 'react';
import './RequiredError.css'
import Dialog from '@mui/material/Dialog';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import { Stack, Button } from '@mui/material';

export default function AlertDialog({setError}) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className='dialog'>
            <div className="d-flex">
            <div className="warn-icon">
            <WarningAmberRoundedIcon className='error-icon'/>
            </div>
            <h6 className='warn-label'>Insufficient Items</h6>
            </div>
            <p className='warn-content'>Please add at least one item to create an invoice.</p>
            <Button className='warn-btn' onClick={()=>setError(false)}>Okay</Button>
        </div>
      </Dialog>
    </div>
  );
}