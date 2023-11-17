import React from "react";
import { useEffect } from "react";
import classes from "./BasketList.module.scss";
import BasketCard from "./BasketCard";
import store from "../../../store/Products";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import PageCaption from "../../UI/PageCaption";

const BasketList = observer(() => {
  useEffect(() => {
    const storedBasket = localStorage.getItem("basket");

    if (storedBasket) {
      store.setNewBasket(JSON.parse(storedBasket));
    }
  }, []);
  const basketData = toJS(store.basket);
  console.log(basketData);

  const findAvailableQuantity = (product, index) => {
    const availableQuantity = basketData[index].sizes_color_quantity.find(
      (item) =>
        item.color === product.colorName && item.size === product.selectedSize
    ).quantity;
    return availableQuantity;
  };

  const basketList = basketData.map((product, index) => (
    <BasketCard
      id={product.id}
      name={product.name}
      price={product.price}
      image={product.selectedImage}
      colorName={product.colorName}
      size={product.selectedSize}
      quantity={product.quantity}
      availableQuantity={findAvailableQuantity(product, index)}
      key={product.colorName + product.selectedSize}
    />
  ));
  return (
    <div>
      <div className={classes.basket}>
        <div className={classes.basket_container}>
          <PageCaption caption="Кошик" />

          <button className={classes.btn}>До касси</button>
          {basketList}
        </div>
      </div>
    </div>
  );
});

export default BasketList;
