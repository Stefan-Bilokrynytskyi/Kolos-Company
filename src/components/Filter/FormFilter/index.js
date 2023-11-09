import React, { useState } from "react";
import classes from "./FormFilter.module.scss";

function FormFilter({ filters, getSizeFilters, currentSizes }) {
  const [checkboxStates, setCheckboxStates] = useState(
    filters.reduce((acc, filter) => {
      acc[filter] = currentSizes.includes(filter) ? true : false;
      return acc;
    }, {})
  );

  const handleCheckboxChange = (filter) => {
    const newCheckboxStates = {
      ...checkboxStates,
      [filter]: !checkboxStates[filter],
    };
    setCheckboxStates(newCheckboxStates);
    getSizeFilters(newCheckboxStates);
  };

  return (
    <div className={classes.form_container}>
      {filters.map((filter) => (
        <label key={filter} className={classes.label_container}>
          <input
            type="checkbox"
            checked={checkboxStates[filter]}
            onChange={() => {
              handleCheckboxChange(filter);
            }}
          />
          <div className={classes.filter}>{filter}</div>
        </label>
      ))}
    </div>
  );
}

export default FormFilter;
