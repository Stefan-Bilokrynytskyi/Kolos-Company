import React from "react";
import classes from "./SwitchInput.module.scss";

const SwitchInput = () => {
  return (
    <div className={classes.container}>
      <input type="checkbox" id="check" className={classes.switch_input} />
      <label htmlFor="check" className={classes.button}></label>
      <div className={classes.text}>Я хочу, щоб зі мною зв'язався менеджер</div>
    </div>
  );
};

export default SwitchInput;
