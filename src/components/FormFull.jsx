import React from "react";
import { useState } from "react";
import axios from "axios";
// import { API } from "../config";

export const FormFull = () => {
  const [leave, setLeave] = useState({
    leaveType: "",
    from: "",
    to: "",
    uploadFile: "",
    reason: "",
    error: null,
  });

  const handleSubmit = async (e) => {
    console.log(leave);
    try {
      const response = await axios.post(
        `http://localhost:3003/leaves/addLeave`,
        {
          fullHalf: "full",
          leaveType: leave.leaveType,
          startDate: leave.from,
          endDate: leave.to,
          reason: leave.reason,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log(response.data, "this is response");
      alert("New Leave added scessflly");
    } catch (err) {
      console.log(err.response.data);
    }
  };
  return (
    <div className="form-container">
      <form action="#" onSubmit={handleSubmit}>
        <div className="leave-form">
          <div className="select-type">
            <input
              type={"radio"}
              value="annual"
              name="type"
              id="dot-1"
              required
              onChange={(e) =>
                setLeave({ ...leave, leaveType: e.target.value })
              }
            ></input>
            <input
              type={"radio"}
              value="sick"
              name="type"
              id="dot-2"
              onChange={(e) =>
                setLeave({ ...leave, leaveType: e.target.value })
              }
            ></input>
            <input
              type={"radio"}
              value="emergency"
              name="type"
              id="dot-3"
              onChange={(e) =>
                setLeave({ ...leave, leaveType: e.target.value })
              }
            ></input>
            <input
              type={"radio"}
              value="bereavement"
              name="type"
              id="dot-4"
              onChange={(e) =>
                setLeave({ ...leave, leaveType: e.target.value })
              }
            ></input>
            <input
              type={"radio"}
              value="personal"
              name="type"
              id="dot-5"
              onChange={(e) =>
                setLeave({ ...leave, leaveType: e.target.value })
              }
            ></input>
            <input
              type={"radio"}
              value="casual"
              name="type"
              id="dot-6"
              onChange={(e) =>
                setLeave({ ...leave, leaveType: e.target.value })
              }
            ></input>
            <span className="details">Leave Type</span>
            <div className="type-category">
              <label for="dot-1">
                <span className="dot one"></span>
                <span className="select-leave">Annual Leave</span>
              </label>
              <label for="dot-2">
                <span className="dot two"></span>
                <span className="select-leave">Sick Leave</span>
              </label>
              <label for="dot-3">
                <span className="dot three"></span>
                <span className="select-leave">Emergency Leave</span>
              </label>
            </div>
            <div className="type-category">
              <label for="dot-4">
                <span className="dot four"></span>
                <span className="select-leave">Bereavement Leave</span>
              </label>
              <label for="dot-5">
                <span className="dot five"></span>
                <span className="select-leave">Personal Leave</span>
              </label>
              <label for="dot-6">
                <span className="dot six"></span>
                <span className="select-leave">Casual Leave</span>
              </label>
            </div>
          </div>
          <div className="input-box">
            <span className="details">From</span>
            <input
              type={"date"}
              required
              onChange={(e) => setLeave({ ...leave, from: e.target.value })}
            ></input>
          </div>
          <div className="input-box">
            <span className="details">To</span>
            <input
              type={"date"}
              onChange={(e) => setLeave({ ...leave, to: e.target.value })}
            ></input>
          </div>
          <div className="input-file">
            <span className="details">Upload File</span>
            <input
              type="file"
              id="myFile"
              name="filename"
              accept="image/*, application/pdf"
              onChange={(e) =>
                setLeave({ ...leave, uploadFile: e.target.value })
              }
            />
          </div>
          <div className="reason-field">
            <span className="details">Reason</span>
            <textarea
              required
              onChange={(e) => setLeave({ ...leave, reason: e.target.value })}
            ></textarea>
          </div>
        </div>
        <div className="button1">
          <input className="apply" type={"submit"} value="Apply"></input>
          <input className="cancel" type={"reset"} value="Cancel"></input>
        </div>
      </form>
    </div>
  );
};
