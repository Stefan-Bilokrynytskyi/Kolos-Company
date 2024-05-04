import React, { useState } from "react";
import classes from "./MobileProduct.module.scss";
import { Link } from "react-router-dom";
import SizeButton from "../SizeButton/SizeButton";
import store from "../../../../store/Products";
import { observer } from "mobx-react-lite";
import Swiper from "../Swiper";
import BasketNotification from "../BasketNotification";
import ProductAccordion from "../ProductAccordion";
import Stripe from "../../../../components/UI/Stripe";
import Button from "../../../../components/UI/Button";
import { findInfo } from "../utils";

const MobileProduct = observer(({ product, color }) => {
  console.log(product);

  const uniqueColours = [
    ...new Set(product.sizes_color_quantity.map((item) => item.hex)),
  ];

  const [productInfo, setProductInfo] = useState(findInfo(color, product));
  const [selectedColor, setSelectedColor] = useState(color); // Обраний колір
  const [selectedSize, setSelectedSize] = useState(null); // Обраний розмір

  const [warning, setWarning] = useState(false);
  const [isProductSelected, setIsProductSelected] = useState(false); // Повідомлення про додавання в кошик

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
      <div className={classes.product_item}>
        <div className={classes.container}>
          <div className={classes.name_collection}>
            <h1>{product.name}</h1>
            {product.collection && (
              <div className={classes.collection_link}>
                <Link
                  to={`/collection-items/?collection=${product.link_collection}`}
                >
                  {" "}
                  {/*исправить*/}
                  Колекція "{product.collection}"
                </Link>
              </div>
            )}
          </div>
          <Swiper slides={productInfo.slides} />
          {!productInfo.isProductAvailable && (
            <div className={classes.notAvailable_caption}>
              Немає в наявності
            </div>
          )}
          {productInfo.priceActual < productInfo.priceDefault ? (
            <div className={classes.price}>
              <span className={classes.crossed_price}>
                {productInfo.priceDefault}
              </span>
              <span className={classes.discount_price}>
                {" "}
                {productInfo.priceActual}
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

          <Button
            onClick={handleCheckout}
            disabled={!productInfo.isProductAvailable}
          >
            Додати в кошик
          </Button>
        </div>
      </div>
      <div className={classes.accordions_container}>
        <div className={classes.stripe_container}>
          <Stripe customStyles={{ width: "100%", bottom: "100%" }} />
          <ProductAccordion name="Опис товару" text={product.description} />
          <Stripe customStyles={{ width: "100%" }} />
        </div>

        <div className={classes.stripe_container}>
          <ProductAccordion
            name="Доставка і оплата"
            text={product.description}
          />
          <Stripe customStyles={{ width: "100%" }} />
        </div>
      </div>
    </>
  );
});

export default MobileProduct;
