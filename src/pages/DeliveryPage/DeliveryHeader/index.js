import React from "react";

import classes from "./DeliveryHeader.module.scss";
import leftArrow from "../../../icons/left-arrow.svg";
import { useNavigate } from "react-router-dom";

const DeliveryHeader = () => {
  const navigate = useNavigate();
  const backToShopHandler = () => {
    navigate(-1);
  };
  return (
    <div className={classes.header_container}>
      <div className={classes.flex_container}>
        <img
          src={leftArrow}
          alt="left-arrow"
          onClick={() => backToShopHandler()}
        />
        <div onClick={() => backToShopHandler()} className={classes.text}>
          {" "}
          Назад до покупок
        </div>
      </div>
    </div>
  );
};

export default DeliveryHeader;
