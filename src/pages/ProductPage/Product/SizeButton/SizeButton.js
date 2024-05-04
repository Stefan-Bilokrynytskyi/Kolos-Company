import React, { useState } from "react";
import classes from "./SizeButton.module.scss";

function SizeButton(props) {
  const size = props.children;

  const { selectedSize, handleSizeChange, available } = props;

  return (
    <button
      className={`${classes.size_button} ${available ? "" : classes.disabled}${
        selectedSize === size ? classes.selected : ""
      }`}
      onClick={() => handleSizeChange(size)}
      disabled={!available}
    >
      {size}
    </button>
  );
}

export default SizeButton;
