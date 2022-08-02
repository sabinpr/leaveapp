import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../components/auth/index";

const Login = () => {
  //DEFINING INITIAL STATE FOR FORM FIELDS
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    error: "",
    success: false,
  });

  //DE-STRUCTURING
  const { email, password, error, success } = credentials;

  const handleChange = (name) => (event) => {
    setCredentials({
      ...credentials,
      error: false,
      [name]: event.target.value,
    });

    console.log(credentials);

    const handleSubmit = (event) => {
      event.preventDefault();
      //   setCredentials({ ...values, error: "false" });
      login({ email, password }, setCredentials);
    };

    //TO SHOW ERROR
    const showError = () => {
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : none }}
      >
        {/* for divs, by default, display = block */}
        {/* IF ERROR, DISPLAY BLOCK, ELSE, DISPLAY NONE */}
        {error}
      </div>;
    };

    //TO SHOW SUCCESS
    const showSuccess = () => {
      <div
        className="alert alert-success"
        style={{ display: success ? "Login Successful" : none }}
      >
        {success}
      </div>;
    };
  };
  return (
    <>
      {showError()}
      {showSuccess()}
      <div className="form-background">
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={handleSubmit}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Log in</h3>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  required
                  onChange={handleChange("email")}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  name="password"
                  value={password}
                  required
                  onChange={handleChange("password")}
                />
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check1"
                  name="loggedin"
                  value="something"
                />
                <label className="form-check-label">Keep me logged in</label>
                <p className="forgot-password text-right mt-2">
                  <Link to="/">Forgot password?</Link>
                </p>
              </div>

              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary btn-block">
                  Log in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
