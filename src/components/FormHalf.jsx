import React from "react";
import { useState } from "react";
import axios from "axios";

export const FormHalf = () => {

  const [leave, setLeave] = useState({
    leaveType: "",
    date: "",
    half: "",
    uploadFile: "",
    reason: "",
    error: null,
  });

  const handleSubmit = async (e) => {
    console.log(leave);
    try {
      const response = await axios
        .post(
          `http://localhost:3003/leaves/addLeave`,
          {
            fullHalf: 'half',
            selectHalf: leave.half,
            leaveType: leave.leaveType,
            startDate: leave.date,
            reason: leave.reason,
          }, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } }
        )
      console.log(response.data, "this is response")
      alert('New Leave added scessflly')
    } catch (err) {
      console.log(err.response.data)
    }

  }

  return (
    <div className="form-container" onSubmit={handleSubmit}>
      <form action="#">
        <div className="leave-form">
          <div className="select-type">
            <input type={"radio"} value="annual" name="type" id="dot-7" required onChange={(e) =>
              setLeave({ ...leave, leaveType: e.target.value })
            }></input>
            <input type={"radio"} value="sick" name="type" id="dot-8" onChange={(e) =>
              setLeave({ ...leave, leaveType: e.target.value })
            }></input>
            <input type={"radio"} value="emergency" name="type" id="dot-9" onChange={(e) =>
              setLeave({ ...leave, leaveType: e.target.value })
            }></input>
            <input type={"radio"} value="bereavement" name="type" id="dot-10" onChange={(e) =>
              setLeave({ ...leave, leaveType: e.target.value })
            }></input>
            <input type={"radio"} value="personal" name="type" id="dot-11" onChange={(e) =>
              setLeave({ ...leave, leaveType: e.target.value })
            }></input>
            <input type={"radio"} value="casual" name="type" id="dot-12" onChange={(e) =>
              setLeave({ ...leave, leaveType: e.target.value })
            }></input>
            <span className="details">Leave Type</span>
            <div className="type-category">
              <label for="dot-7">
                <span className="dot one"></span>
                <span className="select-leave">Annual Leave</span>
              </label>
              <label for="dot-8">
                <span className="dot two"></span>
                <span className="select-leave">Sick Leave</span>
              </label>
              <label for="dot-9">
                <span className="dot three"></span>
                <span className="select-leave">Emergency Leave</span>
              </label>
            </div>
            <div className="type-category">
              <label for="dot-10">
                <span className="dot four"></span>
                <span className="select-leave">Bereavement Leave</span>
              </label>
              <label for="dot-11">
                <span className="dot five"></span>
                <span className="select-leave">Personal Leave</span>
              </label>
              <label for="dot-12">
                <span className="dot six"></span>
                <span className="select-leave">Casual Leave</span>
              </label>
            </div>
          </div>
          <div className="input-box">
            <span className="details">Date</span>
            <input
              type={"Date"}
              required
              onChange={(e) =>
                setLeave({ ...leave, date: e.target.value })
              }>
            </input>
          </div>
          <div className="input-box">
            <span className="details">Time Range</span>
            <select required
            onChange={(e) =>
                setLeave({ ...leave, half: e.target.value })
              }>
              <option value="first" disabled selected>
                Select Time Range
              </option>
              <option value="first"
              >First Half</option>
              <option value="second"
              >Second Half</option>
            </select>
          </div>
          <div className="input-file">
            <span className="details">Upload File</span>
            <input
              type="file"
              id="myFile"
              name="filename"
              accept="image/*, application/pdf"
            />
          </div>
          <div className="reason-field">
            <span className="details">Reason</span>
            <textarea required
            onChange={(e) =>
                setLeave({ ...leave, reason: e.target.value })
              }></textarea>
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