import React from 'react'

const Login = () => {
    return (
        <>
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
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                            />
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="check1" name="logedin" value="something"/>
                        <label class="form-check-label">Keep me logged in</label>
                        <p className="forgot-password text-right mt-2">
                            Forgot <a href="/">password?</a>
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
        </>
    );
};

export default Login;