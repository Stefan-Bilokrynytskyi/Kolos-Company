import React from "react";
import classes from "./RecomendationsList.module.scss";
import Recomendations from "./Recomendetions";
import { observer } from 'mobx-react-lite';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const RecomendationsList = observer(() => {
  const recommendationProducts = [0, 1, 2, 3, 4, 5]; 

  const settings = {
    infinite: false,
    slidesToShow: 2.3, // количество отображаемых элементов
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.RecomendationsList}>
      <Slider {...settings}>
        {recommendationProducts.map((product, index) => (
          <Recomendations key={index} />
        ))}
      </Slider>
    </div>
  );
});

export default RecomendationsList;


