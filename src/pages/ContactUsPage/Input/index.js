import React from "react";

import classes from "./Input.module.scss";

const Input = ({ title, type, isValid, ...props }) => {
  return (
    <div className={classes.input_container}>
      <label className={classes.label}>{title}</label>

      <div>
        <input className={classes.input} type={type} {...props} />

        {!isValid.value && (
          <div className={classes.valid}>{isValid.message}</div>
        )}
      </div>
    </div>
  );
};

export default Input;
