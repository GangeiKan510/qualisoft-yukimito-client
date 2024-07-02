import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { manageAdminDetails } from './options.ts';
import axios from 'axios';

const ManageAdminModal = (props) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4269/api/admin/adminAccountManagement/${props.adminId}`,
        { role: selectedOption },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        alert("Successfully updated admin account!");
        window.location.reload();
      }
    } catch (error) {
      console.error('Error updating role:', error);
    }
    
  };
  
  console.log(selectedOption);
  return (
    <div className="modal fade" id={"adminControlModalTitle" + props.adminId} tabIndex="-1" role="dialog" aria-labelledby={"adminControlModalTitle" + props.adminId} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={"adminControlModalTitle" + props.adminId}>
              Admin Name
            </h5>
          </div>
          <div className="modal-body">
            <div className="modal-body">
              {manageAdminDetails.map((details, index) => {
                return (
                  <React.Fragment key={index}>
                    {details.type === 'text' ? (
                      <TextField
                        className="input-margin non-inline input-styling"
                        name={details.name}
                        placeholder={details.placeholder}
                        type={details.type}
                        id="outlined-basic"
                        label={details.label}
                        variant="outlined"
                        required
                      />
                    ) : (
                        <div className="dropdown">
                          <select
                            className="form-select non-inline input-styling text-muted rounded-3.5 bg-white py-3 border border-custom"
                            id={details.name}
                            name={details.name}
                            value={selectedOption} 
                            onChange={handleSelectChange} 
                            required
                          >
                            <option className="dropdown-item" value="" disabled>Select Type</option>
                            {details.options.map((option, index) => (
                              <option className="dropdown-item" key={index} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                      )}
                  </React.Fragment>
                );
              })}
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
}

export default ManageAdminModal;
