import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import classes from "./Swiper.module.scss";

const Slider = ({ slides }) => {
  slides = slides.filter((slide) => slide);

  return (
    <Swiper slidesPerView={1} scrollbar={{ draggable: true }}>
      {slides.map((slide, index) => (
        <SwiperSlide key={slide}>
          <img className={classes.image} src={slide} alt={"slide"} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
