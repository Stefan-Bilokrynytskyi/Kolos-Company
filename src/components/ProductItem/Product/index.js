import React, { useState } from "react";
import classes from "./Product.module.scss";
import { Link } from "react-router-dom";
import SizeButton from "./SizeButton/SizeButton";
import store from "../../../store/Products";
import { observer } from "mobx-react-lite";
import Swiper from "./Swiper";
import BasketNotification from "./BasketNotification";
import ProductAccordion from "./ProductAccordion";
import Stripe from "../../UI/Stripe";
import Button from "../../UI/Button";

const Product = observer(({ product, color }) => {
  console.log(product);
  let colorName = "";
  const uniqueColours = [
    ...new Set(product.sizes_color_quantity.map((item) => item.hex)),
  ];
  const findAvailableSizes = (color) => {
    let sizes = [];
    product.sizes_color_quantity.forEach((item) =>
      item.hex === color && item.quantity > 0 ? sizes.push(item.size) : null
    );

    return sizes;
  };
  const findImage = (color) => {
    const index = product.sizes_color_quantity.findIndex(
      (item) => item.hex === color
    );
    const slides = product.sizes_color_quantity[index].photo_urls;
    colorName = product.sizes_color_quantity[index].color;
    return slides;
  };

  // Доступні розміри [S, M, L, XL
  const [selectedColor, setSelectedColor] = useState(color); // Обраний колір
  const [selectedSize, setSelectedSize] = useState(); // Обраний розмір
  const [selectedSlides, setSelectedSlides] = useState(findImage(color)); // Обране зображення [photo_url
  const [availableSizes, setAvailableSizes] = useState(
    findAvailableSizes(selectedColor)
  );
  const [warning, setWarning] = useState(false);
  const [isProductSelected, setIsProductSelected] = useState(false); // Повідомлення про додавання в кошик
  const isProductAvailable =
    product.sizes_color_quantity.find((item) => item.hex === color).quantity >
    0;

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setAvailableSizes(findAvailableSizes(color));
    setSelectedSlides(findImage(color));
    setSelectedSize();
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setWarning(false);
  };

  const handleCheckout = () => {
    const selectedImage = selectedSlides[0];

    if (selectedSize) {
      store.addToBasket({
        ...product,
        selectedColor,
        selectedSize,
        selectedImage,
        colorName,
        quantity: 1,
      });

      setIsProductSelected(true);
    } else setWarning(true);
  };

  return (
    <div>
      {isProductSelected && (
        <BasketNotification
          id={product.id}
          colorName={colorName}
          size={selectedSize}
          setIsProductSelected={setIsProductSelected}
        />
      )}
      <div className={classes.product_item}>
        <div className={classes.container}>
          <h1>{product.name}</h1>
          <Swiper slides={selectedSlides} />
          {!isProductAvailable && (
            <div className={classes.notAvailable_caption}>
              Немає в наявності
            </div>
          )}
          <p className={classes.price}>{product.price}</p>

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

          <div className={classes.choose_size}>
            <SizeButton
              selectedSize={selectedSize}
              handleSizeChange={handleSizeChange}
              available={availableSizes.includes("S")}
            >
              S
            </SizeButton>
            <SizeButton
              selectedSize={selectedSize}
              handleSizeChange={handleSizeChange}
              available={availableSizes.includes("M")}
            >
              M
            </SizeButton>
            <SizeButton
              selectedSize={selectedSize}
              handleSizeChange={handleSizeChange}
              available={availableSizes.includes("L")}
            >
              L
            </SizeButton>
            <SizeButton
              selectedSize={selectedSize}
              handleSizeChange={handleSizeChange}
              available={availableSizes.includes("XL")}
            >
              XL
            </SizeButton>
          </div>
          {warning && <div className={classes.warning}>Оберіть розмір</div>}
          <Button onClick={handleCheckout} disabled={!isProductAvailable}>
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
    </div>
  );
});

export default Product;
