import React from "react";
import classes from "./BasketOperations.module.scss";
import Stripe from "../../../UI/Stripe";

const BasketOperations = ({
  increaseNumber,
  decreaseNumber,
  quantityItem,
  productPrice,
  isIncreaseDisabled,
}) => {
  console.log(quantityItem);
  console.log(typeof quantityItem);
  return (
    <>
      <div className={classes.counter}>
        <div className={classes.operations}>
          {quantityItem > 0 && (
            <button
              className={`${classes.btn} ${
                quantityItem === 1 && classes.disabled
              }`}
              onClick={decreaseNumber}
              disabled={quantityItem === 1}
            >
              −
            </button>
          )}
          <span className={classes.quantity}>{quantityItem}</span>
          <button
            className={`${classes.btn} ${
              isIncreaseDisabled && classes.disabled
            }`}
            onClick={increaseNumber}
            disabled={isIncreaseDisabled}
          >
            +
          </button>
        </div>
        <div className={classes.price}>{productPrice.toFixed(2)} грн</div>
      </div>
    </>
  );
};
export default BasketOperations;
