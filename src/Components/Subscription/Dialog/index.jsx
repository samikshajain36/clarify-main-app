import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Typography} from '@mui/material';

export default function AlertDialog({setDialog}) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDialog(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{fontWeight: 'bold'}}>
        Changing Plan
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{color: 'black', fontWeight: 'bold'}}>
          You are opting to change plan from Free of $0 to Basic of $90.
          </DialogContentText>
          <Typography variant="p">You will be redirected to PayPal gateway for further subscription <br /> process. There you can choose to login with PayPal account or create <br /> an account to pay as a guest if supported in your country.</Typography>
        </DialogContent>
        <DialogActions className='d-flex' sx={{justifyContent: 'left'}}>
          <Button variant="contained" onClick={handleClose} sx={{textTransform: 'capitalize', borderRadius: '2rem', backgroundColor: '#0c4d71'}}>proceed</Button>
          <Button variant="outlined" onClick={handleClose} autoFocus sx={{textTransform: 'capitalize', color: 'black', border: '1px solid black', borderRadius: '2rem'}}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
