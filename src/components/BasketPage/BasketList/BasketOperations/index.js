import React from "react";
import classes from "./BasketOperations.module.scss";

const BasketOperations = ({ increaseNumber, decreaseNumber, quantityItem }) => {
  return (
    <div className={classes.operations}>
      {quantityItem > 0 && (
        <button onClick={decreaseNumber} disabled={quantityItem === 1}>
          -
        </button>
      )}
      <span className={classes.quantity}>{quantityItem}</span>
      <button onClick={increaseNumber}>+</button>
    </div>
  );
};
export default BasketOperations;
