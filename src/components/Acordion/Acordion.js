import React, { useState, useEffect, useRef } from "react";
import classes from "./Acordion.module.scss";
import DropDown from "../../icons/dropdown.svg";
import { Link } from "react-router-dom"; // Import Link

export default function Accordion({ listMenu }) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className={classes.accordion}>
      <button onClick={toggleState} className={classes.accordion_visible}>
        <span>Жінки</span>
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
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}
      >
        <ul className={classes.list_categories}>
          {listMenu.map((menuItem, index) => (
            <li className={classes.menu_link} key={menuItem.props.to}>
              <Link to={menuItem.props.to}>{menuItem.props.children}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
