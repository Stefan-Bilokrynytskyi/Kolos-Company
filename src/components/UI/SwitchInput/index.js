import React from "react";
import classes from "./SwitchInput.module.scss";

const SwitchInput = ({ setInput }) => {
  return (
    <div className={classes.container}>
      <input
        type="checkbox"
        id="check"
        onInput={() => setInput((prev) => !prev)}
        className={classes.switch_input}
      />
      <label htmlFor="check" className={classes.button}></label>
      <div className={classes.text}>Я хочу, щоб зі мною зв'язався менеджер</div>
    </div>
  );
};

export default SwitchInput;
