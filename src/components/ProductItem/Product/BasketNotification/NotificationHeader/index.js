import React from "react";

import classes from "./NotificationHeader.module.scss";
import leftArrow from "../../../../../icons/left-arrow.svg";

const NotificationHeader = ({ backToShopHandler }) => {
  return (
    <div className={classes.header_container}>
      <div className={classes.flex_container}>
        <img
          src={leftArrow}
          alt="left-arrow"
          onClick={() => backToShopHandler(false)}
        />
        <div onClick={() => backToShopHandler(false)}> Назад до покупок</div>
      </div>

      <div className={classes.stripe}></div>
    </div>
  );
};

export default NotificationHeader;
