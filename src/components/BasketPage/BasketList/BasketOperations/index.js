import React from "react";
import classes from "./BasketOperations.module.scss";

const BasketOperations = ({
  increaseNumber,
  decreaseNumber,
  quantityItem,
  productPrice,
  isIncreaseDisabled,
}) => {
  return (
    <>
      <div className={classes.counter}>
        <div className={classes.operations}>
          {quantityItem > 0 && (
            <button onClick={decreaseNumber} disabled={quantityItem === 1}>
              -
            </button>
          )}
          <span className={classes.quantity}>{quantityItem}</span>
          <button onClick={increaseNumber} disabled={isIncreaseDisabled}>
            +
          </button>
        </div>
        <div className={classes.price}>{productPrice.toFixed(2)}</div>
      </div>
      <hr></hr>
    </>
  );
};
export default BasketOperations;
