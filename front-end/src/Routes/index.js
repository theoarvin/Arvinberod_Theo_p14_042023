import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "../pages/Employee";
import Home from "../pages/Home";

function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default index;
