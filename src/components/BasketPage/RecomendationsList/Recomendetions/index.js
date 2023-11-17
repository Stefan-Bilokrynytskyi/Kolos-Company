import React from 'react';
import classes from './Recomendations.module.scss';
import { observer } from "mobx-react-lite";
import Rectangle from "../../../../img/Rectangle.jpg"

const Recomendations = (
  id,
  name,
  image) => {
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
      </div>
    </div>
  );
};

export default Recomendations;
