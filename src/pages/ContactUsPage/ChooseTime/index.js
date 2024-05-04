import React, { useState, useEffect, useRef } from "react";
import classes from "./ChooseTime.module.scss";
import DropDown from "../../../icons/dropdown-black.svg";

const timeValues = [
  "08:00 - 10:00",
  "10:00 - 12:00",
  "12:00 - 14:00",
  "14:00 - 16:00",
  "16:00 - 18:00",
];

export default function ChooseTime({ timeChanger }) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState("0px");
  const [selectedValue, setSelectedValue] = useState("Оберіть час");

  const refHeight = useRef();

  useEffect(() => {
    if (refHeight.current && toggle) {
      setHeightEl(`${refHeight.current.scrollHeight}px`);
    } else {
      setHeightEl("0px");
    }
  }, [toggle]);

  const toggleState = () => {
    setToggle(!toggle);
  };

  const optionSelectHandler = (option) => {
    setSelectedValue(option);
    timeChanger(option);
    toggleState();
  };

  return (
    <div className={classes.container}>
      <label className={classes.label}>Коли вам зателефонувати?</label>
      <div className={classes.accordion}>
        <button onClick={toggleState} className={classes.accordion_visible}>
          <span
            className={classes.name_category}
            style={selectedValue === "Оберіть час" ? { color: "#909090" } : {}}
          >
            {selectedValue}
          </span>
          <img
            className={toggle ? classes.active : ""}
            src={DropDown}
            alt="dropdown"
          />
        </button>

        <div
          className={
            toggle
              ? `${classes.accordion_toggle} ${classes.animated}`
              : `${classes.accordion_toggle}`
          }
          style={{ height: heightEl }}
          ref={refHeight}
        >
          {toggle && (
            <ul className={classes.list_categories}>
              {timeValues.map((time) => (
                <li
                  key={time}
                  className={
                    selectedValue === time
                      ? classes.selectedValue
                      : classes.option
                  }
                  onClick={() => optionSelectHandler(time)} // Исправлено здесь
                >
                  {time}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
