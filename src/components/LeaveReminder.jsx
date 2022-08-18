import React, { useState, useEffect } from "react";
import { getFutureLeaves } from "../components/auth/leaveApi";

const LeaveReminder = () => {
  const [leaveBalance, setLeaveBalance] = useState([]);

  useEffect(async () => {
    const result = await getFutureLeaves();
    setLeaveBalance(result);
  }, []);
  console.log(leaveBalance);
  return (
    <div className="leave-reminder">
      <h3>Leave Remainder</h3>
      <div className="reminder-type">
        {leaveBalance.length > 0 &&
          leaveBalance.map((item, i) => {
            return (
              <li className="reminder-list-components" key={i}>
                <i class="bx bxs-circle bx-orange"></i>
                <div>
                    {/* {
                        req.user.role == "user"?"":<h4>{item.user.firstName}</h4>
                    } */}
                    <h4>{item.user.firstName}</h4>
                  <h4>{item.leaveType}</h4>
                  On Leave from:
                  <p className="reminder-date">{new Date(item.startDate).toDateString()}</p>
                Returning On:
                  <p className="reminder-leave-type">{new Date (item.endDate).toDateString()}</p>
                  Days To Go:
                  <p className="reminder-days-togo">
                    {" "}
                    {Math.round(
                      (new Date(item.startDate) - new Date()) /
                        (1000 * 60 * 60 * 24)
                    )}
                  </p>
                </div>
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default LeaveReminder;
