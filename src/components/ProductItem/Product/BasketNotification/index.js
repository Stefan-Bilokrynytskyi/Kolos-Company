import React from "react";
import classes from "./BasketNotification.module.scss";
import BasketProduct from "./BasketProduct";
import store from "../../../../store/Products";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import NotificationHeader from "./NotificationHeader";
import { Link } from "react-router-dom";

const BasketNotification = observer(
  ({ id, colorName, size, setIsProductSelected }) => {
    const product = toJS(store.findProductInBasket({ id, colorName, size }));
    console.log(product);
    const deleteBasketItemHandler = () => {
      store.deleteFromBasket({ id, colorName, selectedSize: size });
      setIsProductSelected(false);
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
          <Link to="/basket" className={classes.link}>
            <button className={classes.btn}>До касси</button>
          </Link>

          <div className={classes.or}>AБО</div>
          <button className={classes.btn}>Одразу до оплати</button>
        </div>
      </div>
    );
  }
);

export default BasketNotification;
