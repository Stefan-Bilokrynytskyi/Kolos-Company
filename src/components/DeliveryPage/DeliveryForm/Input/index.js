import React from "react";

import classes from "./Input.module.scss";

const Input = ({ title, value, onChange, type, isValid }) => {
  const messageLength = "Довжина повинна бути більше 1 символа";
  const messageSymbol = "Введений недоступний символ";

  return (
    <div className={classes.input_container}>
      <label className={classes.label}>{title}</label>
      {type === "tel" ? (
        <div className={classes.tel_container}>
          <div className={classes.phone_default}>
            <div>+380</div>
          </div>
          <input
            className={classes.tel_input}
            type={type}
            value={value}
            onChange={onChange}
          />
        </div>
      ) : (
        <input
          className={classes.input}
          type={type}
          value={value}
          onChange={onChange}
        />
      )}

      {!isValid.value && (
        <div className={classes.valid}>
          {isValid.length > 1 ? messageSymbol : messageLength}
        </div>
      )}
    </div>
  );
};

export default Input;
