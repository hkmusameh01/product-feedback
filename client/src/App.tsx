import { Route, Routes } from "react-router-dom";
import Login from "./auth/pages/Login";
import Feedback from "./pages/feedback/Feedback";

const App = () => {
  return (
    <Routes>
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/auth/login" element={<Login />} />
    </Routes>
  );
};

export default App;
