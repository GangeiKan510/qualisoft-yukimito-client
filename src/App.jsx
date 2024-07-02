 import AdminDashBoard from "./pages/admin/AdminDashboard";
import AdminMainNav from "./components/partials/admin-dashboard/AdminMainNav"
// import AdminNavbar from "./components/AdminNavbar";
// import AdminManageContent from "./pages/AdminManageContent";
// import AdminCalendar from "./pages/AdminCalendar";
// import AdminInventory from "./pages/AdminInventory";
// import AdminVaccine from "./pages/AdminVaccine";
// import AdminBooking from "./pages/AdminBooking";
// import AdminClient from "./pages/AdminClient";
// import LandingPage from "./pages/LandingPage";
// import ClientLogin from "./pages/ClientLogin";


// pet ownwer pages
import PetOwnerHome from "./pages/client/PetOwnerHome";
import PetOwnerReview from "./pages/client/PetOwnerReview";
import PetOwnerContact from "./pages/client/PetOwnerContact";
import PetOwnerSizeChart from "./pages/client/PetOwnerSizeChart";
import PetOwnerRates from "./pages/client/PetOwnerRates";
import PetOwnerPhotos from "./pages/client/PetOwnerPhotos";
import PetOwnerRequirements from "./pages/client/PetOwnerRequirements";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientRegister from "./pages/client/PetOwnerRegister";
import AdminLogin from "./pages/admin/AdminLogin";
import PetOwnerLogin from "./pages/client/PetOwnerLogin";
import SuccessTestPage from "./pages/SuccessTestpage";
import LandingPage from "./pages/LandingPage";
import PetOwnerDashboard from "./pages/client/PetOwnerDashboard";
import PetOwnerBookingConfirmation from "./pages/client/PetOwnerBookingConfirmation";
import PetOwnerPartialPaymentBreakdown from "./pages/client/PetOwnerPartialPaymentBreakdown";

export default function App() {

  return (  
    <BrowserRouter>
      <Routes>

        {/* pet owner pages*/}
        <Route path="/PetOwnerHome" element={<PetOwnerHome />} />
        <Route path="/PetOwnerReview" element={<PetOwnerReview />} />
        <Route path="/PetOwnerContact" element={<PetOwnerContact />} />
        <Route path="/PetOwnerSizeChart" element={<PetOwnerSizeChart />} />
        <Route path="/PetOwnerRates" element={<PetOwnerRates />} />
        <Route path="/PetOwnerPhotos" element={<PetOwnerPhotos />} />
        <Route path="/PetOwnerRequirements" element={<PetOwnerRequirements />} />
        <Route path="/PetOwnerBookingConfirmation" element={<PetOwnerBookingConfirmation />} />
        <Route path="/PetOwnerBooking/:service" element={<PetOwnerBookingConfirmation />} />
        <Route path="/PetOwnerPartialPaymentBreakdown" element={<PetOwnerPartialPaymentBreakdown />} />
        {/* admin pages */} 

        <Route path="/Landing" element={<LandingPage />} />
        <Route path="/" element={<PetOwnerLogin />} />
        <Route path="/ClientRegister" element={<ClientRegister />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminDashboard" element={<AdminDashBoard />} />
        <Route path="/AdminMainNav" element={<AdminMainNav />} />
        <Route path="/SuccessTestPage" element={<SuccessTestPage />} />
        <Route path="/PetOwnerDashboard" element={<PetOwnerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
