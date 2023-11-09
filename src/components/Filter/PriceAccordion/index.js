import classes from "./PriceAccordion.module.scss";
import React, { useState, useEffect, useRef } from "react";
import DropDown from "../../../icons/dropdown.svg";
import PriceSlider from "./PriceSlider";

const PriceAccordion = ({ name, updateHeight, isOpen, getPriceFilters }) => {
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
    const newToggle = !toggle;
    if (newToggle) updateHeight(parseInt(refHeight.current.scrollHeight));
    else updateHeight(-parseInt(heightEl));
    const newHeight = newToggle ? `${refHeight.current.scrollHeight}px` : "0px";
    setHeightEl(newHeight);

    setToggle(newToggle);
  };

  return (
    <div
      className={classes.accordion}
      style={{ display: isOpen ? "none" : "block" }}
    >
      <button onClick={toggleState} className={classes.accordion_visible}>
        <span className={classes.name_category}>{name}</span>

        <div className={classes.flexend_container}>
          <img
            className={toggle ? classes.active : ""}
            src={DropDown}
            alt="dropdown"
          />
        </div>
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
        <PriceSlider getPriceFilters={getPriceFilters} />
      </div>
    </div>
  );
};

export default PriceAccordion;
