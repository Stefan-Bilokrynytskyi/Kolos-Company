import classes from "./Filter.module.scss";
import React, { useState, useEffect, useRef } from "react";
import DropDown from "../../icons/dropdown.svg";
import { Link } from "react-router-dom";
import FilterIcon from "../../icons/filter.svg";
import SizeAccordion from "./SizeAccordion";
import { observer } from "mobx-react-lite";
import store from "../../store/Products";
import { useLocation } from "react-router-dom";

const Filter = observer(({ name }) => {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState("0px");
  const [isParentOpen, setParentOpen] = useState(false);
  const [action, setAction] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let currentPage = searchParams.get("size");
  console.log(location.search);

  const [urlSizes, setUrlSizes] = useState([]);

  // Функция для обновления высоты
  const updateHeight = (childHeight) => {
    setHeightEl((heightEl) => `${parseInt(heightEl) + childHeight}px`);
  };
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
    setParentOpen(!isParentOpen);
  };

  const getSizeFilters = (sizeFilters) => {
    const newUrlSizes = Object.keys(sizeFilters)
      .filter((size) => sizeFilters[size])
      .map((size) => "&size=" + size);
    setUrlSizes(newUrlSizes);
  };

  const clearFiltersHandler = () => {};

  const submitHandler = (event) => {
    event.preventDefault();
    if (action === "apply") {
      const regex = /(\?|&)(size|page)=[^&]*/g;

      const newUrl = store.url.replace(regex, "");
      const newUrlSizes = urlSizes.join("");
      store.setUrl(newUrl + newUrlSizes);

      console.log(store.url);
      window.location.href = store.url;

      setAction(null);
    } else if (action === "clear") {
      // Ваша логика для кнопки "Очистити"
    } else return;
  };

  return (
    <div className={classes.accordion}>
      <button onClick={toggleState} className={classes.accordion_visible}>
        <span className={classes.name_category}>{name}</span>
        <img src={FilterIcon} alt="filter" />
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
        <div className={classes.filters_container}>
          <form onSubmit={submitHandler}>
            <SizeAccordion
              name={"Розмір"}
              updateHeight={updateHeight}
              isOpen={!isParentOpen}
              getSizeFilters={getSizeFilters}
            />
            <div className={classes.control_buttons}>
              <button
                className={classes.control_button}
                type="submit"
                onClick={() => setAction("apply")}
              >
                Застосувати
              </button>

              <button
                className={classes.control_button}
                onClick={clearFiltersHandler}
              >
                Очистити
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

export default Filter;
