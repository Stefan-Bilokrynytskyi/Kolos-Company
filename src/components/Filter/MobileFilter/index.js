import classes from "./Filter.module.scss";
import React, { useState, useEffect, useRef } from "react";
import DropDown from "../../../icons/dropdown-white.svg";
import FilterIcon from "../../../icons/filter.svg";
import SizeAccordion from "./SizeAccordion";
import { observer } from "mobx-react-lite";
import store from "../../../store/Products";
import { useLocation } from "react-router-dom";
import PriceAccordion from "./PriceAccordion";
import { useNavigate } from "react-router-dom";

const MobileFilter = observer(() => {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState("0px");
  const [isParentOpen, setParentOpen] = useState(false);
  const [action, setAction] = useState(null);
  const [urlSizes, setUrlSizes] = useState([]);
  const [priceFilters, setPriceFilters] = useState("");
  const [isClearButtonDisabled, setIsClearButtonDisabled] = useState(
    store.url.match(/(\?|&)(min_price|size)=[^&]*/g) === null
  );

  const navigate = useNavigate();

  const location = useLocation();

  const regex = /size=([A-Za-z]+)/g;

  const sizesArray = location.search.match(regex);

  const currentSizes = sizesArray
    ? sizesArray.map((size) => size.split("=")[1])
    : [];

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
    store.setSizeFilterChanged(true);
  };

  const getPriceFilters = (min, max) => {
    setPriceFilters(`&min_price=${min}&max_price=${max}`);
    store.setPriceFilterChanged(true);
  };

  const clearFiltersHandler = () => {
    if (isClearButtonDisabled) return;
    // store.setIsFiltersChanged(false);
    // store.setSizeFilterChanged(false);
    // store.setPriceFilterChanged(false);
    store.setCheckboxStates({ S: false, M: false, L: false, XL: false });
    store.setClearValues([store.minPrice, store.maxPrice]);
    setUrlSizes([]);
    setPriceFilters("");
    let newUrl = store.url;
    setIsClearButtonDisabled(true);
    const regex = /(\?|&)(size|page|min_price|max_price)=[^&]*/g;
    newUrl = newUrl.replace(regex, "");
    store.setUrl(newUrl);
    navigate(newUrl);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (action === "apply") {
      let newUrl = store.url;

      if (store.isSizeFilterChanged) {
        console.log(newUrl);
        const regex = /(\?|&)(size|page)=[^&]*/g;
        newUrl = newUrl.replace(regex, "");
        console.log(newUrl);
        const newUrlSizes = urlSizes.join("");
        newUrl += newUrlSizes;
      }
      if (store.isPriceFilterChanged) {
        const regex = /(\?|&)(page|min_price|max_price)=[^&]*/g;
        newUrl = newUrl.replace(regex, "");
        newUrl += priceFilters;
      }
      console.log(newUrl);

      store.setUrl(newUrl);

      navigate(newUrl);
      setIsClearButtonDisabled(
        store.url.match(/(\?|&)(min_price|size)=[^&]*/g) === null
      );
      store.setIsFiltersChanged(false);
      store.setSizeFilterChanged(false);
      store.setPriceFilterChanged(false);
      setAction(null);
    } else return;
  };

  return (
    <div className={classes.accordion}>
      <button onClick={toggleState} className={classes.accordion_visible}>
        <span className={classes.name_category}>Фільтр</span>
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
            <PriceAccordion
              name={"Ціна"}
              updateHeight={updateHeight}
              isOpen={!isParentOpen}
              getPriceFilters={getPriceFilters}
            />
            <SizeAccordion
              name={"Розмір"}
              updateHeight={updateHeight}
              isOpen={!isParentOpen}
              getSizeFilters={getSizeFilters}
              currentSizes={currentSizes}
            />
            <div className={classes.control_buttons}>
              <button
                className={classes.control_button}
                style={{ color: isClearButtonDisabled ? "gray" : "#f6f6f6" }}
                onClick={clearFiltersHandler}
              >
                Очистити
              </button>
              <button
                className={classes.control_button}
                style={{ color: store.isFiltersChanged ? "#f6f6f6" : "gray" }}
                type="submit"
                onClick={() => setAction("apply")}
                disabled={!store.isFiltersChanged}
              >
                Застосувати
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

export default MobileFilter;
