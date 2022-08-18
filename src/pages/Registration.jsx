import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../config";
import {
  FormikCustomField,
  FormikCustomSelect,
} from "../components/FormikCustomInput";
import { Form, Formik } from "formik";
import { userRegisterSchema } from "../schemas/userRegistrationSchema";

const Registration = () => {
  const [roles, setRoles] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${API}/roles/allRole`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        setRoles(res.data.roles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          middleName: "",
          lastName: "",
          address: "",
          phone: "",
          email: "",
          password: "",
          gender: "",
          dob: "",
          role: "",
          companyId: "",
          designation: "",
        }}
        validationSchema={userRegisterSchema}
      >
        {(props) => (
          <div className="register-form-background">
            <div className="Auth-form-container">
              <div className="Auth-form">
                <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Register</h3>
                  <Form className="from-design">
                    <div className="register-name-flex-control">
                      <FormikCustomField
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="Enter First Name"
                      />
                      <FormikCustomField
                        label="Middle Name"
                        name="middleName"
                        type="text"
                        placeholder="Enter Middle Name"
                      />
                      <FormikCustomField
                        label="Last Name"
                        name="lastName"
                        type="text"
                        placeholder="Enter Last Name"
                      />
                    </div>
                    <div className="register-flex-control">
                      <FormikCustomField
                        label="Address"
                        name="address"
                        type="text"
                        placeholder="Enter Address"
                      />
                      <FormikCustomField
                        label="Contact Number"
                        name="phone"
                        type="text"
                        placeholder="Enter Contact Number"
                      />
                    </div>
                    <div className="register-flex-control">
                      <FormikCustomField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter Email Address"
                      />
                      <FormikCustomField
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                      />
                    </div>
                    <div className="register-flex-control">
                      <FormikCustomField
                        label="Date of Birth"
                        name="dob"
                        type="date"
                        placeholder="Choose Date"
                      />
                      <FormikCustomSelect label="Role" name="role" type="text">
                        <option value="" selected disabled>
                          Please Select A Role
                        </option>
                        {roles.map((role) => {
                          return <option value={role._id}>{role.role}</option>;
                        })}
                      </FormikCustomSelect>
                    </div>
                    <div className="register-flex-control">

                      <FormikCustomField
                        label="Company ID"
                        name="companyId"
                        type="text"
                        placeholder="Enter Company Id"
                      />
                      <FormikCustomField
                        label="Designation"
                        name="designation"
                        type="text"
                        placeholder="Enter Designation"
                      />
                    </div>
                    <div className="button1">
                      <input className="apply" type={"submit"} value="Add"></input>
                      <input className="cancel" type={"reset"} value="Cancel"></input>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Registration;
