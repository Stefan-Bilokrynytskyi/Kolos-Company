import React, { useState, useEffect, useRef } from "react";
import classes from "./SelectArea.module.scss";
import DropDown from "../../../icons/dropdown-black.svg";
import store from "../../../store/Products";
import { set } from "mobx";

export default function SelectSearch({
  timeChanger,
  valueList,
  label,
  placeholder,
  nextStep,
}) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState("0px");
  const [selectedValue, setSelectedValue] = useState("");
  const [areas, setAreas] = useState(valueList);
  const refHeight = useRef();

  useEffect(() => {
    if (refHeight.current && toggle) {
      let height = 36 * areas.length;
      if (height > 150) height = 150;
      setHeightEl(`${height}px`);
    } else {
      setHeightEl("0px");
    }
  }, [toggle, areas]);

  const toggleState = () => {
    setToggle(!toggle);
  };

  const optionSelectHandler = (option) => {
    setSelectedValue(option);
    setAreas(valueList);
    //timeChanger(option);
    toggleState();
  };

  const inputHandler = (e) => {
    setToggle(true);
    const userInput = e.target.value;
    setSelectedValue(userInput);
    const selectedAreas = valueList.filter((area) =>
      area.toLowerCase().includes(userInput.toLowerCase())
    );
    setAreas(selectedAreas);
  };

  if (valueList.includes(selectedValue)) {
    async function fetchData() {
      try {
        await store.fetchCities(selectedValue);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }
  return (
    <div className={classes.container}>
      <label className={classes.label}>{label}</label>
      <div className={classes.accordion}>
        <button className={classes.accordion_visible} onClick={toggleState}>
          <input
            type="text"
            placeholder={placeholder}
            value={selectedValue}
            className={classes.input}
            onChange={inputHandler}
          />
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
              {areas.map((area) => {
                return (
                  <li
                    key={area}
                    className={
                      selectedValue === area
                        ? classes.selectedValue
                        : classes.option
                    }
                    onClick={() => optionSelectHandler(area)}
                  >
                    {area}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
