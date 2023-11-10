import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Error />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
