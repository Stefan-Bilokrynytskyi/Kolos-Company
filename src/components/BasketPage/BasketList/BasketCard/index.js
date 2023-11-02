import React from "react";
import classes from "./BasketCard.module.scss";
import store from "../../../../store/Products";
import { observer } from "mobx-react-lite";
import BasketOperations from "../BasketOperations";
import BasketProductCard from "../../../BasketProductCard";

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
        <BasketProductCard
          name={name}
          image={image}
          colorName={colorName}
          size={size}
          deleteBasketItemHandler={deleteBasketItemHandler}
        />
        <BasketOperations
          increaseNumber={increaseNumber}
          decreaseNumber={decreaseNumber}
          quantityItem={quantityItem}
          productPrice={productPrice}
        />
      </div>
    );
  }
);

export default BasketProduct;
