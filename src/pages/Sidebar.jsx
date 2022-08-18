import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import Popup1 from "../components/Popup1";
import Popup2 from "../components/Popup2";
import Popup3 from "../components/Popup3";
import Popup4 from "../components/Popup4";
import Popup5 from "../components/Popup5";
import Popup6 from "../components/Popup6";
import asterdio from "../images/asterdio.png";
import RightBar from "../components/RightBar";
import { logout } from "../components/auth/userApi";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  let navigate = useNavigate();

  const handleChange = (e) => {
    // preventDefault()
    logout(navigate);
  };
  return (
    <>
      <div id="blur">
        <div className="sidebar">
          <div className="logo-content">
            <div className="logo">
              <img src={asterdio} alt="Asterdio" />
            </div>
          </div>
          <ul className="nav-list">
            <li>
              <NavLink exact={true} activeClassName="active" to="/dashboard" end>
                <i className="bx bxs-dashboard"></i>
                <span className="links-name">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact={true} activeClassName="active" to="/dashboard/apply">
                <i class="bx bxs-pencil"></i>
                <span className="links-name">Apply Leave</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact={true} activeClassName="active" to="/dashboard/profile">
                <i class="bx bxs-user"></i>
                <span className="links-name">My Profile</span>
              </NavLink>
            </li>
          </ul>
          <Link to="/" onClick={handleChange}>
            <div className="user-logout">
              <i class="bx bx-log-out"></i>
              <b>
                <span>Log Out</span>
              </b>
            </div>
          </Link>
        </div>
        <Outlet />
        <RightBar />
      </div>
      <div id="popup1">
        <Popup1 />
      </div>
      <div id="popup2">
        <Popup2 />
      </div>
      <div id="popup3">
        <Popup3 />
      </div>
      <div id="popup4">
        <Popup4 />
      </div>
      <div id="popup5">
        <Popup5 />
      </div>
      <div id="popup6">
        <Popup6 />
      </div>
    </>
  );
};

export default Sidebar;
