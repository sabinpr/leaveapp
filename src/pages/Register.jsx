import React from "react";

const Register = () => {
  return (
    <>
      <div className="form-background">
        <div className="Auth-form-container">
          <div className="Auth-form">
            <div className="Auth-form-content">
              <div className="Auth-form-title">Register</div>
              <div className="form-group mt-3">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter last name"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  required
                />
              </div>
              <div className="d-grid gap-2 mt-4 mb-2">
                <button type="submit" className="btn btn-primary btn-block">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
