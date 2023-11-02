import { useState } from "react";
import { Swiper, SwiperSlide, Navigation } from "swiper/react"; // Импортируем Navigation
import "swiper/css";
import classes from "./Swiper.module.scss";

// Импортируем иконки для стрелок
import leftArrowIcon from "../../../../icons/left-arrow.svg";
import rightArrowIcon from "../../../../icons/right-arrow.svg";

const Slider = ({ slides }) => {
  slides = slides.filter((slide) => slide);

  const [swiper, setSwiper] = useState(null);

  const handlePrevClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <Swiper
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      navigation={true}
      onSwiper={setSwiper}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide}>
          <div className={classes.slide_container}>
            <div className={classes.left_arrow}>
              <img
                src={leftArrowIcon}
                alt="Previous"
                onClick={handlePrevClick}
                className={slide === slides[0] ? classes.disabled : ""}
              />
            </div>

            <img className={classes.image} src={slide} alt={"slide"} />
            <div className={classes.right_arrow}>
              <img
                src={rightArrowIcon}
                alt="Next"
                onClick={handleNextClick}
                className={
                  slide === slides[slides.length - 1] ? classes.disabled : ""
                }
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
