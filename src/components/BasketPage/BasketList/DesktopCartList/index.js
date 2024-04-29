import React from "react";
import { useEffect } from "react";
import classes from "./DesktopCartList.module.scss";
import BasketCard from "../BasketCard";
import store from "../../../../store/Products";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import Button from "../../../UI/Button";
import Total from "../../../DeliveryPage/Total";
import Stripe from "../../../UI/Stripe";

const DesktopBasketList = observer(({ toCashierHandler }) => {
  useEffect(() => {
    const storedBasket = localStorage.getItem("basket");

    if (storedBasket) {
      store.setNewBasket(JSON.parse(storedBasket));
    }
  }, []);
  const basketData = toJS(store.basket);
  // console.log(basketData);

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
    <>
      <h1 className={classes.caption}>Кошик</h1>
      <div className={classes.flex_container}>
        <div className={classes.products_container}>
          <Stripe customStyles={{ top: "0" }} />
          {basketList}
        </div>
        <div className={classes.overall}>
          <Total />
          <Button
            onClick={toCashierHandler}
            customStyles={{ marginBottom: "9px", marginTop: "20px" }}
            disabled={!store.isBasketProductsAvailable()}
          >
            До касси
          </Button>
        </div>
      </div>
    </>
  );
});

export default DesktopBasketList;
