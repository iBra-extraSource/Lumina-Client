import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/public/Landing";
import ChooseAccount from "./pages/public/ChooseAccount";

import UserSignup from "./pages/user/UserSignup";
import UserLogin from "./pages/user/UserLogin";
import UserDashboard from "./pages/user/UserDashboard";
import UserProfile from "./pages/user/UserProfile";
import TryAI from "./pages/user/TryAI";
import PredictionHistory from "./pages/user/PredictionHistory";
import ClinicSignup from "./pages/clinic/ClinicSignup";
import ClinicLogin from "./pages/clinic/ClinicLogin";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/choose-account"
          element={<ChooseAccount />}
        />

        <Route
          path="/user/signup"
          element={<UserSignup />}
        />

        <Route
          path="/user/login"
          element={<UserLogin />}
        />

         <Route
          path="/user/dashboard"
          element={<UserDashboard />}
        />

      <Route
        path="/user/profile"
        element={<UserProfile />}
        />

        <Route 
        path="/user/try-ai" element={<TryAI />} 
        />

        <Route
        path="/user/predictions"
        element={<PredictionHistory />}
      />
      <Route
        path="/clinic/signup"
        element={<ClinicSignup />}
      />
    <Route 
    path="/clinic/login" element={<ClinicLogin />} 
    />







    
      </Routes>


      
    </BrowserRouter>
  );
}

export default App;