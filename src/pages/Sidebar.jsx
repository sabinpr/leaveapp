import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
const toggle = () => {
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');
  var popup = document.getElementById('popup');
  popup.classList.toggle('active');
}
const Sidebar = () => {
  return (
    <>
      <div id='blur'>
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
      </div>
      <div id='popup'>
        <h2>lorem pldpapsldpa dasdapsoda asfdasdap</h2>
        <p>
        sasas dasds sdad dsds sdsd sdds sdsds dssds dsds dsdsd sdsd sdsds dssdsd sdsd 
        dsds dsds dsds dsds 
        </p>
        <a className='view-details' href='#' onClick={toggle}>Close</a>
      </div>
    </>
  )
};

export default Sidebar;