import React from "react";
import NavBarMain from "../partials/NavBarMain";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import HailIcon from '@mui/icons-material/Hail';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ServicecCard from "../partials/ServiceCard";

const PetOwnerBooking = () => {
  const navItems = [];
  return (
    <>
      <NavBarMain navItems={navItems} customLink={
        <li class="nav-item active px-3 align-middle yuki-font-color">
          <a class="nav-link text-white" href="/PetOwnerDashboard"><KeyboardReturnIcon className="me-1"/>Back to Profile</a>
        </li>
      } />

      <div class="my-5 container px-5 pt-5">
        <h1 class="display-5 fw-bold text-center">
          We Are Ready To <span className="yuki-font-color">SERVE!</span>
        </h1>

        <hr id="Home Care" className=""/> 

        <div class="row g-4 mt-3">

          <ServicecCard 
            service="Home Care"
            checkIn={
              <span className="text-success">
                <DirectionsWalkIcon />
                Check In: 12 noon - 4:30 PM only &nbsp;
              </span>}
            checkOut={
              <span className="text-danger">
                <HailIcon />Check Out: 11:00 AM
              </span>
            }
            description="Going for a vacation or business trip and worried about your
              pet, Home Care service is your choice. We take every precaution
              to provide a safe and stress-free boarding experience for your
              pet."
            
            price={450}
            duration={1380}
          />

          <ServicecCard 
            service="Day Care"
            checkIn={
                <span span className="text-success">
                  <DirectionsWalkIcon />
                  Operating Time: 7:30 AM - 7:00 PM &nbsp;
                </span>
              }
            description="If youre leaving home for a day under 10 hours, Day Care service is your best option. Bring your furry loved one in the morning and will take care all the needs of your pet."
            rules={
              <div>
                <WarningAmberIcon className="me-1 text-danger"/>
                  5-10 hours ONLY 
                <br />
                <WarningAmberIcon className="me-1 text-danger"/>
                  Strictly no late pick ups - 7 PM last pick up time
                <br />
                <WarningAmberIcon className="me-1 text-danger"/>
                Overnight rate is applied if you pick up later than 7 PM
                <br />
                <WarningAmberIcon className="me-1 text-danger"/>
                A treat is provided, please inform our staff if your pet has any allergies.
              </div>
            }
            price={250}
            duration={600}
          />
          <ServicecCard 
            service="Errands Care"
            checkIn={
                <span span className="text-success">
                  <DirectionsWalkIcon />
                  Operating Time: 7:30 AM - 4:30 PM &nbsp;
                </span>
              }
            description="Going to church, grocery, or an important meeting for a short period of time and you cant attend to your pet needs, Errand service is for you."
            rules={
              <div>
                <WarningAmberIcon className="me-1 text-danger"/>
                    1-4 hours ONLY
                <br />
                <WarningAmberIcon className="me-1 text-danger"/>
                  Strictly no late pick ups - 7 PM last pick up time
                <br />
                <WarningAmberIcon className="me-1 text-danger"/>
                  Overnight rate is applied if you pick up later than 7 PM
                <br />
                <WarningAmberIcon className="me-1 text-danger"/>
                A treat is provided, please inform our staff if your pet has any allergies.
              </div>
            }
            price={180}
            duration={240}
          />
        </div>

      </div>
    </>
  );
};

export default PetOwnerBooking;
