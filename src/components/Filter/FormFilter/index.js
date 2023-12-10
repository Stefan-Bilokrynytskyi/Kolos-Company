import React, { useState } from "react";
import classes from "./FormFilter.module.scss";
import store from "../../../store/Products";
import checked from "../../../icons/checked.svg";

function FormFilter({ filters, getSizeFilters, currentSizes }) {
  const [checkboxStates, setCheckboxStates] = useState(
    filters.reduce((acc, filter) => {
      acc[filter] = currentSizes.includes(filter) ? true : false;
      return acc;
    }, {})
  );

  store.setClearCheckboxes(setCheckboxStates);

  const handleCheckboxChange = (filter) => {
    const newCheckboxStates = {
      ...checkboxStates,
      [filter]: !checkboxStates[filter],
    };
    setCheckboxStates(newCheckboxStates);
    getSizeFilters(newCheckboxStates);
    store.setIsFiltersChanged(true);
  };

  return (
    <div className={classes.form_container}>
      {filters.map((filter) => (
        <div key={filter} className={classes.label_container}>
          <input
            className={classes.checkbox}
            type="checkbox"
            checked={checkboxStates[filter]}
            onChange={() => {
              handleCheckboxChange(filter);
            }}
          />
          <label className={classes.label}></label>
          <div className={classes.filter}>{filter}</div>
        </div>
      ))}
    </div>
  );
}

export default FormFilter;
