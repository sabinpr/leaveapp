import "./App.css";
// import "./App2.css";
import "./App2.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import Dashboard from "./pages/Dashboard";
import Apply from "./pages/Apply";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PrivateRoutes from "./PrivateRoutes";
import LoginRoutes from "./LoginRoutes";
import Registration from "./pages/Registration";
import Roles from "./components/Roles";
function App() {
  const token = localStorage.getItem("token");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginRoutes />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route path="/roles" element={<Roles />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Sidebar />}>
              <Route index element={<Dashboard />} />
              <Route path="apply" element={<Apply />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
