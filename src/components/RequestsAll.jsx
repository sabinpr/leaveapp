import React, { useState, useEffect } from "react";
import pp1 from "../images/pp1.png";
import {
  getLeaveBalance,
  updateLeavesAction,
} from "../components/auth/leaveApi";

const RequestsAll = () => {
  const [leaveBalance, setLeaveBalance] = useState([]);
  useEffect(async () => {
    const result = await getLeaveBalance();
    console.log(result);
    setLeaveBalance(result);
  }, []);

  const handleChange = async (id, status) => {
    updateLeavesAction(id, { status });
    const result = await getLeaveBalance();
    console.log(result);
    setLeaveBalance(result);
  };
  // console.log("firslkasjt", leaveBalance);

  return (
    <>
      {leaveBalance.length > 0 &&
        leaveBalance.map((item, i) => {
          if (item.status === "pending") {
            let leaveStartDate = new Date(item.startDate).toDateString();
            let leaveEndDate = new Date(item.endDate).toDateString();
            console.log(leaveBalance);
            return (
              <div className="popup-content">
                <div className="popup-top-request">
                  <div className="user-profiles">
                    <div className="user-profile-pic">
                      <img src={pp1} alt="user"></img>
                    </div>
                    <div className="user-profile-description">
                      <p className="user-profile-name">{item.user.firstName}</p>
                      <p className="user-profile-post">
                        {item.user.designation}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="leave-type">{item.leaveType}</div>
                <div className="leave-name">
                  <i class="bx bx-calendar"></i>
                  {leaveStartDate} - {leaveEndDate}
                </div>
                <div className="leave-name">
                  <i class="bx bx-time-five"></i>Half Day | First Half
                </div>
                <div className="popup-reason">
                  <div className="reason-head">
                    Reason for leave of absence:
                  </div>
                  <div className="reason-details">
                    Lorem ipsum dolor sit amet.
                  </div>
                </div>
                <div className="button-align-design">
                  <button
                    type="button"
                    class="button-design-all button-design-approve"
                    onClick={() => handleChange(item._id, "accepted")}
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    class="button-design-all button-design-reject"
                    onClick={() => handleChange(item._id, "rejected")}
                  >
                    Reject
                  </button>
                </div>
              </div>
            );
          } else {
            if (i == 1) return <div>No Pending Requests</div>;
          }
        })}
    </>
  );
};

export default RequestsAll;
