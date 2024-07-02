import React, { useState } from 'react';
import { Modal, Button, TextField } from '@mui/material';

const EditAddressModal = ({ onClose }) => {
  const [address, setAddress] = useState('');

  const handleSave = () => {
    //add save logic here
    onClose();
  };

  return (
    <Modal open={true} onClose={onClose}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', minWidth: '500px' }}>
        <h2>Edit Address</h2>
        <TextField
          id="addressInput"
          label="Address"
          multiline
          rows={1}
          variant="outlined"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          fullWidth
          style={{ marginBottom: '20px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={onClose} class="btn btn-secondary" style={{ marginRight: '10px' }}>Cancel</Button>
          <Button variant="contained" class="btn btn-primary yuki-color button-border-color"  onClick={handleSave}>Save Changes</Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditAddressModal;
