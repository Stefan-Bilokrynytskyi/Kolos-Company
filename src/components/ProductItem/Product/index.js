import React, { useState } from "react";
import classes from "./Product.module.scss";
import { Link } from "react-router-dom";
import SizeButton from "./SizeButton/SizeButton";
import store from "../../../store/Products";
import { observer } from "mobx-react-lite";
import { set } from "mobx";

const Product = observer(({ product, color }) => {
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
    const image = product.sizes_color_quantity[index].photo_urls[0];
    colorName = product.sizes_color_quantity[index].color;
    return image;
  };

  // Доступні розміри [S, M, L, XL
  const [selectedColor, setSelectedColor] = useState(color); // Обраний колір
  const [selectedSize, setSelectedSize] = useState(); // Обраний розмір
  const [selectedImage, setSelectedImage] = useState(findImage(color)); // Обране зображення [photo_url
  const [availableSizes, setAvailableSizes] = useState(
    findAvailableSizes(selectedColor)
  );
  const [warning, setWarning] = useState(false);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setAvailableSizes(findAvailableSizes(color));
    setSelectedImage(findImage(color));
    setSelectedSize();
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setWarning(false);
  };

  const handleCheckout = () => {
    if (selectedSize) {
      store.addToBasket({
        ...product,
        selectedColor,
        selectedSize,
        selectedImage,
        colorName,
        quantity: 1,
      });
      localStorage.setItem("basket", JSON.stringify(store.basket));
    } else setWarning(true);
  };

  return (
    <div>
      <div className={classes.product_item}>
        <div className={classes.container}>
          <h1>{product.name}</h1>

          <img src={selectedImage} alt="" className={classes.image} />

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
          <div className={classes.button_checkout} onClick={handleCheckout}>
            Додати в кошик
          </div>
        </div>
      </div>
    </div>
  );
});

export default Product;
