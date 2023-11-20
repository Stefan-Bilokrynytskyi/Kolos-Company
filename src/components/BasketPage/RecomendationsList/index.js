import React, { useEffect, useState } from "react";
import classes from "./RecomendationsList.module.scss";
import Recomendations from "./Recomendetions";
import { observer } from "mobx-react-lite";
import store from "../../../store/Products";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toJS } from "mobx";

const RecomendationsList = observer(() => {
  useEffect(() => {

    const fetchData = async () => {
      try {
        await store.fetchAllProducts();

        await store.generateRecommendations(
          toJS(store.allProducts),
          toJS(store.basket)
        );

        if (toJS(store.allProducts).length > 0) {
          store.category = toJS(store.allProducts)[0].category;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [store.basket]);

  const recomendedPoductsCreate = toJS(store.recommendedProducts);
  const limitedProducts = recomendedPoductsCreate.slice(0, 6); 

  const RecomendationsList = limitedProducts.map((product, index) => (
    <Recomendations
      key={index}
      id={product.id}
      name={product.name}
      price={product.price}
      category={product.global_category
      }
      checkColor={product.sizes_color_quantity[0].hex}
      image={product.sizes_color_quantity[0].photo_urls[0]}
    />
  ));

  console.log("hyinya: ", toJS(store.recommendedProducts));

  const settings = {
    infinite: false,
    slidesToShow: 2.5, // количество отображаемых элементов
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2.5,
          // slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.5,
          // slidesToScroll: 1,
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
