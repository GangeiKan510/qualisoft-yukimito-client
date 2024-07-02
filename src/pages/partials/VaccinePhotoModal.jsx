const VaccinePhotoModal = (props) => {
  return (
    <div
      class="modal fade"
      id={"PetVaccineModal" + props.petId}
      tabindex="-1"
      role="dialog"
      aria-labelledby="PetVaccineModal"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="PetVaccineModal">
              {props.petName}'s Vaccine Photo ({props.vaccinated ? 'Approved': 'Pending'})
            </h5>
          </div>
          <div class="modal-body">
            <img src={props.petVaccinePhoto} class="img-fluid" alt={`alt-${props.petName}`}/>
          </div>
          <div class="modal-footer">
            <a type="button" class="btn btn-primary button-color" data-dismiss="modal" href="/">
              Done
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccinePhotoModal;