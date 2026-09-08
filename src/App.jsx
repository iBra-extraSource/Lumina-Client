import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/public/Landing";
import ChooseAccount from "./pages/public/ChooseAccount";

import UserSignup from "./pages/user/UserSignup";
import UserLogin from "./pages/user/UserLogin";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;