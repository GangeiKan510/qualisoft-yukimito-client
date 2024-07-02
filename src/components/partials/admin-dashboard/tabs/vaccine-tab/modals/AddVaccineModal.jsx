import TextField from '@mui/material/TextField';

const textFields = [
  {
    title: "Vaccine Name",
  },
  {
    title: "Description",
  },
  {
    title: "Expiry Date",
  },
];

const AddVaccineModal = (props) => {
  return (
    <div class="modal fade" id="AddVaccineModal" tabindex="-1" role="dialog" aria-labelledby="AddVaccineModalTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="AddVaccineModalTitle">Add Vaccine</h5>
            
          </div>
          <div class="modal-body">
            {textFields.map((textField) => {
              return (
                <TextField
                  required
                  autocomplete="off"
                  autoFocus
                  name={textField.title}
                  id="name outline-basic"
                  label={textField.title}
                  type="text"
                  variant="outlined"
                  onChange={props.handleChange}
                  style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem'}} />
              )
            })}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary yuki-color button-border-color">Add Vaccine</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AddVaccineModal;