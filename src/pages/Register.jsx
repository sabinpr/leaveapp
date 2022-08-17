import { Formik, Form } from "formik";
import TextField from "../components/TextField";
import * as Yup from "yup";

const Register = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div className="form-background">
          <div className="Auth-form-container">
            <div className="Auth-form">
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Register</h3>
                <Form>
                  <TextField label="First Name" name="firstName" type="text" />
                  <TextField label="Last Name" name="lastName" type="text" />
                  <TextField label="Email" name="email" type="email" />
                  <TextField label="Password" name="password" type="password" />
                  <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                  />
                  <button className="btn btn-dark mt-3 mb-2 mr-3" type="submit">
                    Register
                  </button>
                  <button className="btn btn-danger mt-3 mb-2" type="reset">
                    Reset
                  </button>
                </Form>
              </div>
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
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Register;