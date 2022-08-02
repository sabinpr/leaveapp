import React from "react";

export const FormHalf = () => {
  return (
    <div className="form-container">
      <form action="#">
        <div className="leave-form">
          <div className="select-type">
            <input type={"radio"} name="type" id="dot-7" required></input>
            <input type={"radio"} name="type" id="dot-8"></input>
            <input type={"radio"} name="type" id="dot-9"></input>
            <input type={"radio"} name="type" id="dot-10"></input>
            <input type={"radio"} name="type" id="dot-11"></input>
            <input type={"radio"} name="type" id="dot-12"></input>
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
              placeholder="Select Leave Type"
              required
            ></input>
          </div>
          <div className="input-box">
            <span className="details">Time Range</span>
            <select required>
              <option value="" disabled selected>
                Select Time Range
              </option>
              <option value="Annual Leave">First Half</option>
              <option value="Sick Leave">Second Half</option>
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
            <textarea required></textarea>
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
