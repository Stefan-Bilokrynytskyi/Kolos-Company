import React from "react";
import classes from "./Stripe.module.scss";

const Stripe = ({ customStyles }) => {
  const styles = customStyles || {};

  return <div className={classes.stripe} style={styles}></div>;
};

export default Stripe;
