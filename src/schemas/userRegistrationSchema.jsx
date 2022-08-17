import * as yup from "yup";
export const registerSchema = yup.object().shape({
  firstName: yup.string().required(),
  middleName: yup.string(),
  lastName: yup.string().required(),
  address: yup.string().required(),
  phone: yup.string().required(),
  email: yup
    .string()
    .email("Please enter a email")
    .required(),
  password: yup
    .string()
    .min(8)
    .required(),
  //   gender: yup.string("Please select a gender").required(),
  dob: yup.string().required(),
  role: yup.string(),
  companyId: yup.string().required(),
  designation: yup.string().required(),
});

export const userRegisterSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(1, "First Name Cannot Be Left Empty ")
    .required(),
  middleName: yup.string(),
  lastName: yup
    .string()
    .min(1, "Last Name Cannot Be Left Empty ")
    .required(),
  address: yup
    .string()
    .min(1, "Address Cannot Be Left Empty ")
    .required(),
  phone: yup
    .string()
    .min(1, "Contact Information Cannot Be Left Empty ")
    .required(),
  email: yup
    .string()
    .email("Please enter a email")
    .required(),
  password: yup
    .string()
    .min(8)
    .required(),
  gender: yup
    .string()
    .oneOf(["male", "female", "other"])
    .required(),
  dob: yup.string().required(),
  role: yup.string(),
  companyId: yup.string().required(),
  designation: yup.string().required(),
});
