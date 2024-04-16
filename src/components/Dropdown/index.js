import React, { useState, useEffect, useRef } from "react";
import classes from "./Dropdown.module.scss";
import DropDown from "../../icons/dropdown-black.svg";

export default function Dropdown({
  listMenu,
  name,
  isOpen,
  setIsOpen,
  children,
}) {
  console.log(children);
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
        {isOpen && children}
      </div>
    </div>
  );
}
