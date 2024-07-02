
import HailIcon from '@mui/icons-material/Hail';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

const homeCare = {
  title: "Home Care",
  duration: 24,
  checkInTime: <>
    <DirectionsWalkIcon />
    Check In: 12 noon - 4:30 PM only &nbsp;
  </>,
  checkOutTime: <>
    <HailIcon />
    Check Out: 11:00 AM
  </>,
  operatingTime: "",
  description: "Going for a vacation or business trip and worried about your  pet, Home Care service is your choice. We take every precautionto provide a safe and stress-free boarding experience for your pet.",
  price: 425
}

const dayCare = {
  title: "Day Care",
  duration: 10,
  checkInTime: "",
  checkOutTime: "",
  operatingTime: <>
    <DirectionsWalkIcon />
    Operating Time: 7:30 AM - 7:00 PM &nbsp;
  </>,
  description: "If youre leaving home for a day under 10 hours, Day Care service is your best option. Bring your furry loved one in the morning and will take care all the needs of your pet.",
  price: 250
}

const errandsCare = {
  title: "Errands Care",
  duration: 4,
  checkInTime: "",
  checkOutTime: "",
  operatingTime: <>
    <DirectionsWalkIcon />
    Operating Time: 7:30 AM - 7:00 PM &nbsp;
  </>,
  description: "Going to church, grocery, or an important meeting for a short period of time and you cant attend to your pet needs, Errand service is for you.",
  price: 175
}

export { homeCare, dayCare, errandsCare };