import { TextField } from "@mui/material";


const EditVaccineModal = () => {
  const editVaccineDetails = [
    {
      name: 'vaccineName',
      label: "Vaccine Name",
      placeholder: "Vaccine Name",
      type: "text"
    }, 
    {
      name: 'Manufacturer',
      label: "Manufacturer",
      placeholder: "Manufacturer",
      type: "text"
    }
  ];

  return (
    <div class="modal fade" id="editVaccineModal" tabindex="-1" role="dialog" aria-labelledby="editVaccineModalTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editVaccineModalTitle">Edit Vaccine Detail</h5>
            
          </div>
          <div class="modal-body">
          {editVaccineDetails.map((details, index) => {
                          return (
                            <TextField
                              key={index}
                              className="input-margin non-inline input-styling"
                           //   onChange={handleInput}
                              name={details.name}
                              placeholder={details.placeholder}
                              type={details.type}
                              id="outlined-basic"
                              label={details.label}
                              variant="outlined"
                             // onKeyPress={handleKeyPress}
                              required
                            />
                          );
                        })}

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary yuki-color button-border-color">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default EditVaccineModal;