import React, { useState } from "react";
import classes from "./DesktopProduct.module.scss";
import { Link } from "react-router-dom";
import SizeButton from "../SizeButton/SizeButton";
import store from "../../../../store/Products";
import { observer } from "mobx-react-lite";
import Swiper from "../Swiper";
import BasketNotification from "../BasketNotification";
import Stripe from "../../../../components/UI/Stripe";
import Button from "../../../../components/UI/Button";
import LeftArrow from "../../../../icons/left-arrow.svg";
import { useNavigate } from "react-router-dom";
import { findInfo } from "../utils";

const DesktopProduct = observer(({ product, color }) => {
  console.log(product);

  const uniqueColours = [
    ...new Set(product.sizes_color_quantity.map((item) => item.hex)),
  ];

  const [productInfo, setProductInfo] = useState(findInfo(color, product));
  const [selectedColor, setSelectedColor] = useState(color); // Обраний колір
  const [selectedSize, setSelectedSize] = useState(null); // Обраний розмір

  const [warning, setWarning] = useState(false);
  const [isProductSelected, setIsProductSelected] = useState(false); // Повідомлення про додавання в кошик

  const navigate = useNavigate();

  const goBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setProductInfo(findInfo(color, product));
    setSelectedSize();
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setWarning(false);
  };

  const handleCheckout = () => {
    const selectedImage = productInfo.slides[0];
    const price = productInfo.priceActual;
    const colorName = productInfo.colorName;
    if (selectedSize) {
      store.addToBasket({
        ...product,
        selectedColor,
        selectedSize,
        selectedImage,
        colorName,
        price,
        quantity: 1,
      });

      setIsProductSelected(true);
    } else setWarning(true);
  };

  return (
    <>
      {isProductSelected && (
        <BasketNotification
          id={product.id}
          colorName={productInfo.colorName}
          size={selectedSize}
          setIsProductSelected={setIsProductSelected}
        />
      )}
      <div className={classes.flex_container}>
        <div className={classes.slider_container}>
          <Swiper slides={productInfo.slides} />
          {!productInfo.isProductAvailable && (
            <div className={classes.notAvailable_caption}>
              Немає в наявності
            </div>
          )}
          <button className={classes.back} onClick={goBack}>
            <img
              src={LeftArrow}
              alt={"arrow"}
              style={{ width: "25px", height: "25px" }}
            ></img>
            <span className={classes.back_text}>Назад до покупок</span>
          </button>
          <div className={classes.recomendations}>
            <h2 className={classes.rec_title}>Це може також вам</h2>
            <div className={classes.subtitle_container}>
              <h2 className={classes.subtitle}>сподобатися</h2>
              <Stripe customStyles={{ position: "relative", zIndex: "-1" }} />
            </div>
          </div>
        </div>
        <div className={classes.product_info}>
          <h1 className={classes.name}>{product.name}</h1>
          {product.collection && (
            <div className={classes.collection_link}>
              <Link
                to={`/collection-items/?collection=${product.link_collection}`}
              >
                {" "}
                Колекція "{product.collection}"
              </Link>
            </div>
          )}

          {productInfo.priceActual < productInfo.priceDefault ? (
            <div className={classes.price}>
              <span className={classes.crossed_price}>
                {productInfo.priceDefault}
              </span>
              <span className={classes.discount_price}>
                {`${productInfo.priceActual} `}
                <span style={{ fontFamily: "Commissioner" }}> грн</span>
              </span>
            </div>
          ) : (
            <div className={classes.price}>
              {productInfo.priceActual}{" "}
              <span style={{ fontFamily: "Commissioner" }}> грн</span>
            </div>
          )}

          <div className={classes.choose_color}>
            {uniqueColours.map((color) => (
              <Link
                to={`/products/${product.global_category.toLowerCase()}/${
                  product.id
                }/${color.slice(1)}`}
                key={color}
              >
                <div
                  className={`${classes.color} ${
                    selectedColor === color ? classes.selected : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(color)}
                ></div>
              </Link>
            ))}
          </div>
          <div className={classes.sizes}>
            <div className={classes.choose_size}>
              <SizeButton
                selectedSize={selectedSize}
                handleSizeChange={handleSizeChange}
                available={productInfo.sizes.includes("S")}
              >
                S
              </SizeButton>
              <SizeButton
                selectedSize={selectedSize}
                handleSizeChange={handleSizeChange}
                available={productInfo.sizes.includes("M")}
              >
                M
              </SizeButton>
              <SizeButton
                selectedSize={selectedSize}
                handleSizeChange={handleSizeChange}
                available={productInfo.sizes.includes("L")}
              >
                L
              </SizeButton>
              <SizeButton
                selectedSize={selectedSize}
                handleSizeChange={handleSizeChange}
                available={productInfo.sizes.includes("XL")}
              >
                XL
              </SizeButton>
            </div>
            {warning && <div className={classes.warning}>Оберіть розмір</div>}
          </div>
          <div className={classes.checkout_container}>
            <Button
              onClick={handleCheckout}
              disabled={!productInfo.isProductAvailable}
            >
              Додати в кошик
            </Button>
          </div>

          <div className={classes.description}>
            <Stripe customStyles={{ top: "0" }} />

            <div className={classes.text}>
              <h2>Опис товару</h2>
              {product.description}
            </div>

            <Stripe />
          </div>
          <div className={classes.delivery}>
            <div className={classes.text}>
              <h2>Доставка і оплата</h2>
              {product.description}
            </div>

            <Stripe />
          </div>
        </div>
      </div>
    </>
  );
});

export default DesktopProduct;
