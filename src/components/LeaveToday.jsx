import React, { useState, useEffect } from "react";
import pp1 from "../images/pp1.png";
import pp2 from "../images/pp2.png";
import pp3 from "../images/pp3.png";
import pp4 from "../images/pp4.png";
import { getTodayLeaves } from "../components/auth/leaveApi";

const LeaveToday = () => {
  const [holiday, SetHoliday] = useState([]);

  useEffect(async () => {
    const absentee = await getTodayLeaves();
    // console.log(absentee);
    if (absentee) SetHoliday(absentee);
  }, []);
  console.log("holiday", holiday)
  return (
    <div className="leave-today">
      <h3>Who’s on leave today?</h3>
      <div className="leave-profile-lists">
        {holiday.length > 0 ? (
          holiday.map((item, x) => {
            return (
              <li key={x}>
                <div className="user-profile-pic">
                  <img src={pp1} alt="user"></img>
                </div>
                <div className="user-profile-description">
                  <p className="user-profile-name">{item.name}</p>
                  <p className="user-profile-post">{item.designation}</p>
                </div>
              </li>
            );
          })
        ) : (
          <h2>No Users on Leave Today</h2>
        )}
      </div>
    </div>
  );
};

export default LeaveToday;
