import React from "react";
import classes from "./BasketProductCard.module.scss";
import { AiOutlineClose } from "react-icons/ai";

const BasketProductCard = ({
  name,
  image,
  colorName,
  size,
  deleteBasketItemHandler,
}) => {
  return (
    <div className={classes.product_block}>
      {/* Product block */}
      <div className={classes.product}>
        <div className={classes.product_info}>
          <img src={image} alt="america" className={classes.img_basket} />

          <div className={classes.info}>
            <h2>{name}</h2>

            <div className={classes.product_description}>
              <p>Колір: {colorName}</p>
              <p>Розмір: {size}</p>
            </div>
          </div>
        </div>

        <div className={classes.cross_container}>
          <AiOutlineClose
            className={classes.cross}
            onClick={() => deleteBasketItemHandler()}
          />
        </div>
      </div>
    </div>
  );
};

export default BasketProductCard;
