import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../config";
import {
  FormikCustomField,
  FormikCustomSelect,
  FormikCustomRadio,
} from "../components/FormikCustomInput";
import { Field, Form, Formik } from "formik";
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
          <div className="form-background">
            <div className="Auth-form-container">
              <Form className="Auth-form">
                <FormikCustomField
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="Enter First Name"
                />
                <br />
                <FormikCustomField
                  label="Middle Name"
                  name="middleName"
                  type="text"
                  placeholder="Enter Middle Name"
                />
                <br />
                <FormikCustomField
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Enter Last Name"
                />
                <br />
                <FormikCustomField
                  label="Address"
                  name="address"
                  type="text"
                  placeholder="Enter Address"
                />
                <br />
                <FormikCustomField
                  label="Contact Number"
                  name="phone"
                  type="text"
                  placeholder="Enter Contact Number"
                />
                <br />
                <FormikCustomField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter Email Address"
                />
                <br />
                <FormikCustomField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                />
                <br />
                <div id="my-radio-group">Picked</div>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field type="radio" name="picked" value="One" />
                    One
                  </label>
                  <label>
                    <Field type="radio" name="picked" value="Two" />
                    Two
                  </label>
                  <div>Picked: </div>
                </div>
                <br />
                <FormikCustomField
                  label="Date of Birth"
                  name="dob"
                  type="date"
                  placeholder="Choose Date"
                />
                <br />
                <FormikCustomSelect label="Role" name="role">
                  <option value="" selected disabled>
                    Please Select A Role
                  </option>
                  {roles.map((role) => {
                    return <option value={role._id}>{role.role}</option>;
                  })}
                </FormikCustomSelect>
                <br />
                <FormikCustomField
                  label="Company ID"
                  name="companyId"
                  type="text"
                  placeholder="Enter Company Id"
                />
                <br />
                <FormikCustomField
                  label="Designation"
                  name="designation"
                  type="text"
                  placeholder="Enter Designation"
                />
                <br />
                <button type="submit">Submit</button>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Registration;
