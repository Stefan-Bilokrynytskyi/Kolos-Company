import React from "react";
import classes from "./NotificationHeader.module.scss";
import leftArrow from "../../../../../icons/left-arrow.svg";
import Stripe from "../../../../../components/UI/Stripe";

const NotificationHeader = ({ backToShopHandler }) => {
  return (
    <div className={classes.header_container}>
      <div className={classes.flex_container}>
        <img
          src={leftArrow}
          alt="left-arrow"
          onClick={() => backToShopHandler(false)}
        />
        <div onClick={() => backToShopHandler(false)} className={classes.text}>
          {" "}
          Назад до покупок
        </div>
      </div>

      <Stripe customStyles={{ width: "100%" }} />
    </div>
  );
};

export default NotificationHeader;
