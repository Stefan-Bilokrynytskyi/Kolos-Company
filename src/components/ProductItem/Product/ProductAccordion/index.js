import React, { useState, useEffect, useRef } from "react";
import classes from "./ProductAccordion.module.scss";
import DropDown from "../../../../icons/dropdown-black.svg";

export default function ProductAccordion({ name, text }) {
  console.log(typeof text);
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState("0px");
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

  return (
    <div className={classes.accordion}>
      <button onClick={toggleState} className={classes.accordion_visible}>
        <span className={classes.name_category}>{name}</span>
        <img
          className={toggle ? classes.active : ""}
          src={DropDown}
          alt="dropdown"
          style={{ width: "20px", height: "20px" }}
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
        {toggle && <div className={classes.description}>{text}</div>}
      </div>
    </div>
  );
}
