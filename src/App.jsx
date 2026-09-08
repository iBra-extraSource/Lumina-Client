import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/public/Landing";
import ChooseAccount from "./pages/public/ChooseAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/choose-account"
          element={<ChooseAccount />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;