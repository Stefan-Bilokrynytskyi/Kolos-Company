import React from "react";
import classes from "./BasketProductCard.module.scss";
import { AiOutlineClose } from "react-icons/ai";

const BasketProductCard = ({
  name,
  image,
  colorName,
  size,
  deleteBasketItemHandler,
  isAvailable,
  quantity,
}) => {
  return (
    <div className={classes.product_block}>
      {/* Product block */}
      <div className={classes.product}>
        <div className={classes.product_info}>
          <img src={image} alt="america" className={classes.img_basket} />

          <div className={classes.info}>
            <h2 className={classes.name}>{name}</h2>

            <div className={classes.product_description}>
              <p className={classes.characteristic}>
                <span className={classes.grey_text}>Колір:</span> {colorName}
              </p>
              <p className={classes.characteristic}>
                <span className={classes.grey_text}>Розмір:</span> {size}
              </p>
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
      {!isAvailable && (
        <div className={classes.not_available}>
          <p>
            Доступна кількість цього товару: {quantity}. Будь-ласка, зменшіть
            кількість товару для оформлення замовлення.
          </p>
        </div>
      )}
    </div>
  );
};

export default BasketProductCard;
