import { useState, useEffect } from "react";
import classes from "./CollectionSlider.module.scss";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import store from "../../../store/Products";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, A11y } from "swiper/modules";
import "./SliderPagination.css";
//import "swiper/modules/pagination/pagination.scss";

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

  const onClickHandler = (link) => {
    navigate(`/collection-items/?collection=${link}`);
  };

  return (
    <div className={classes.container}>
      {store.collections.length > 0 && (
        <Swiper
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          navigation={true}
          onSwiper={setSwiper}
          modules={[Pagination, A11y]}
          pagination={{ clickable: true }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className={classes.slider_container}>
                <div
                  className={classes.collection_container}
                  style={{
                    backgroundImage: `url(${slide.photo_url})`,
                    justifyContent:
                      slides[0] === slide ? "flex-end" : "space-between",
                  }}
                >
                  <div className={classes.flex_container}>
                    <div className={classes.collection_name}>
                      {slide.name.toUpperCase()}
                    </div>
                    <div
                      className={classes.to_collection}
                      onClick={() => onClickHandler(slide.link_name)}
                    >
                      До колекції
                    </div>
                  </div>
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
