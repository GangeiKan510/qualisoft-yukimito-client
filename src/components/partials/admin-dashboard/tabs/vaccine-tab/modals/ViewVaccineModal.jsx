const ViewVaccineModal = () => {
  return (
    <div
      class="modal fade"
      id="viewVaccineModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="viewVaccineModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="viewVaccineModalTitle">
              Vaccine Detail
            </h5>
          </div>
          <div class="modal-body">
       
    <div class="table-responsive">
      <table class="table text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Manufacturer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>name of vaccine</td>
            <td>101</td>
            <td>vaccine manufacturer</td>
          </tr>
        </tbody>
      </table>
  </div>
            
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            {/* <button type="button" class="btn btn-primary yuki-color button-border-color">Save changes</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewVaccineModal;
