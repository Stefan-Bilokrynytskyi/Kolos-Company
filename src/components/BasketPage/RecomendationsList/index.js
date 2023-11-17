import React, { useEffect, useState } from "react";
import classes from "./RecomendationsList.module.scss";
import Recomendations from "./Recomendetions";
import { observer } from 'mobx-react-lite';
import store from "../../../store/Products";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { toJS } from "mobx";

const RecomendationsList = observer(() => {
  // const recommendationProducts = [0, 1, 2, 3, 4, 5]; 

  useEffect(() => {
    console.log("All products without feth: ", toJS(store.allProducts));

    const fetchData = async () => {
      try {
        await store.fetchAllProducts();
        // console.log("All products response: ", store.allProducts);

        // console.log("All products: ", toJS(response));
        // console.log("All products in basket: ", toJS(store.basket));

        await store.generateRecommendations(toJS(store.allProducts), toJS(store.basket));

        // console.log('Recommended products: ', toJS(store.recommendedProducts));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log("ddddddddddddddddd",toJS(store.recommendedProducts));

  const recomendedPoductsCreate = toJS(store.recommendedProducts);

  const RecomendationsList = recomendedPoductsCreate.map((product, index) => (
    <Recomendations 
      key={index} 
      id={product.id}
      name={product.name}
      price={product.price}
      // image={product.image}
    />
  ))

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
      <Slider {...settings}>{RecomendationsList}</Slider>
    </div>
  );
});

export default RecomendationsList;


