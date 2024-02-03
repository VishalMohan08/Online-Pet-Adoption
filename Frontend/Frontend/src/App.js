import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/authentication/signup";
import ForgotPassword from "./pages/authentication/forgotPassword";
import MyAccount from "./pages/authentication/myAccount";
import DashBoard from "./pages/admin/dashboard";
import Login from "./pages/authentication/login";
import TermsAndConditions from "./pages/support/terms";
import PrivacyPolicy from "./pages/support/privacy";
import AddPetInfo from "./pages/pets/addPet/petDetails";
import AddPetMedicalInfo from "./pages/pets/addPet/petMedicalDetails";
import PetPage from "./pages/pets/adopt/petPage";
import PetPage2 from "./pages/pets/adopt/petpage2";
import AllPets from "./pages/pets/adopt/allPets";
import FAQ from "./pages/support/FAQ";
import NewHome from "./pages/newHome";
import PetSummary from "./pages/pets/addPet/petSummary";
import AddPet from "./pages/pets/addPet/addPet";
import AdoptSuccess from "./pages/pets/adopt/adoptSuccess";

const PrivateRoute = ({ element: Component, allowedRoles }) => {
  const token = localStorage.getItem("authToken");
  const userRole = localStorage.getItem("userRole");

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles.includes(userRole)) {
    return <Component />;
  } else {
    return <Navigate to="/" />;
  }
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route
            path="/account"
            element={
              <PrivateRoute
                element={MyAccount}
                allowedRoles={["USER", "PET_OWNER"]}
              />
            }
          />{" "}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute element={DashBoard} allowedRoles={["ADMIN"]} />
            }
          />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route
            path="/addPet"
            element={
              <PrivateRoute
                element={AddPet}
                allowedRoles={["PET_OWNER", "ADMIN"]}
              />
            }
          />
          <Route path="/allPets" element={<AllPets />} />
          <Route path="/pet/:id" element={<PetPage />} />
          <Route
            path="/adopted"
            element={
              <PrivateRoute element={AdoptSuccess} allowedRoles={["USER"]} />
            }
          />{" "}
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
