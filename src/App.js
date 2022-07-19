import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import Dashboard from "./pages/Dashboard";
import Apply from "./pages/Apply";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Sidebar />}>
            <Route index element={<Dashboard />} />
            <Route path="/apply" element={<Apply />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

