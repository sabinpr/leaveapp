import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../components/auth/userApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //DEFINING INITIAL STATE FOR FORM FIELDS
  const [credential, setCredential] = useState({
    email: "",
    password: "",
    error: null,
  });

  // console.log(credential);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(credential);
    const { email, password } = credential;
    if (email && password) {
      //Calling login method from components/auth/index.jsx
      login({ email, password }, setCredential, navigate);
    }
  };
  return (
    <>
      <div className="form-background">
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={handleSubmit}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Log in</h3>
              {credential.error && (
                <div className="alert alert-danger" style={{}}>
                  {credential.error}
                </div>
              )}
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  required
                  onChange={(e) =>
                    setCredential({ ...credential, email: e.target.value })
                  }
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  required
                  onChange={(e) =>
                    setCredential({ ...credential, password: e.target.value })
                  }
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
