import "./PriceSlider.css";
import React, { useState, useEffect, useRef } from "react";
import store from "../../../../store/Products";
import Slider from "react-slider";
import { set } from "mobx";

const PriceSlider = ({ getPriceFilters }) => {
  const [values, setValues] = useState([store.minPrice, store.maxPrice]);
  const onChangeHandler = (values) => {
    getPriceFilters(values[0], values[1]);
    setValues(values);
  };

  return (
    <div>
      <Slider
        className={"slider_price"}
        onChange={onChangeHandler}
        value={values}
        min={store.minPrice}
        max={store.maxPrice}
      />
      <div className={"slider_price_values"}>
        <span>
          {values[0]} - {values[1]} грн
        </span>
      </div>
    </div>
  );
};

export default PriceSlider;
