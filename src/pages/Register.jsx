import React from "react";
import { useFormik } from "formik";
import { registerSchema } from "../schemas/userRegistrationSchema";
import "../App.css";
//Submit Function
const onSubmit = async (values, actions) => {
  // console.log("Submitted");
  actions.resetForm();
};

// eslint - disable - next - line;
const onReset = async () => {};

const Register = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues: {
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
    },
    validationSchema: registerSchema,
    onSubmit,
  });
  // console.log(formik);
  console.log(errors);
  return (
    <div className="form-background">
      <div className="Auth-form-container">
        <div className="d-flex flex-row">
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="Auth-form"
            onReset={handleReset}
          >
            <div className="form-group mt-2 p-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                value={values.firstName}
                onChange={handleChange}
                id="firstName"
                type="text"
                placeholder="Enter Your First Name"
                className={
                  errors.firstName && touched.firstName
                    ? "form-control input-error"
                    : "form-control"
                }
              />
              {errors.firstName && touched.firstName && (
                <p className="register-error">{errors.firstName}</p>
              )}
            </div>
            <div className="form-group mt-2 p-3">
              <label htmlFor="middleName" className="form-label">
                Middle Name
              </label>
              <input
                value={values.middleName}
                onChange={handleChange}
                id="middleName"
                type="text"
                placeholder="Enter Your Middle Name"
                className={
                  errors.middleName && touched.middleName
                    ? "form-control input-error"
                    : "form-control"
                }
              />
              {errors.middleName && touched.middleName && (
                <p className="register-error">{errors.middleName}</p>
              )}
            </div>
            <div className="form-group mt-2 p-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                value={values.lastName}
                onChange={handleChange}
                id="lastName"
                type="text"
                placeholder="Enter Your Last Name"
                className={
                  errors.lastName && touched.lastName
                    ? "form-control input-error"
                    : "form-control"
                }
              />
              {errors.lastName && touched.lastName && (
                <p className="register-error">{errors.lastName}</p>
              )}
            </div>
            <div className="form-group mt-2 p-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                value={values.address}
                onChange={handleChange}
                id="address"
                type="text"
                placeholder="Enter Your Address"
                className={
                  errors.address && touched.address
                    ? "form-control input-error"
                    : "form-control"
                }
              />
              {errors.address && touched.address && (
                <p className="register-error">{errors.address}</p>
              )}
            </div>
            <div className="form-group mt-2 p-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                value={values.phone}
                onChange={handleChange}
                id="phone"
                type="text"
                placeholder="Enter Your Contact Number"
                className={
                  errors.phone && touched.phone
                    ? "form-control input-error"
                    : "form-control"
                }
              />
              {errors.phone && touched.phone && (
                <p className="register-error">{errors.phone}</p>
              )}
            </div>
            <div className="form-group mt-2 p-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                value={values.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Enter Your Email Address"
                className={
                  errors.email && touched.email
                    ? "form-control input-error"
                    : "form-control"
                }
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="register-error">{errors.email}</p>
              )}
            </div>
            <div className="form-group mt-2 p-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                value={values.password}
                onChange={handleChange}
                id="password"
                type="password"
                placeholder="Enter Your Password"
                className={
                  errors.password && touched.password
                    ? "form-control input-error"
                    : "form-control"
                }
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <p className="register-error">{errors.password}</p>
              )}
            </div>
            <div className="form-group mt-2 p-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
            </div>

            <div className="form-group mt-2 p-3">
              <label htmlFor="dob">Date Of Birth</label>
              <input
                value={values.dob}
                onChange={handleChange}
                id="dob"
                type="date"
                placeholder="Enter Your Date of Birth"
                className={
                  errors.date && touched.date
                    ? "form-control input-error"
                    : "form-control"
                }
              />
              {errors.date && touched.date && (
                <p className="register-error">{errors.date}</p>
              )}
            </div>
            <div className="form-group mt-2 p-3">
              <label htmlFor="role" className="form-label">
                Role
              </label>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="companyId">CompanyID</label>
              <input
                value={values.companyId}
                onChange={handleChange}
                id="companyId"
                type="text"
                placeholder="Enter CompanyId"
                className={
                  errors.companyId && touched.companyId
                    ? "form-control input-error"
                    : "form-control"
                }
              />
              {errors.companyId && touched.companyId && (
                <p className="register-error">{errors.companyId}</p>
              )}
            </div>
            <div className="form-group mt-2 p-3">
              <label htmlFor="designation" className="form-label">
                Designation
              </label>
              <input
                value={values.designation}
                onChange={handleChange}
                id="designation"
                type="text"
                placeholder="Enter Designation"
                className={
                  errors.designation && touched.designation
                    ? "form-control input-error"
                    : "form-control"
                }
              />
              {errors.designation && touched.designation && (
                <p className="register-error">{errors.designation}</p>
              )}
            </div>
            <div className="form-group mt-2 p-3">
              <button disabled={isSubmitting} type="submit">
                Submit Form
              </button>
              <button type="reset">Reset Form</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
