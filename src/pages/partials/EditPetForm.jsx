import { TextField } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import BasicDatePicker from '../../components/partials/BasicDatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const EditPetForm = (props) => {
  // Initialize petDetails state with default props
  const [petDetails, setPetDetails] = useState({
    name: props.petName,
    breed: props.petBreed,
    size: props.petSize,
    birthday: props.petBirthday
  });

  // Handle input changes and update the petDetails state
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPetDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  // Handle date change specifically for the date picker
  const handleDateChange = (date) => {
    setPetDetails((prevDetails) => ({
      ...prevDetails,
      birthday: date
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_PUBLIC_API_SERVER}/api/pet/updatePet/${props.petId}`,
        petDetails,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        alert("Successfully updated pet details!");
        window.location.reload();
      }
    } catch (error) {
      console.error('Error updating pet details:', error);
    }
  };

  return (
    <div className="modal fade" id={"editPetForm" + props.petId} tabIndex="-1" role="dialog" aria-labelledby={"editPetForm" + props.petId} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={"editPetForm" + props.petId}>
              Edit Pet
            </h5>
          </div>
          <div className="modal-body">
            <div className="modal-body">
              <React.Fragment key={props.petId}>
                <TextField
                  className="input-margin non-inline input-styling"
                  name="name"
                  placeholder="Pet Name"
                  type="text"
                  id="outlined-basic"
                  label="Pet Name"
                  variant="outlined"
                  required
                  onChange={handleChange}
                  value={petDetails.name}
                />
                <TextField
                  className="input-margin non-inline input-styling"
                  name="breed"
                  placeholder="Breed"
                  type="text"
                  id="outlined-basic"
                  label="Breed"
                  variant="outlined"
                  required
                  onChange={handleChange}
                  value={petDetails.breed}
                />
                <FormControl fullWidth style={{ marginBottom: '1.5rem', marginTop: '1.5rem' }}>
                  <InputLabel id="demo-simple-select-label">Size</InputLabel>
                  <Select
                    style={{ borderRadius: '20px' }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Size"
                    name="size"
                    value={petDetails.size}
                    onChange={handleChange}
                  >
                    <MenuItem value={'small'}>Small</MenuItem>
                    <MenuItem value={'medium'}>Medium</MenuItem>
                    <MenuItem value={'large'}>Large</MenuItem>
                  </Select>
                </FormControl>
                <BasicDatePicker
                  defaultDate={petDetails.birthday}
                  onDateChange={handleDateChange}
                />
              </React.Fragment>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-primary yuki-color button-border-color" data-dismiss="modal" onClick={handleSaveChanges}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPetForm;
