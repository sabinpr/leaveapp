import "./App.css";
// import "./App2.css";
import "./App2.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import SidebarPm from "./pages/SidebarPm";
import Dashboard from "./pages/Dashboard";
import Apply from "./pages/Apply";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import LeaveRequest from "./pages/LeaveRequest";
import DashboardPm from "./pages/DashbooardPm";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Sidebar />}>
            <Route index element={<Dashboard />} />
            <Route path="apply" element={<Apply />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/pm" element={<SidebarPm />}>
            <Route index element={<DashboardPm />} />
            <Route path="/pm/leave" element={<LeaveRequest/>} />
            <Route path="/pm/apply" element={<Apply />} />
            <Route path="/pm/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
