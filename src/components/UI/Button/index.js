import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => {
  const styles = props.customStyles || {};

  return (
    <div className={classes.button} style={styles} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Button;
