import React from "react";
import classes from "./BasketCard.module.scss";
import store from "../../../../store/Products";
import { observer } from "mobx-react-lite";
import BasketOperations from "../BasketOperations";
import BasketProductCard from "../../../BasketProductCard";

const BasketProduct = observer(
  ({
    id,
    name,
    price,
    image,
    colorName,
    size,
    quantity,
    availableQuantity,
  }) => {
    const [quantityItem, setCount] = React.useState(quantity);
    const [productPrice, setPrice] = React.useState(price * quantity);
    const [isAvailable, setIsAvailable] = React.useState(
      availableQuantity >= quantity
    );
    const [isIncreaseDisabled, setIsIncreaseDisabled] = React.useState(
      availableQuantity <= quantity
    );
    const increaseNumber = () => {
      setCount((count) => ++count);
      setPrice((priceForNow) => +priceForNow + +price);
      store.increaseProductQuantity(id, colorName, size);
      if (quantityItem + 1 === availableQuantity) setIsIncreaseDisabled(true);
    };

    const decreaseNumber = () => {
      if (quantityItem > 0) {
        setCount((count) => --count);
        setPrice((priceForNow) => +priceForNow - +price);
        store.decreaseProductQuantity(id, colorName, size);
        if (quantityItem - 1 <= availableQuantity) setIsAvailable(true);
        if (quantityItem - 1 < availableQuantity) setIsIncreaseDisabled(false);
      }
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
          isAvailable={isAvailable}
          quantity={availableQuantity}
        />
        <BasketOperations
          increaseNumber={increaseNumber}
          decreaseNumber={decreaseNumber}
          quantityItem={quantityItem}
          productPrice={productPrice}
          isIncreaseDisabled={isIncreaseDisabled}
        />
      </div>
    );
  }
);

export default BasketProduct;
