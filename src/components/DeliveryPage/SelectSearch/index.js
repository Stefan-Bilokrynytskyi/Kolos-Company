import React, { useState, useEffect, useRef } from "react";
import classes from "./SelectArea.module.scss";
import DropDown from "../../../icons/dropdown-black.svg";
import store from "../../../store/Products";
import { set, toJS } from "mobx";
import { observer } from "mobx-react-lite";

const SelectSearch = ({
  valueList,
  placesList,
  label,
  placeholder,
  fetchData,
  selectedValue,
  setSelectedValue,
  input,
}) => {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState("0px");
  const [places, setPlaces] = useState(placesList);
  const refHeight = useRef();

  useEffect(() => {
    setPlaces(placesList);
  }, [placesList]);

  useEffect(() => {
    if (refHeight.current && toggle) {
      let height = 36 * places.length;
      if (height > 150) height = 150;
      setHeightEl(`${height}px`);
    } else {
      setHeightEl("0px");
    }
  }, [toggle, places]);

  const toggleState = () => {
    setToggle(!toggle);
  };

  const optionSelectHandler = (option) => {
    console.log(input, option);
    setSelectedValue(input, option);
    setPlaces(placesList);

    toggleState();
    console.log(valueList);
    const refName = valueList.find((place) => place.name === option).refName;
    if (fetchData) fetchData(refName);
  };

  const inputHandler = (e) => {
    setToggle(true);
    const userInput = e.target.value;
    setSelectedValue(input, userInput);
    const selectedAreas = placesList.filter((place) =>
      place.toLowerCase().includes(userInput.toLowerCase())
    );
    setPlaces(selectedAreas);
  };

  const disabled = placesList.length === 0;
  return (
    <div className={classes.container}>
      <label
        className={`${classes.label} ${disabled && classes.disabled_label}`}
      >
        {label}
      </label>
      <div className={`${classes.accordion} ${disabled && classes.disabled}`}>
        <button
          className={classes.accordion_visible}
          onClick={toggleState}
          disabled={disabled}
        >
          <input
            type="text"
            placeholder={placeholder}
            value={selectedValue}
            className={classes.input}
            onChange={inputHandler}
            disabled={disabled}
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
              {places.map((place) => {
                return (
                  <li
                    key={place}
                    className={
                      selectedValue === place
                        ? classes.selectedValue
                        : classes.option
                    }
                    onClick={() => optionSelectHandler(place)}
                  >
                    {place}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectSearch;
