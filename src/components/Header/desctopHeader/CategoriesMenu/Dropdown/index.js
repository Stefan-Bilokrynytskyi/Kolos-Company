import React, { useState, useEffect, useRef } from "react";
import classes from "./Dropdown.module.scss";
import DropDown from "../../../../../icons/dropdown-black.svg";

export default function Accordion({ listMenu, name, isOpen, setIsOpen }) {
  // const [toggle, setToggle] = useState(isToggle);

  // const toggleState = () => {
  //   setToggle(!toggle);
  // };

  return (
    <div className={classes.accordion}>
      <button onClick={setIsOpen} className={classes.accordion_visible}>
        <span className={classes.name_category}>{name}</span>
        <img
          className={isOpen ? `${classes.active}` : ""}
          src={DropDown}
          alt="dropdown"
        />
      </button>

      <div
        className={
          isOpen
            ? `${classes.accordion_toggle} ${classes.animated}`
            : `${classes.accordion_toggle}`
        }
      >
        {isOpen && (
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
