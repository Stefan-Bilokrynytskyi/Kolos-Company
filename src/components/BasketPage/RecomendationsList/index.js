import React from "react";
import classes from "./RecomendationsList.module.scss";
import Recomendations from "./Recomendetions";
import { observer } from 'mobx-react-lite';

const RecomendationsList = observer(() => {
  const recommendationProducts = [0, 1]; // Замените [0, 1] на фактический список рекомендуемых продуктов

  return (
    <div className={classes.RecomendationsList}>
      {recommendationProducts.map((product, index) => (
        <Recomendations key={index} />
      ))}
    </div>
  );
});

export default RecomendationsList;


