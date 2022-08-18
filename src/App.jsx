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
import AddUser from "./pages/AddUser";
// import Register from "./pages/Register";
// import Registration from "./pages/Registration";
import Roles from "./components/Roles";
// import Register from "./pages/Register";
import LeaveRequest from "./pages/LeaveRequest";
import DashboardPm from "./pages/DashbooardPm";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/roles" element={<Roles />} />
          {/* <Route path="/register" element={<Registration />} /> */}
          <Route exact path="/dashboard" element={<Sidebar />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/apply" element={<Apply />} />
            <Route path="/dashboard/profile" element={<Profile />} />
          </Route>
          <Route path="/admin" element={<SidebarPm />}>
            <Route index element={<DashboardPm />} />
            <Route path="/admin/leave" element={<LeaveRequest/>} />
            <Route path="/admin/add" element={<AddUser />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
