import { Route, Routes } from "react-router-dom";
import Feedback from "./pages/feedback/Feedback";

// import "App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  );
};

export default App;
