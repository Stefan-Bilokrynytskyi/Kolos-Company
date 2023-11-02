import React, { useState, useEffect, useRef } from "react";
import classes from "./Acсordion.module.scss";
import DropDown from "../../icons/dropdown.svg";
import { Link } from "react-router-dom";

export default function Accordion({ listMenu, name }) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState("auto"); // Изначально устанавливаем auto или другое значение по умолчанию

  const refHeight = useRef();

  useEffect(() => {
    if (refHeight.current && toggle) {
      setHeightEl(`${refHeight.current.scrollHeight}px`);
    } else {
      setHeightEl("auto");
    }
  }, [toggle]);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className={classes.accordion}>
      <button onClick={toggleState} className={classes.accordion_visible}>
        <span>{name}</span>
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
        style={{ height: heightEl }} // Применяем высоту стиля
        ref={refHeight}
      >
        {toggle && (
          <ul className={classes.list_categories}>
            {listMenu.map((menuItem, index) => (
              <li className={classes.menu_link} key={menuItem.props.to}>
                <Link to={menuItem.props.to}>{menuItem.props.children}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
