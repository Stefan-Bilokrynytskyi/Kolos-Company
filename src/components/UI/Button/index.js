import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => {
  const styles = props.customStyles || {};

  return (
    <button
      className={props.disabled ? classes.button_disabled : classes.button}
      style={styles}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
