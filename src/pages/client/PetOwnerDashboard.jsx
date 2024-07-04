import Footer from "../partials/Footer";
import Box from "@mui/material/Box";
import AddPetForm from "../../components/partials/AddPetForm";
import EditPetProfileForm from "../../components/partials/EditPetProfileForm";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import NavBarMain from "../partials/NavBarMain";
import Logout from "../partials/Logout";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import coverImage from "../../assets/images/cover.svg";
import boneImage from "../../assets/images/bone.svg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { DeleteBooking } from "../../components/partials/DeleteBooking";
import EditPetForm from "../partials/EditPetForm";
import VaccinePhotoModal from "../partials/VaccinePhotoModal";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

export default function PetOwnerDashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  let userSelected = jwtDecode(token);

  const [petOwnerDetails, setPetOwnerDetails] = useState({
    ownerName: String,
    username: String,
    address: String,
    contactNumber: Number,
    email: String,
    profilePhoto: String,
  });

  const [pets, setPets] = useState([]);
  const [profilePicture, setProfilePicture] = useState(
    petOwnerDetails.profilePhoto
  );

  const [pet, setPet] = useState({
    name: String,
    breed: String,
    birthday: String,
    size: String,
    petOwnerId: userSelected.id,
    filename: String,
  });

  const [bookings, setBookings] = useState([]);
  const [userData, setUserData] = useState({});
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [ownerNameError, setOwnerNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [contactNumberError, setContactNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [uploadedPetVaccine, setUploadedPetVaccine] = useState(false);

  const handleChange = (event) => {
    setPet({
      ...pet,
      [event.target.name]: event.target.value,
    });
  };

  const handleDateChange = (date) => {
    setPet({ ...pet, birthday: date.format("MM-DD-YYYY") });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleUpload = (event) => {
    setPet({
      ...pet,
      [event.target.name]: event.target.files[0],
    });
    setUploadedPetVaccine(true);
  };

  const handleUploadPetAvatar = async (event, petId) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("_method", "PUT");
    formData.append("petProfilePhoto", file);

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_PUBLIC_API_SERVER}/api/pet/uploadPetProfile/${petId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("Pet avatar uploaded successfully!");
        window.location.reload();
      } else {
        console.log("Failed to upload pet avatar!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUploadProfilePhoto = async (event) => {
    const file = event.target.files[0];

    setProfilePicture(file);

    const ownerId = userSelected.id;

    const formData = new FormData();

    formData.append("_method", "PUT");
    formData.append("filename", file);

    await axios
      .put(
        `${process.env.REACT_APP_PUBLIC_API_SERVER}/api/auth/uploadProfilePicture/${ownerId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    window.location.reload();
  };

  const handleUpdateUser = (updatedUser) => {
    setPetOwnerDetails(updatedUser);
  };

  const updateFormData = (event) => {
    const regex = /^[0-9\b]+$/;
    setPetOwnerDetails({
      ...petOwnerDetails,
      [event.target.name]: event.target.value,
    });

    if (petOwnerDetails.ownerName && petOwnerDetails.ownerName.length <= 5) {
      setOwnerNameError("Name must be at least 5 characters long");
    } else {
      setOwnerNameError("");
    }

    if (petOwnerDetails.username && petOwnerDetails.username.length <= 5) {
      setUsernameError("Username must be at least 5 characters long");
    } else {
      setUsernameError("");
    }

    if (
      petOwnerDetails.contactNumber &&
      regex.test(petOwnerDetails.contactNumber) &&
      petOwnerDetails.contactNumber.length >= 11 - 1
    ) {
      setContactNumberError(``);
    } else {
      setContactNumberError("Invalid Contact Number");
    }

    if (petOwnerDetails.email && petOwnerDetails.email.length < 5) {
      setEmailError("Invalid Email Address");
    } else {
      setEmailError("");
    }
  };

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditCancel = () => {
    setOpenEdit(false);
  };

  async function handleAdd() {
    const token = localStorage.getItem("token");

    let formData = new FormData();

    for (let detail in pet) {
      if (detail === "vaccinePhoto") {
        formData.append("filename", pet[detail]);
      } else {
        formData.append(detail, pet[detail]);
      }
    }

    formData.append("_method", "POST");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_PUBLIC_API_SERVER}/api/addPet/pet`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setOpen(false);
        window.location.reload();
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleUpdate = async () => {
    const ownerId = userSelected.id;

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_PUBLIC_API_SERVER}/api/auth/editProfile/petowner/${ownerId}`,
        petOwnerDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setUserData(petOwnerDetails);
        console.log("Successfully updated!");
        window.location.reload();
      } else {
        console.log("Update failed!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeletePet = async (petId) => {
    const ownerId = userSelected.id;

    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_PUBLIC_API_SERVER}/api/deletePet/${ownerId}/${petId}`,
        petOwnerDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Successfully deleted a pet!");
        window.location.reload();
      } else {
        console.log("Deletion failed!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }

    fetch(
      `${process.env.REACT_APP_PUBLIC_API_SERVER}/api/getBooking/${userSelected.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((fetchedBookings) => setBookings(fetchedBookings))
      .catch((error) => console.log(error));

    fetch(
      `${process.env.REACT_APP_PUBLIC_API_SERVER}/api/getPets/pet/${userSelected.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((fetchedPets) => setPets(fetchedPets))
      .catch((error) => console.log(error));

    axios
      .get(
        `${process.env.REACT_APP_PUBLIC_API_SERVER}/api/auth/getPetOwner/${userSelected.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const userDetails = response.data;

        setPetOwnerDetails({
          ownerName: userDetails.name,
          username: userDetails.username,
          address: userDetails.address,
          contactNumber: userDetails.contact_number,
          email: userDetails.email_address,
          profilePhoto: userDetails.profilePhoto,
        });

        setUserData({
          ownerName: userDetails.name,
          username: userDetails.username,
          address: userDetails.address,
          contactNumber: userDetails.contact_number,
          email: userDetails.email_address,
          profilePhoto: userDetails.profilePhoto,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigate, userSelected.id]);

  const navItems = [];

  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const specificBookingId = selectedBookingId;

  return (
    <>
      <NavBarMain navItems={navItems} customLink={<Logout link="/" />} />
      <div className="mt-5 pt-3 px-5 yuki-color2 text-center">
        Welcome back to Yukimito Services!
      </div>

      <div className="container px-5">
        <Box sx={{ flexGrow: 1 }}>
          <div style={{ position: "relative" }}>
            <img
              className="rounded-bottom"
              src={coverImage}
              alt="Cover_Photo"
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />

            <div className="mt-1" style={{ maxHeight: "50px" }}>
              <div className="col mt-1" style={{ position: "relative" }}>
                <label htmlFor="profile-picture-upload">
                  <div
                    style={{
                      width: 150,
                      height: 150,
                      borderRadius: "50%",
                      border: "5px solid white",
                      overflow: "hidden",
                      position: "relative",
                      transform: "translate(10%, -80%)",
                      cursor: "pointer",
                      zIndex: 2,
                    }}
                  >
                    <img
                      src={profilePicture || petOwnerDetails.profilePhoto}
                      alt="Profile Picture"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <IconButton
                      color="primary"
                      component="span"
                      style={{
                        opacity: 0.5,
                        position: "absolute",
                        bottom: 10,
                        right: 10,
                        backgroundColor: "white",
                        borderRadius: "50%",
                        zIndex: 3,
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  </div>
                </label>
                <input
                  id="profile-picture-upload"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleUploadProfilePhoto}
                />
              </div>
            </div>
            <div className="col align-middle">
              <div className="d-flex justify-content-between align-content-center">
                <div className="col">
                  <h1>{userData.ownerName}</h1>
                </div>
              </div>
            </div>
            <div className="col">
              <h5 className="text-secondary">@{userData.username}</h5>
            </div>

            <hr />

            <div className="d-flex justify-content-center mx-auto">
              <div
                style={{
                  backgroundImage: `url(${boneImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "150px",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/PetOwnerBookingConfirmation")}
              >
                <span className="text-white">Book Now!</span>
              </div>
            </div>

            <div className="py-3">
              <div className="card shadow">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <b>Pet Owner Details</b>
                  <EditPetProfileForm
                    ownerName={petOwnerDetails.ownerName}
                    username={petOwnerDetails.username}
                    contactNumber={petOwnerDetails.contactNumber}
                    address={petOwnerDetails.address}
                    email={petOwnerDetails.email}
                    openEdit={openEdit}
                    handleUpdateUser={handleUpdateUser}
                    handleUpdate={handleUpdate}
                    updateFormData={updateFormData}
                    handleEditOpen={handleEditOpen}
                    handleEditCancel={handleEditCancel}
                    ownerNameError={ownerNameError}
                    usernameError={usernameError}
                    contactNumberError={contactNumberError}
                    emailError={emailError}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Address: {userData.address ? userData.address : "No address"}
                  </h5>
                  <p className="card-text text-secondary">
                    Contact Number: {userData.contactNumber}
                    <br />
                    Email: {userData.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div>
                <h5 className="py-3">
                  <b>
                    Bookings <ArrowOutwardIcon />
                  </b>
                  <span className="text-secondary">
                    {" "}
                    Click card to expand details.
                  </span>
                </h5>

                <div
                  className="card my-2 shadow overflow-auto p-3 mb-3 mb-md-0"
                  style={{ maxWidth: "100%", maxHeight: "500px" }}
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  <div
                    className="modal fade"
                    id="exampleModalCenter"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header"></div>
                        <div className="modal-body">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item text-secondary">
                              {bookings
                                .filter(
                                  (booking) => booking.id === specificBookingId
                                )
                                .sort(
                                  (a, b) =>
                                    new Date(b.createdAt) -
                                    new Date(a.createdAt)
                                )
                                .map((booking) => {
                                  return (
                                    <div key={booking.id}>
                                      <p>
                                        <h4
                                          className="font-weight-bold text-black"
                                          id="exampleModalLongTitle"
                                          style={{ marginBottom: "-15px" }}
                                        >
                                          {booking.service_type === "dayCare" && (
                                            <span>Day Care</span>
                                          )}
                                          {booking.service_type ===
                                            "errandsCare" && (
                                            <span>Errands Care</span>
                                          )}
                                          {booking.service_type === "homeCare" && (
                                            <span>Home Care</span>
                                          )}
                                          &nbsp;Booking Details
                                        </h4>
                                        <br style={{ marginTop: "0px" }} />
                                        Checkin Time:{" "}
                                        {new Date(booking.checkIn).toDateString()}
                                        <br />
                                        Checkout Time:{" "}
                                        {new Date(booking.checkOut).toDateString()}
                                        <br />
                                        Total Price: ₱{booking.total_price}.00
                                        <br />
                                        Pets Included:{" "}
                                        {pets
                                          .filter((pet) =>
                                            booking.petList.includes(pet.id)
                                          )
                                          .map((pet) => pet.name)
                                          .map((petName) => (
                                            <span>{petName + ", "}</span>
                                          ))}
                                        <br />
                                        <div>
                                          <span>Status:&nbsp;</span>
                                          <span
                                            className="fs-5"
                                            style={{
                                              color:
                                                booking.status === "pending"
                                                  ? "#ffc007"
                                                  : booking.status === "rejected"
                                                  ? "#dc3444"
                                                  : "#198753",
                                            }}
                                          >
                                            {booking.status}
                                          </span>
                                        </div>
                                      </p>
                                      <div
                                        className="modal-footer"
                                        style={{ marginBottom: "-15px" }}
                                      >
                                        <DeleteBooking bookingId={booking.id} />
                                      </div>
                                    </div>
                                  );
                                })}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="list-group list-group-flush border-top-0">
                    {bookings.length ? (
                      bookings.map((booking) => {
                        return (
                          <li className="list-group-item text-secondary p-1">
                            <div
                              className="card my-2 shadow overflow-auto p-1 mb-3 mb-md-0 border-top-0"
                              style={{
                                maxWidth: "100%",
                                maxHeight: "500px",
                              }}
                              onClick={() => setSelectedBookingId(booking.id)}
                            >
                              <div className="card-body">
                                <h5 className="card-title">
                                  {booking.service_type === "dayCare" && (
                                    <span>Day Care</span>
                                  )}
                                  {booking.service_type === "errandsCare" && (
                                    <span>Errands Care</span>
                                  )}
                                  {booking.service_type === "homeCare" && (
                                    <span>Home Care</span>
                                  )}
                                  &nbsp;Booking Details
                                </h5>
                                <p>Total Price: ₱{booking.total_price}.00</p>
                                <span>Status:&nbsp;</span>
                                <span
                                  className="fs-5"
                                  style={{
                                    color:
                                      booking.status === "pending"
                                        ? "#ffc007"
                                        : booking.status === "rejected"
                                        ? "#dc3444"
                                        : "#198753",
                                  }}
                                >
                                  {booking.status}
                                </span>
                                <p>
                                  {booking.status === "rejected" && (
                                    <p>
                                      Reason for Rejection:{" "}
                                      {booking.reasonOfRejection}
                                    </p>
                                  )}
                                </p>
                              </div>
                            </div>
                          </li>
                        );
                      })
                    ) : (
                      <p className="my-2 text-center">No bookings yet.</p>
                    )}
                  </ul>
                </div>
              </div>

              <h5 className="py-3">
                <b>Rates and Services</b>
              </h5>
              <div className="card my-2 shadow">
                <div className="card-header">
                  Here are the services that we offer:
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <CheckCircleOutlineIcon className="me-1 text-success" />
                    Home Care (24 Hours) starting at ₱450.00
                  </li>
                  <li className="list-group-item">
                    <CheckCircleOutlineIcon className="me-1 text-success" />
                    Day Care (10 Hours) starting at ₱250.00
                  </li>
                  <li className="list-group-item">
                    <CheckCircleOutlineIcon className="me-1 text-success" />
                    Errands Care (4 Hours) starting at ₱180.00
                  </li>
                </ul>
              </div>

              <h5 className="py-3">
                <b>Boarding Requirements</b>
              </h5>
              <div className="card my-2 shadow">
                <div className="card-header">
                  Before boarding in, let's check if you meet the requirements:
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <CheckCircleOutlineIcon className="me-1 text-success" />
                    Updated Vaccine Cards
                  </li>
                  <li className="list-group-item">
                    <CheckCircleOutlineIcon className="me-1 text-success" />
                    Recent Tick and Flea Treatment
                  </li>
                  <li className="list-group-item">
                    <CheckCircleOutlineIcon className="me-1 text-success" />
                    Bath/Clean Pets
                  </li>
                  <li className="list-group-item">
                    <CheckCircleOutlineIcon className="me-1 text-success" />
                    1 Diaper per Day/Stay
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="row py-3">
                <div className="col align-middle">
                  <h5>
                    <b>My Pets</b>
                  </h5>
                </div>
                <div className="col d-flex flex-row-reverse">
                  <AddPetForm
                    uploaded={uploadedPetVaccine}
                    handleDateChange={handleDateChange}
                    open={open}
                    handleAdd={handleAdd}
                    handleCancel={handleCancel}
                    handleChange={handleChange}
                    handleClickOpen={handleClickOpen}
                    handleUpload={handleUpload}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="overflow-auto card shadow">
                    <div
                      className="overflow-auto p-3 mb-3 mb-md-0 bg-light"
                      style={{ maxWidth: "100%", maxHeight: "1000px" }}
                    >
                      {pets.length ? (
                        pets.map((pet, index) => {
                          return (
                            <div className="card my-2 shadow-sm" key={pet.id}>
                              <div className="card-header">{pet.breed}</div>
                              <div className="card-body">
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                  }}
                                >
                                  <div
                                    className="align-middle"
                                    style={{ position: "relative" }}
                                  >
                                    <label
                                      htmlFor={`pet-avatar-upload-${pet.id}`}
                                    >
                                      <div
                                        style={{
                                          width: 75,
                                          height: 75,
                                          borderRadius: "50%",
                                          overflow: "hidden",
                                          position: "relative",
                                          cursor: "pointer",
                                        }}
                                      >
                                        <img
                                          src={pets[index].petPhoto}
                                          alt={`${pets[index].name}`}
                                          style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                          }}
                                        />
                                        <IconButton
                                          color="primary"
                                          component="span"
                                          style={{
                                            opacity: 0.5,
                                            position: "absolute",
                                            bottom: 0,
                                            right: 0,
                                            backgroundColor: "white",
                                            borderRadius: "50%",
                                          }}
                                        >
                                          <AddIcon />
                                        </IconButton>
                                      </div>
                                    </label>
                                    <input
                                      id={`pet-avatar-upload-${pet.id}`}
                                      type="file"
                                      accept="image/*"
                                      style={{ display: "none" }}
                                      onChange={(e) =>
                                        handleUploadPetAvatar(e, pet.id)
                                      }
                                    />
                                    <div>
                                      <button
                                        className="yuki-font-color btn btn-link ps-0"
                                        data-toggle="modal"
                                        data-target={"#PetVaccineModal" + pet.id}
                                      >
                                        View Pet Vaccine
                                      </button>
                                    </div>
                                    <span className="card-title h5">
                                      {pet.name}
                                    </span>
                                    &nbsp;
                                    <span className="span">({pet.size})</span>
                                    {pet.vaccinated ? (
                                      <VaccinesIcon className="text-success" />
                                    ) : null}
                                  </div>
                                  <div>
                                    <button
                                      className="btn btn-outline-secondary mx-2"
                                      data-toggle="modal"
                                      data-target={`#editPetForm${pet.id}`}
                                    >
                                      Edit
                                    </button>
                                    <a
                                      type="button"
                                      className="btn btn-danger"
                                      data-toggle="modal"
                                      data-target={`#HomeCareBookNow${pet.id}`}
                                      href="/"
                                    >
                                      Delete
                                    </a>
                                    <div
                                      className="modal fade"
                                      id={`HomeCareBookNow${pet.id}`}
                                      tabIndex="-1"
                                      role="dialog"
                                      aria-labelledby="HomeCareBookNowCenterTitle"
                                      aria-hidden="true"
                                    >
                                      <div
                                        className="modal-dialog modal-dialog-centered"
                                        role="document"
                                      >
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <h5
                                              className="modal-title"
                                              id="HomeCareBookNowLongTitle"
                                            >
                                              Delete Pet
                                            </h5>
                                          </div>
                                          <div className="modal-body">
                                            Are you sure you want to delete pet?
                                          </div>
                                          <div className="modal-footer">
                                            <button
                                              type="button"
                                              className="btn btn-secondary"
                                              data-dismiss="modal"
                                              onClick={handleCancel}
                                            >
                                              Cancel
                                            </button>
                                            <button
                                              id={pet.id}
                                              type="button"
                                              className="btn btn-primary button-color"
                                              onClick={() =>
                                                handleDeletePet(pet.id)
                                              }
                                            >
                                              Yes
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <p className="card-text text-secondary">
                                  {pet.birthday}
                                  <br />
                                </p>
                              </div>
                              <EditPetForm
                                petId={pet.id}
                                petName={pet.name}
                                petBreed={pet.breed}
                                petSize={pet.size}
                                petBirthday={pet.birthday}
                              />
                              <VaccinePhotoModal
                                vaccinated={pet.vaccinated}
                                petId={pet.id}
                                petName={pet.name}
                                petVaccinePhoto={pet.vaccinePhoto}
                              />
                            </div>
                          );
                        })
                      ) : (
                        <p className="text-center">No pets added yet.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Box>
      </div>

      <Footer />
    </>
  );
}
