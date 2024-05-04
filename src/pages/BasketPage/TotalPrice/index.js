import { observer } from "mobx-react-lite";
import React from "react";
import store from "../../../store/Products";
import classes from "./TotalPrice.module.scss";
import Stripe from "../../../components/UI/Stripe";

const TotalPrice = observer(() => {
  const totalBasketPrice = store.calculateTotalPrice();

  return (
    <div className={classes.total_price_block}>
      <div className={classes.total_price_container}>
        <div className={classes.price_info}>
          <h2>Загальна сума</h2>
          <p>{totalBasketPrice} грн</p>
          <Stripe />
        </div>

        <h3 className={classes.recomendations_title}>
          Це може також вам сподобатися
        </h3>
        <Stripe />
      </div>
    </div>
  );
});

export default TotalPrice;
