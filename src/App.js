import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Showcase from "./pages/Showcase";
import VIST105 from "./pages/VIST105";
import About from "./pages/About";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/VIST105" element={<VIST105 />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
