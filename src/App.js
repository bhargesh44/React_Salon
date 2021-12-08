import DashBoard from "./components/DashBoard/DashBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<DashBoard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
