import React from "react";
import classes from "./PageCaption.module.scss";
import Stripe from "../Stripe";

const PageCaption = ({ caption }) => {
  return (
    <div className={classes.flex_container}>
      <div className={classes.caption}>{caption}</div>

      <Stripe
        customStyles={{
          backgroundColor: "black",
          left: "0",
          bottom: "45%",
          transform: "translate(0, 50%)",
          zIndex: "-1",
          width: "100%",
        }}
      />
    </div>
  );
};

export default PageCaption;
