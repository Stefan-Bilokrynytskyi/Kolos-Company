import React, { useState, useEffect, useRef } from "react";
import classes from "./Acсordion.module.scss";
import DropDown from "../../icons/dropdown-white.svg";

export default function Accordion({ listMenu, name }) {
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
          className={toggle ? `${classes.active}` : ""}
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
            {listMenu.map((menuItem, index) => (
              <li className={classes.menu_link} key={index}>
                {menuItem}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
