import { Fragment } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
// import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';


export default function EditPetProfileForm(props) {

  return (
    <Fragment>
      <Button 
        className='yuki-font-color2'
        onClick={props.handleEditOpen}
        variant="text"
        type="button" 
        class="btn btn-primary yuki-color button-border-color" 
        data-toggle="modal">
          <EditIcon className='me-1'/>
          Edit Profile
      </Button>
      <Dialog open={props.openEdit} onClose={props.handleEditCancel}>
        <DialogTitle>
          <Typography className='yuki-font-color' variant='h5'>
            Edit your details
          </Typography>
        </DialogTitle>
          <DialogContent style={{ maxWidth: '500px' }}>
            <TextField
              onChange={props.updateFormData}
              value={props.ownerName}
              autocomplete="off"
              autoFocus
              name="ownerName"
              id="name outline-basic"
              label="Full Name"
              type="text"
              error={props.ownerNameError}
              helperText={props.ownerNameError}
              variant="outlined"
              style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem'}}
            />
            <TextField
              onChange={props.updateFormData}
              value={props.username}
              autocomplete="off"
              autoFocus
              name="username"
              id="name outline-basic"
              label="Username"
              type="text"
              variant="outlined"
              error={props.usernameError}
              helperText={props.usernameError}
              style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem'}}
            />
            <TextField
              onChange={props.updateFormData}
              value={props.contactNumber}
              autocomplete="off"
              autoFocus
              name="contactNumber"
              id="name outline-basic"
              label="Contact Number"
              type="text"
              variant="outlined"
              error={props.contactNumberError}
              helperText={props.contactNumberError}
              style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem'}}
            />
            <TextField
              onChange={props.updateFormData}
              value={props.address}
              autocomplete="off"
              autoFocus
              name="address"
              id="name outline-basic"
              label="Address"
              type="text"
              variant="outlined"
              style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem'}}
            />
            <TextField
              onChange={props.updateFormData}
              value={props.email}
              autocomplete="off"
              autoFocus
              name="email"
              id="name outline-basic"
              label="Email"
              type="text"
              variant="outlined"
              error={props.emailError}
              helperText={props.emailError}
              style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem'}}
            />
          </DialogContent>
        <DialogActions>
          <Button className='button-link' onClick={props.handleEditCancel}>Cancel</Button>
          <Button className='button-link' onClick={props.handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}