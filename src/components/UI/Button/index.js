import React from "react";
import classes from "./Button.module.scss";

const Button = ({ customStyles, className, ...props }) => {
  const styles = customStyles || {};

  return (
    <button
      className={`${className}
        ${props.disabled ? classes.button_disabled : classes.button}`}
      style={styles}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type || "button"}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
