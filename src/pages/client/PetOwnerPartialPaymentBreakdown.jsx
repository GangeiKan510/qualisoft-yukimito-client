import NavBarMain from "../partials/NavBarMain";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function PetOwnerPartialPaymentBreakdown( ) {
  
  const navItems = [];

  return (
    <>
      <NavBarMain navItems={navItems}/>
      <div className="mt-5 pt-3 px-5 yuki-color2 text-center">
        We value your trust here are YUKIMITO!
      </div>
      <div className="container">
        <div className="row">
          <h5 className="py-3 px-5">
            <b>Estimated Payment Breakdown</b>
          </h5>
          <div className="container px-5" >
            <div className="card my-2 shadow">
              <div className="card-header">
                Here are the services that we offer:
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <CheckCircleOutlineIcon className="me-1 text-success" />
                  Home Care (24 Hours) starting at ₱450.00
                </li>
                <li class="list-group-item">
                  <CheckCircleOutlineIcon className="me-1 text-success" />
                  Day Care (10 Hours) starting at ₱250.00
                </li>
                <li class="list-group-item">
                  <CheckCircleOutlineIcon className="me-1 text-success" />
                  Errands Care (4 Hours) starting at ₱180.00
                </li>
              </ul>
              <div className="card-footer">
                <a href="/PetOwnerDashboard" class="btn btn-primary button-color" type="button">Confirm</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};