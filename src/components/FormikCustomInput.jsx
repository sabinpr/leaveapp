import React from "react";
import { useField } from "formik";

export const FormikCustomField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  // console.log("field", field);
  // console.log("meta", meta);
  // console.log("helpers", helpers);
  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
    </>
  );
};

export const FormikCustomSelect = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.error && meta.touched && <p className="error">{meta.error}</p>}
    </>
  );
};

export const FormikCustomRadio = ({label, ...props }) => {
  const [field, meta, helpers, option] = useField(props);
  return (
    <>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.error && meta.touched && <p className="error">{meta.error}</p>}
    </>
  );
};
