import moment from "moment";
import axios from "axios";
import { React, useEffect, useState } from "react";
import NavBarMain from "../../pages/partials/NavBarMain";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import BookingConfirmationInfoCard from '../partials/BookingConfirmationInfoCard';
import { Paper } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField, Autocomplete, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import SelectServiceInput from "../partials/SelectServiceInput";
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';
import Spinner from "../../components/Spinner";

import calculatePaymentBreakdown from "./controllers/CalculatePaymentBreakdown";
import { homeCare, dayCare, errandsCare } from './data/ServiceDetails';

const PetOwnerBookingHomeCare = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  let userSelected = jwtDecode(token);

  const [pets, setPets] = useState([]);
  const [specificInstructions, setSpecificInstructions] = useState(""); 
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    service: "",
    checkIn: "",  
    checkOut: "",
    petList: [],
    petOwnerId: userSelected.id
  });

  const [calculated, setCalculated] = useState(false);
  const [petsIncluded, setPetsIncluded] = useState([]);
  const [serviceDetails, setServiceDetails] = useState(homeCare);
  const [paymentBreakdown, setPaymentBreakdown] = useState([]); 
  const [totalPayment, setTotalPayment] = useState(0);

  const petList = pets.map((pet) => pet.name);

  const handleCheckInInput = (event) => {
    let newCheckIn = event.$d;
    let currentDate = new Date();
    let oneMonthLater = new Date();
    oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);

    if (newCheckIn < currentDate || newCheckIn > oneMonthLater) {
      setErrors((prev) => ({ ...prev, checkIn: 'Check-in date must be within the next month.' }));
    } else {
      setErrors((prev) => ({ ...prev, checkIn: '' }));
    }

    if (bookingDetails.service) {
      let service = bookingDetails.service;

      if (service === "Home Care") {
        setBookingDetails({
          ...bookingDetails,
          checkIn: newCheckIn,
          checkOut: moment(newCheckIn).add(24, 'h').toDate()
        });
      } else if (service === "Day Care") {
        setBookingDetails({
          ...bookingDetails,
          checkIn: newCheckIn,
          checkOut: moment(newCheckIn).add(10, 'h').toDate()
        });
      } else {
        setBookingDetails({
          ...bookingDetails,
          checkIn: newCheckIn,
          checkOut: moment(newCheckIn).add(4, 'h').toDate()
        });
      }
    } else {
      setErrors((prev) => ({ ...prev, service: 'Please select a service first!' }));
    }
  }

  const handleServiceSelection = (event) => {
    let service = event.target.innerText;

    if (service === "Home Care") {
      setServiceDetails(homeCare);
    } else if (service === "Day Care") {
      setServiceDetails(dayCare);
    } else {
      setServiceDetails(errandsCare);
    }

    setBookingDetails({
      ...bookingDetails,
      service: event.target.innerText,
    });

    setErrors((prev) => ({ ...prev, service: '' }));
  }

  const handlePetSelection = (event, index) => {
    const selectedPetName = event.target.innerText;
    const selectedPet = pets.find((pet) => pet.name === selectedPetName);
  
    if (selectedPet && !bookingDetails.petList.includes(selectedPet.id)) {
      const updatedPetList = [...bookingDetails.petList, selectedPet.id];
      setBookingDetails((prevState) => ({
        ...prevState,
        petList: updatedPetList,
      }));

      setPetsIncluded((prevState) => ([
        ...prevState, selectedPet
      ]));

      setErrors((prev) => ({ ...prev, petList: '' }));
    }
  }

  const handlePaymentBreakdown = () => {
    const selectedService = bookingDetails.service;

    if (selectedService && paymentBreakdown && !calculated) {
      const finalPaymentBreakdown = calculatePaymentBreakdown(petsIncluded, selectedService);
      setPaymentBreakdown(finalPaymentBreakdown);

      setTotalPayment(
        finalPaymentBreakdown
        .map((pet) => { return pet.rate })
        .reduce((total, rate) => total + rate, totalPayment)
      );

      setCalculated(true);
    }
  }

  const handleBookingAppointmentConfirmation = async () => {
    if (!specificInstructions) {
      alert("Please provide specific instructions!");
      return;
    }

    setIsLoading(true);

    const bookingDetailsWithInstructions = {
      ...bookingDetails,
      specificInstructions: specificInstructions
    };

    try {
      let response;

      if (bookingDetails.service === "Home Care") {
        response = await axios.post(`${process.env.REACT_APP_PUBLIC_API_SERVER}/api/createHomeCareBooking`, bookingDetailsWithInstructions);
      } else if (bookingDetails.service === "Day Care") {
        response = await axios.post(`${process.env.REACT_APP_PUBLIC_API_SERVER}/api/createDayCareBooking`, bookingDetailsWithInstructions);
      } else if (bookingDetails.service === "Errands Care") {
        response = await axios.post(`${process.env.REACT_APP_PUBLIC_API_SERVER}/api/createErrandsCareBooking`, bookingDetailsWithInstructions, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }

      if (response && response.status === 200) {
        navigate('/');
        window.location.reload();
      }
    } catch (error) {
      console.error(error.message);
      alert(`${bookingDetails.service} Booking failed!`);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    fetch(`${process.env.REACT_APP_PUBLIC_API_SERVER}/api/getPets/pet/${userSelected.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((fetchedPets) => setPets(fetchedPets))
      .catch((error) => console.log(error));
  }, [navigate, token, userSelected.id]);

  return (
    <>
      <NavBarMain
        navItems={[]}
        customLink={
          <li class="nav-item active px-3 align-middle yuki-font-color">
            <a class="nav-link text-white" href="/">
              <KeyboardReturnIcon className="me-1" />
              Back to Services
            </a>
          </li>
        }
      />

      <div class="my-5 pt-5 container px-5">
        <h1 class="display-5 fw-bold">
          Booking <span className="yuki-font-color">Confirmation</span>
        </h1>
        <hr />
        <div class="row align-items-center justify-content-center">
         
        <div class="col-lg-12">
            <div class="card">
              <Paper elevation={3} style={{ padding: "50px" }}>
                <div className="row">
                  <div className="col"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <div className="flex-container" style={{ flex: 1 }}>
                      <form action="/action_page.php" className="form-container center">
                        <p class="lead mb-4">
                          Please provide us the date for your Check-in.
                        </p>
                        <SelectServiceInput onClick={handleServiceSelection} />
                        {errors.service && <Typography color="error">{errors.service}</Typography>}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DateTimePicker
                            label="Check In"
                            name="startDateTime"
                            className="input-margin non-inline input-styling"
                            onChange={handleCheckInInput}
                          />
                        </LocalizationProvider>
                        {errors.checkIn && <Typography color="error">{errors.checkIn}</Typography>}
                        <Stack spacing={2} className="mb-2">
                          {bookingDetails.checkOut && (
                            <Alert severity="warning">
                              <AlertTitle>
                                <h5><b>Expected Check Out Time:</b></h5>
                              </AlertTitle>
                              {bookingDetails.checkOut.toString()}
                            </Alert>
                          )}
                        </Stack>
                      </form>
                      <Autocomplete
                        sx={{
                          width: "100%",
                        }}
                        multiple
                        options={petList}
                        onChange={handlePetSelection}
                        getOptionLabel={(option) => option}
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            label="Select Pets"
                            placeholder="Select Pets"
                          />
                        )}
                      />
                      {errors.petList && <Typography color="error">{errors.petList}</Typography>}
                      <TextField
                        autoComplete="off"
                        autoFocus
                        name="specificInstructions"
                        id="specificInstructions"
                        label="Specific Instructions"
                        type="text"
                        variant="outlined"
                        value={specificInstructions}
                        onChange={(e) => setSpecificInstructions(e.target.value)}
                        style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem' }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <BookingConfirmationInfoCard 
                      service={serviceDetails.title + " (" + serviceDetails.duration + " Hours)"}
                      checkIn={
                        <span className="text-success">
                          {serviceDetails.checkInTime}
                        </span>}
                      checkOut={
                        <span className="text-danger">
                          {serviceDetails.checkOutTime}
                        </span>
                      }
                      operatingTime={
                        <span className="text-danger">
                          {serviceDetails.operatingTime}
                        </span>
                      }
                      description={serviceDetails.description}
                      price={serviceDetails.price}
                      duration={serviceDetails.duration}
                      onClick={handlePaymentBreakdown}
                      disabled={!bookingDetails.service || !bookingDetails.checkIn || !bookingDetails.petList.length}
                    />
                  </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thank you for availing our {bookingDetails.service} service!</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <p>Please review the details of your reservation and kindly wait for our staff to review and confirm your reservation.</p>
                        <hr />
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                              <th scope="col">Size</th>
                              <th scope="col">Rate</th>
                            </tr>
                          </thead>
                          <tbody>
                            {paymentBreakdown.map((pet, index) => {
                              return (
                                <tr key={index}>
                                  <th scope="row">{index}</th>
                                  <td>{pet.petName}</td>
                                  <td>{pet.size}</td>
                                  <td>{pet.rate}</td>
                                </tr>
                              )
                            })}
                            <tr>
                              <th scope="row"></th>
                              <td></td>
                              <td>Total Payment:</td>
                              <td>{totalPayment}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn button-color text-white" onClick={handleBookingAppointmentConfirmation} disabled={isLoading}>
                          {isLoading ? <Spinner /> : 'Confirm Booking'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetOwnerBookingHomeCare;