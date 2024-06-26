import React from "react";
import classes from "./BasketNotification.module.scss";
import BasketProduct from "./BasketProduct";
import store from "../../../../store/Products";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import NotificationHeader from "./NotificationHeader";
import Button from "../../../../components/UI/Button";
import { useNavigate } from "react-router-dom";

const BasketNotification = observer(
  ({ id, colorName, size, setIsProductSelected }) => {
    const product = toJS(store.findProductInBasket({ id, colorName, size }));

    const deleteBasketItemHandler = () => {
      store.deleteFromBasket({ id, colorName, selectedSize: size });
      setIsProductSelected(false);
    };
    const navigate = useNavigate();
    const toBasketHandler = () => {
      store.setDeliveryPageSelected(false);
      navigate("/cart");
    };
    const toDeliveryHandler = () => {
      store.setDeliveryPageSelected(store.isBasketProductsAvailable());
      navigate("/cart");
    };

    return (
      <div className={classes.notification_container}>
        <NotificationHeader backToShopHandler={setIsProductSelected} />
        <BasketProduct
          name={product.name}
          image={product.selectedImage}
          colorName={product.colorName}
          quantity={product.quantity}
          price={product.price}
          deleteBasketItemHandler={deleteBasketItemHandler}
          size={product.selectedSize}
        />
        <div className={classes.buttons_container}>
          <Button onClick={toBasketHandler}>До касси</Button>
          <div className={classes.or}>AБО</div>
          <Button onClick={toDeliveryHandler}>Одразу до оплати</Button>
        </div>
      </div>
    );
  }
);

export default BasketNotification;
