import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Navbar from "../navbar/Navbar";
import Add from "../addtransaction/Add";
import Consultant from "../addtransaction/Consultant";

function Home() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="faq" element={<Add />} />
        <Route path="consultant" element={<Consultant />} />
      </Routes>
    </div>
  );
}

export default Home;
