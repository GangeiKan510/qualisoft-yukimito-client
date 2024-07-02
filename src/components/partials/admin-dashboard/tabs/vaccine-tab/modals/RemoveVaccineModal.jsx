const RemoveVaccineModal = () => {
  return (
    <div class="modal fade" id="RemoveVaccineModal" tabindex="-1" role="dialog" aria-labelledby="RemoveVaccineModalTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="RemoveVaccineModalTitle">Remove Vaccine</h5>
            
          </div>
          <div class="modal-body">
          <ul class="list-group">
  <li class="list-group-item">
    Cras justo odio
    <button class="close-btn">x</button>
  </li>
  <li class="list-group-item">
    Dapibus ac facilisis in
    <button class="close-btn">x</button>
  </li>
  <li class="list-group-item">
    Morbi leo risus
    <button class="close-btn">x</button>
  </li>
  <li class="list-group-item">
    Porta ac consectetur ac
    <button class="close-btn">x</button>
  </li>
  <li class="list-group-item">
    Vestibulum at eros
    <button class="close-btn">x</button>
  </li>
</ul>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary yuki-color button-border-color">Remove Vaccine</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default RemoveVaccineModal;