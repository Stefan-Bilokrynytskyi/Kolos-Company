import "./PriceSlider.css";
import React, { useState, useEffect } from "react";
import store from "../../../../store/Products";
import Slider from "react-slider";
import { observer } from "mobx-react-lite";

import { useLocation } from "react-router-dom";

const PriceSlider = observer(({ getPriceFilters }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  let minPrice = Number(searchParams.get("min_price")) || store.minPrice;
  let maxPrice = Number(searchParams.get("max_price")) || store.maxPrice;
  if (minPrice < store.minPrice) minPrice = store.minPrice;
  if (maxPrice > store.maxPrice) maxPrice = store.maxPrice;
  if (maxPrice < minPrice) maxPrice = store.maxPrice;
  if (minPrice > maxPrice) minPrice = store.minPrice;

  const [values, setValues] = useState([minPrice, maxPrice]);

  useEffect(() => {
    setValues([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  const onChangeHandler = (values) => {
    getPriceFilters(values[0], values[1]);
    setValues(values);
    store.setIsFiltersChanged(true);
  };

  return (
    <div>
      <Slider
        className={"slider_price"}
        onChange={onChangeHandler}
        value={values}
        min={store.minPrice}
        max={store.maxPrice}
        pearling={false}
      />
      <div className={"slider_price_values"}>
        <span>
          {values[0]} - {values[1]} грн
        </span>
      </div>
    </div>
  );
});

export default PriceSlider;
