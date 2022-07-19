import React from 'react';
import { Outlet, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logo-content">
          <div className="logo">
            <div className="logo-name">Asterdio</div>
          </div>
        </div>
        <ul className="nav-list">
          <li>
            <NavLink exact activeClassName="active" to="/">
              <i className='bx bxs-dashboard'></i>
              <span className="links-name">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/apply">
              <i className='bx bx-pencil'></i>
              <span className="links-name">Apply Leave</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  )
};

export default Sidebar;