import { useState, useEffect } from "react";
import { Swiper, SwiperSlide, Navigation } from "swiper/react";
import "swiper/css";
import classes from "./CollectionSlider.module.scss";
import Stripe from "../../UI/Stripe";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import store from "../../../store/Products";
import leftArrowIcon from "../../../icons/left-arrow.svg";
import rightArrowIcon from "../../../icons/right-arrow.svg";
import { useNavigate } from "react-router-dom";
const Slider = observer(() => {
  const slides = toJS(store.collections);
  console.log(slides);

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
  const navigate = useNavigate();

  const onClickHandler = (link) =>
    navigate(`/collection-items/?collection=${link}`);

  return (
    <div className={classes.container}>
      <div className={classes.name_container}>
        <div className={classes.name}>КОЛЕКЦІЇ</div>
        <Stripe
          customStyles={{
            backgroundColor: "black",
            left: "0",
            bottom: "50%",
            transform: "translate(0, 50%)",
            zIndex: "-1",
            width: "100%",
          }}
        />
      </div>
      {store.collections.length > 0 && (
        <Swiper
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          navigation={true}
          onSwiper={setSwiper}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={slide.id}
              onClick={() => onClickHandler(slide.link_name)}
            >
              <div
                className={classes.slider_container}
                style={{
                  backgroundImage: `url(${slide.photo_url})`,
                  justifyContent:
                    slides[0] === slide ? "flex-end" : "space-between",
                }}
              >
                <div
                  className={classes.arrow_container}
                  style={{
                    display: slides[0] === slide ? "none" : "block",
                  }}
                >
                  <div
                    className={classes.left_arrow}
                    onClick={handlePrevClick}
                  ></div>
                  <img
                    src={leftArrowIcon}
                    alt="Previous"
                    className={classes.arrow_img}
                  />
                </div>
                <div
                  className={classes.arrow_container}
                  style={{
                    display:
                      slides[slides.length - 1] === slide ? "none" : "block",
                  }}
                >
                  <div
                    className={classes.right_arrow}
                    onClick={handleNextClick}
                  ></div>
                  <img
                    src={rightArrowIcon}
                    alt="Next"
                    className={classes.arrow_img}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
});

export default Slider;
