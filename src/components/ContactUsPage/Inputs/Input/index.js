import React from "react";

import classes from "./Input.module.scss";

const Input = ({ title, value, onChange, type, isValid }) => {
  const messageLength = "Довжина повинна бути більше 1 символа";
  const messageSymbol = "Введений недоступний символ";
  const messagePhoneLength = "Неправильний формат вводу номеру телефону";

  return (
    <div className={classes.input_container}>
      <label className={classes.label}>{title}</label>
      {type === "tel" ? (
        <div>
          <input
            className={classes.input}
            type={type}
            value={value}
            onChange={onChange}
          />

          {!isValid.value && (
            <div className={classes.valid}>
              {isValid.length > 9 ? messageSymbol : messagePhoneLength}
            </div>
          )}
        </div>
      ) : (
        <div>
          <input
            className={classes.input}
            type={type}
            value={value}
            onChange={onChange}
          />

          {!isValid.value && (
            <div className={classes.valid}>
              {isValid.length > 1 ? messageSymbol : messageLength}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
