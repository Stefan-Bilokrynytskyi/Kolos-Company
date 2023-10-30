import React from "react";
import classes from "./Basket.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import store from "../../../../store/Products";
import { observer } from "mobx-react-lite";

const BasketProduct = observer(
  ({ id, name, price, image, colorName, size, quantity }) => {
    const [quantityItem, setCount] = React.useState(quantity);
    const [productPrice, setPrice] = React.useState(price * quantity);

    const increaseNumber = () => {
      setCount((count) => ++count);
      setPrice((priceForNow) => +priceForNow + +price);
    };

    const decreaseNumber = () => {
      setCount((count) => --count);
      setPrice((priceForNow) => +priceForNow - +price);
    };

    const deleteBasketItemHandler = () => {
      store.deleteFromBasket({ id, colorName, selectedSize: size });
    };

    return (
      <div className={classes.product_container}>
        <div className={classes.product_block}>
          {/* Product block */}
          <div className={classes.product}>
            <div className={classes.product_info}>
              <img src={image} alt="" className={classes.img_basket} />

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

          {/* Increase, decrease */}
          <div className={classes.counter}>
            <div className={classes.operations}>
              {quantityItem > 0 && (
                <button onClick={decreaseNumber} disabled={quantityItem === 1}>
                  -
                </button>
              )}
              <span className={classes.quantity}>{quantityItem}</span>
              <button onClick={increaseNumber}>+</button>
            </div>

            <div className={classes.price}>{productPrice.toFixed(2)}</div>
          </div>
        </div>
      </div>
    );
  }
);

export default BasketProduct;
