import React from "react";
import classes from "./Recomendations.module.scss";
import { observer } from "mobx-react-lite";
import Rectangle from "../../../../img/Rectangle.jpg";

<<<<<<< HEAD
const Recomendations = ({
  id,
  name,
  image }) => {
  return (
    <div className={classes.recomendation_item}>
      <div className={classes.recomendation_img}>
        <img src={image} alt='item'/>
      </div>
      <div className={classes.recomendation_title}>
        {name}
      </div>
      <div className={classes.recomendation_price}>
        1111
=======
const Recomendations = ({ id, name, price, image }) => {
  return (
    <div className={classes.recomendation_item}>
      <div className={classes.recomendation_img}>
        <img src={image} alt="item" />
>>>>>>> 588198ec5473ab0ffcd0580b698c4764f72a9c59
      </div>
      <div className={classes.recomendation_title}>{name}</div>
      <div className={classes.recomendation_price}>{price}</div>
    </div>
  );
};

export default Recomendations;
