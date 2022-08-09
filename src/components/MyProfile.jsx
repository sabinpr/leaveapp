import React from "react";
import { useState } from "react";
import imgemma from "../images/imgemma.svg";

const MyProfile = () => {
    const [state, setState] = useState({
        firstName: "Emma",
        lastName: "Smith",
        email: "emma.smith@test.com",
        address: "Nepal",
        phone: "9843333333",
        password: "password"
    });
    return (
        <div className="user-container">
            <div className="profile-pic-container">
                <div className="profile-pic">
                    <img src={imgemma} alt="Emma"></img>
                    <ul>
                        <li>Upload</li>
                        <li>Remove</li>
                    </ul>
                </div>
            </div>
            <div className="user-form-container">
                <form action="#">
                    <div className="user-form">
                        <div className="user-input-box">
                            <span className="details">First Name</span>
                            <input
                                readOnly={true}
                                type={"text"}
                                value={state.firstName}
                                name="firstName"
                            />
                        </div>
                        <div className="user-input-box">
                            <span className="details">Last Name</span>
                            <input
                                readOnly={true}
                                type={"text"}
                                value={state.lastName}
                                name="lastName"
                            />
                        </div>
                        <div className="user-input-box">
                            <span className="details">Address</span>
                            <input
                                type="text"
                                className="address"
                                name="address"
                                // defaultValue={state.address}
                                value={state.address}
                            />
                        </div>
                        <div className="user-input-box">
                            <span className="details">Contact</span>
                            <input
                                type="tel"
                                className="phone"
                                name="phone"
                                // defaultValue={state.phone}
                                value={state.phone}
                            />
                        </div>
                        <div className="user-input-box">
                            <span className="details">Email</span>
                            <input
                                readOnly={true}
                                type={"email"}
                                name="email"
                                value={state.email}
                            />
                        </div>
                        <div className="user-input-box">
                            <span className="details">Password</span>
                            <input
                                type={"password"}
                                className="password"
                                name="password"
                                // defaultValue={state.password}
                                value={state.password}
                            />
                        </div>
                    </div>
                    <div className="button1">
                        <input className="apply" type={"submit"} value="Save"></input>
                        <input className="cancel" type={"reset"} value="Cancel"></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;
