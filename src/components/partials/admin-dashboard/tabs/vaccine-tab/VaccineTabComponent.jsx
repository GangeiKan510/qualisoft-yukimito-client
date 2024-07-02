import AddVaccineModal from "./modals/AddVaccineModal";
import RemoveVaccineModal from "./modals/RemoveVaccineModal";
import EditVaccineModal from "./modals/EditVaccineModal";
import ViewVaccineModal from "./modals/ViewVaccineModal";

const VaccineTabComponent = () => {
  return (
    <div class="tab-pane fade" id="vaccine" role="tabpanel" aria-labelledby="vaccine-tab">
      <div class="container py-3">
        <div class="row">
          <div >
            <div class="col align-middle">
              <div class="input-group mb-3">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <span class="input-group-text border-0 bg-transparent" id="search-addon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </span>
                <div class="d-flex justify-content-end">
                  <button class="btn btn-primary yuki-color button-border-color mx-2" data-toggle="modal" data-target="#AddVaccineModal">
                    Add Vaccine
                  </button>
                  <button class="btn btn-danger mx-2" data-toggle="modal" data-target="#RemoveVaccineModal">
                    Remove Vaccine
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border">
          <div class="card-body">
            <div class="card shadow">
              <div class="card-header">
                <b>Vaccine ID </b>
              </div>
              <div class="card-body">
                <h5 class="card-title">Vaccine Name</h5>
                <p class="card-text text-secondary">Manufacturer:</p>
                <div class="d-flex justify-content-end">
                        <button class="btn btn-outline-secondary" data-toggle="modal" data-target="#editVaccineModal">
                          Edit Vaccine Details
                        </button>
                        <button class="btn btn-outline-secondary mx-2" data-toggle="modal" data-target="#viewVaccineModal">
                          View Vaccine Details
                        </button>
                      </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Add Vaccine Modal --> */}
      <AddVaccineModal />

      {/* <!-- Remove Vaccine Modal --> */}
      <RemoveVaccineModal />

      {/* <!-- Edit Vaccine Details Modal --> */}
      <EditVaccineModal />

      {/* <!-- View Vaccine Details Modal --> */}
      <ViewVaccineModal />

    </div>
  )
};

export default VaccineTabComponent;