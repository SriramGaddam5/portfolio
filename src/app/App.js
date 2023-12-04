import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Error";
import Home from "/page";
import about from "/about";
import VIST105 from "/VIST105";
import ARTS115 from "/ARTS115";
import Paintings from "/Paintings";
import Digital from "/Digital";
import Traditional from "/Traditional";
import Everything from "/Everything";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<about />} />
        <Route path="/VIST105" element={<VIST105 />} />
        <Route path="/ARTS115" element={<ARTS115 />} />
        <Route path="/Paintings" element={<Paintings />} />
        <Route path="/Digital" element={<Digital />} />
        <Route path="/Traditional" element={<Traditional />} />
        <Route path="/Everything" element={<Everything />} />
      </Routes>
    </Router>
  );
}
