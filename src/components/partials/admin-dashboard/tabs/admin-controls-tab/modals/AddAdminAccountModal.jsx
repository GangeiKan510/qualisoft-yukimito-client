import TextField from '@mui/material/TextField';
import { textFields } from './options.ts';

const details = ["admin", "superadmin" ];

const AddAdminAccountModal = (props) => {

  return (
    <div class="modal fade" id="AddAdminAccountModal" tabindex="-1" role="dialog" aria-labelledby="AddAdminAccountModalTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="AddAdminAccountModalTitle">Create an admin account</h5>
            
          </div>
          <div class="modal-body">
            {textFields.map((textField) => {
              return (
                <TextField
                  required
                  autocomplete="off"
                  autoFocus
                  name={textField.title.toLowerCase()}
                  id="name outline-basic"
                  label={textField.title}
                  type="text"
                  variant="outlined"
                  onChange={props.handleChange}
                  style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem'}} />
              )
            })}
            <select onChange={props.handleChange} className="form-select non-inline input-styling text-muted rounded-3.5 bg-white py-3 border border-custom" id="role" name="role" required>
              <option class="dropdown-item" value="" disabled selected>Select Admin Type</option>
              {details.map((option, index) => (
                <option class="dropdown-item" key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button onClick={props.handleAddAdmin}type="button" class="btn btn-primary yuki-color button-border-color">Add</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AddAdminAccountModal;