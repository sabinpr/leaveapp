import React from "react";
import { ErrorMessage, useField } from "formik";

export const FormikCustomField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-3">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
          {...field} {...props}
          autoComplete="off"
        />
        <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};

export const FormikCustomSelect = ({ label, ...props }) => {
  const [field, meta, ] = useField(props);
  return (
    <div className="mb-3">
      <label htmlFor={field.name}>{label}</label>
      <select
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
          {...field} {...props}
          autoComplete="off"
      />
      {meta.error && meta.touched && <p className="error">{meta.error}</p>}
    </div>
  );
};

