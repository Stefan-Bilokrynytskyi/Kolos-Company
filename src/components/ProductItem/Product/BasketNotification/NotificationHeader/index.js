import React from "react";

import classes from "./NotificationHeader.module.scss";
import { AiOutlineClose } from "react-icons/ai";

const NotificationHeader = ({ backToShopHandler }) => {
  return (
    <div className={classes.header_container}>
      <div className={classes.flex_container}>
        <span className={classes.caption}>КОШИК</span>
        <AiOutlineClose
          className={classes.cross}
          onClick={() => backToShopHandler(false)}
        />
      </div>

      <div className={classes.stripe}></div>
    </div>
  );
};

export default NotificationHeader;
