import React, { useState } from "react";
import Header from "../../Header";
import classes from "./Product.module.scss";

function Product({ product }) {
  console.log(product);
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

  // Доступні розміри [S, M, L, XL
  const [selectedColor, setSelectedColor] = useState(uniqueColours[0]); // Обраний колір
  const [selectedSize, setSelectedSize] = useState(); // Обраний розмір
  const [availableSizes, setAvailableSizes] = useState([
    findAvailableSizes(selectedColor),
  ]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setAvailableSizes(findAvailableSizes(color));
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleCheckout = () => {};

  return (
    <div>
      <div className={classes.product_item}>
        <div className={classes.container}>
          <h1>{product.name}</h1>

          <img
            src={product.sizes_color_quantity[0].photo_url}
            alt=""
            className={classes.image}
          />

          <p className={classes.price}>{product.price}</p>

          <div className={classes.choose_color}>
            {uniqueColours.map((color, index) => (
              <div
                className={`${classes.color} ${
                  selectedColor === color ? classes.selected : ""
                }`}
                style={{ backgroundColor: color }}
                key={index}
                onClick={() => handleColorChange(color)}
              ></div>
            ))}
          </div>

          <div className={classes.choose_size}>
            <button
              className={`${
                availableSizes.includes("S") ? classes.disable : ""
              } ${selectedSize === "S" ? classes.selected_size : ""}`}
              onClick={() => handleSizeChange("S")}
              disabled={availableSizes.includes("S")}
            >
              S
            </button>
            <button
              className={`${
                availableSizes.includes("M") ? classes.disable : ""
              } ${selectedSize === "M" ? classes.selected_size : ""}`}
              onClick={() => handleSizeChange("M")}
              disabled={availableSizes.includes("M")}
            >
              M
            </button>
            <button
              className={`${
                availableSizes.includes("L") ? classes.disable : ""
              } ${selectedSize === "L" ? classes.selected_size : ""}`}
              onClick={() => handleSizeChange("L")}
              disabled={availableSizes.includes("L")}
            >
              L
            </button>
            <button
              className={` ${
                selectedSize === "XL" ? classes.selected_size : ""
              }`}
              onClick={() => handleSizeChange("XL")}
              disabled={availableSizes.includes("XL")}
            >
              XL
            </button>
          </div>

          <div className={classes.button} onClick={handleCheckout}>
            До каси
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
