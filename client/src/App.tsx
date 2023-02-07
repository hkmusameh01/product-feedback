import { Route, Routes } from "react-router-dom";
import Feedback from "./pages/feedback/Feedback";
import Login from "./auth/components/Login";
import CustomizedInputs from "./auth/components/CustomizedInputs";

// import "App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/auth/login" element={<CustomizedInputs />} />
    </Routes>
  );
};

export default App;
