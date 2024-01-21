import { observer } from "mobx-react-lite";
import React from "react";
import store from "../../../store/Products";
import classes from "./TotalPrice.module.scss";

const TotalPrice = observer(() => {
  const totalBasketPrice = store.calculateTotalPrice();

  return (
    <div className={classes.total_price_block}>
      <div className={classes.total_price_container}>
        <div className={classes.price_info} style={{}}>
          <h2>Загальна сума</h2>
          <p>{totalBasketPrice} грн</p>
        </div>
        <hr />
        <h3 className={classes.recomendations_title}>
          Це може також вам сподобатися
        </h3>
        <hr style={{ borderBottom: "2px solid #000" }} />
      </div>
    </div>
  );
});

export default TotalPrice;
