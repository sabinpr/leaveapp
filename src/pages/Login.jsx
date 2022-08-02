import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className='form-background'>
                <div className="Auth-form-container">
                    <form className="Auth-form">
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Log in</h3>
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
                                    required
                                />
                            </div>
                            <div class="form-check">
                                <input className="form-check-input" type="checkbox" id="check1" name="logedin" value="something" />
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