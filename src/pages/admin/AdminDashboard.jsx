import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBarMain from "../partials/NavBarMain";
import AdminBookingCard from "../partials/AdminBookingCard";
import { Box } from "@mui/material";
import axios from "axios";
import adminDashboardTabs from "../../components/partials/admin-dashboard/adminDashboardTabs";
import PendingVaccinesTab from "../../components/partials/admin-dashboard/tabs/pending-vaccines-tab/PendingVaccinesTab";
import VaccineTabComponent from "../../components/partials/admin-dashboard/tabs/vaccine-tab/VaccineTabComponent";
import AdminControlsTabComponent from "../../components/partials/admin-dashboard/tabs/admin-controls-tab/AdminControlsTabComponent";
import InventoryTabComponent from "../../components/partials/admin-dashboard/tabs/inventory-management-tab/InventoryTabComponent";
import Logout from "../partials/Logout";

const AdminDashBoard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [reason, setReason] = useState("");
  const [bookings, setBookings] = useState([]);
  const [pets, setPets] = useState([]);
  const [petOwners, setPetOwners] = useState([]);

  function handleSubmit() {
    window.location.href = "/AdminLogin";
    localStorage.removeItem("token");
  };

  function handleRejectionReason(event) {
    let input = event.target.value;
    setReason(input);
    console.log(reason);
  };

  async function handleBookingRejection(bookingId) {
    try {
      await axios.put(
        `${process.env.REACT_APP_PUBLIC_API_SERVER}/api/admin/booking/reject/${bookingId}`,
        { reasonForRejecting: reason },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Successfully rejected booking!");
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  async function handleBookingAcceptance(bookingId) {
    console.log(bookingId);

    try {
      await axios.put(
        `${process.env.REACT_APP_PUBLIC_API_SERVER}/api/admin/booking/accept/${bookingId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Successfully accepted booking!");
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  // Define the handler function to accept a pending vaccine
  async function handleAcceptVaccine(petId) {
    try {
      await axios.put(
        `${process.env.REACT_APP_PUBLIC_API_SERVER}/api/pet/approveVaccinationRecord/${petId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Successfully accepted vaccine!");
      // Refresh the page or update the pets data
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    if (!token) {
      navigate("/AdminLogin");
    }

    fetch(`${process.env.REACT_APP_PUBLIC_API_SERVER}/api/getAllBookings`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((fetchedBookings) => setBookings(fetchedBookings))
      .catch((error) => console.log(error));

    fetch(`${process.env.REACT_APP_PUBLIC_API_SERVER}/api/getAllPets`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((fetchedPets) => setPets(fetchedPets))
      .catch((error) => console.log(error));

    fetch(`${process.env.REACT_APP_PUBLIC_API_SERVER}/api/auth/getAllPetOwners`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((fetchedPetOwners) => setPetOwners(fetchedPetOwners))
    .catch((error) => console.log(error));
  }, [navigate, token]);

  const navItems = [
    <a href="/AdminDashBoard" style={{ textDecoration: "none", color: "white" }}>
      Dashboard
    </a>,
    <a href="/AdminMainNav" style={{ textDecoration: "none", color: "white" }}>
    Home
    </a>,
  ];

  return (
    <>
      <NavBarMain navItems={navItems} customLink={<Logout link="/AdminLogin"/>}/>

      <div className="mt-5 pt-3 px-5 yuki-color2 text-center">
        Welcome back, Admin!
      </div>

      <div className="container px-5">
        <Box sx={{ flexGrow: 1, margin: 5 }}>
          <div className="border rounded-3">
            <ul
              class="nav nav-tabs justify-content-center"
              id="myTab"
              role="tablist"
            >
              {adminDashboardTabs.map((tab, index) => {
                return (
                  <li class="nav-item admin-nav" role="presentation">
                    <button
                      class={"nav-link " + (index === 0 ? "active" : "")}
                      id={tab.id}
                      data-bs-toggle="tab"
                      data-bs-target={tab.dataBsTarget}
                      type="button"
                      role="tab"
                      aria-controls={tab.ariaControls}
                      aria-selected={tab.ariaSelected}
                    >
                      {tab.title}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="booking"
                role="tabpanel"
                aria-labelledby="booking-tab"
              >
                {bookings.filter((booking) => booking.status === "pending").map((booking) => {
                  return (
                    <>
                      <AdminBookingCard
                        bookings={bookings}
                        handleRejectionReason={handleRejectionReason}
                        handleBookingRejection={handleBookingRejection}
                        handleSubmit={handleSubmit}
                        handleBookingAcceptance={handleBookingAcceptance}
                        bookingId={booking.id}
                        petOwnerId={booking.petOwnerId}
                        service={booking.service_type}
                        checkIn={booking.checkIn}
                        checkOut={booking.checkOut}
                        petOwners={petOwners}
                        specificInstructions={booking.specific_instructions}
                      />
                    </>
                  );
                })}
              </div>

              <PendingVaccinesTab 
                pets={pets}
                petOwners={petOwners}
                handleAcceptVaccine={handleAcceptVaccine}
              />

              <VaccineTabComponent />

              <InventoryTabComponent />
              <AdminControlsTabComponent />
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default AdminDashBoard;
