import React from "react";
import classes from "./BasketProduct.module.scss";
import { AiOutlineClose } from "react-icons/ai";

const BasketProduct = ({
  name,
  image,
  colorName,
  size,
  deleteBasketItemHandler,
  quantity,
  price,
}) => {
  return (
    <div className={classes.product_block}>
      {/* Product block */}
      <div className={classes.product}>
        <div className={classes.product_info}>
          <img src={image} alt="" className={classes.img_basket} />

          <div className={classes.info}>
            <h2>{name}</h2>

            <div className={classes.product_description}>
              <p className={classes.parameters}>Кількість: {quantity}</p>
              <p className={classes.parameters}>Колір: {colorName}</p>
              <p className={classes.parameters}>Розмір: {size}</p>
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
      <div className={classes.product_price}>
        <p>{price} грн</p>
      </div>
    </div>
  );
};

export default BasketProduct;
