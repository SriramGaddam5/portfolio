import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./page";
import About from "./pages/About";
import VIST105 from "./pages/VIST105";
import ARTS115 from "./pages/ARTS115";
import Paintings from "/Paintings";
import Digital from "./pages/Digital";
import Traditional from "./pages/Traditional";
import Everything from "./pages/Everything";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vist105" element={<VIST105 />} />
        <Route path="/arts115" element={<ARTS115 />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/traditional" element={<Traditional />} />
        <Route path="/everything" element={<Everything />} />
      </Routes>
    </Router>
  );
}
