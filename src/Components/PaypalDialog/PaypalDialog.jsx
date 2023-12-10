import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Link} from 'react-router-dom'
import './PaypalDialog.css'

export default function MaxWidthDialog({dialog, setDialog}) {
  const [open, setOpen] = React.useState(dialog);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDialog(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        minHeight='50%'
        open={open}
        onClose={handleClose}
        sx={{zIndex: 9999999, overflowY: 'hidden'}}
      >
        <DialogTitle className='paypal-dialog-title-text'>Paypal setup instructions</DialogTitle>
        <DialogContent>
          <DialogContentText className='paypal-dialog-caption-text'>
          Follow to these step to get the necessary data to fill the form and integrate to our servers.
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
              height: '67.3vh',
              overflow: 'hidden'
            }}
            className="dialog"
          >
            <ul>
              <li>Login to paypal dev dashboard using paypal business account email. Link - <Link>https://developer.paypal.com/home/</Link></li>
              <li>Go to Dashboard using top right corner menu option.</li>
              <li>You will be redirected to My apps and credentials page.</li>
              <li>Switch from sandbox to live (Live Button will turn blue).</li>
              <li>Scroll down and look for list of applications and click on the first one if you have multiple.</li>
              <li>You will be redirected to app details page, displaying App's Email, Client ID and Secret.</li>
              <li>Copy and paste these details in the "PayPal Payment Settings Form".</li>
              <li>Save these details.</li>
              <li>Go back to Paypal and same App details page (From where you just copied details)</li>
              <li>Scroll down a bit more and look for "Webhooks" and then "Add Webhook" button.</li>
              <li>Click on that button, it will open a form asking a URL and some checkboxes under Event Types label.</li>
              <li>Paste this URL in the URL field - https://api.fatoura.work/paypal/paypalWebhook.</li>
              <li>Look for "Invoicing invoice paid" checkbox in the "Event Types" list and mark it as checked.</li>
              <li>Save these and you are good to go.</li>
            </ul>
          </Box>
        </DialogContent>
        <DialogActions className='d-flex paypal-dialog-close-btn-container'>
          <Button className='paypal-dialog-close-btn' onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
