import React from "react";
import "./App.css";
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/user/*" />} />
          {/* <Route path="/sign-up" element={<SignUp />} /> */}
          <Route path="/user/*" element={<Home />} />
          {/* <Route path="/dashboard" element={<MiniDrawer />} />
          <Route path="/faq" element={<MiniDrawer />} /> */}
        </Routes>
      </Router>
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
