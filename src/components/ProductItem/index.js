import React, { useState  } from "react";
import Header from "../Header";
import classes from "./ProductItem.module.scss";
import { Link } from "react-router-dom";

function ProductItem({}) {
  const [selectedColor, setSelectedColor] = useState("Червоний"); // Обраний колір
  const [selectedSize, setSelectedSize] = useState("S"); // Обраний розмір

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleCheckout = () => {};

  return (
    <div>
      <Header />

      <div className={classes.product_item}>
        <div className={classes.container}>
          <h1>Колос Худді</h1>

          <div className={classes.image}>{/* image */}</div>

          <p className={classes.price}>1111</p>

          <div className={classes.choose_color}>
            <div
              className={`${classes.color} ${
                selectedColor === "Червоний" ? classes.selected : ""
              }`}
              onClick={() => handleColorChange("Червоний")}
            ></div>
            <div
              className={`${classes.color} ${
                selectedColor === "Синій" ? classes.selected : ""
              }`}
              onClick={() => handleColorChange("Синій")}
            ></div>
            <div
              className={`${classes.color} ${
                selectedColor === "Зелений" ? classes.selected : ""
              }`}
              onClick={() => handleColorChange("Зелений")}
            ></div>
          </div>

          <div className={classes.choose_size}>
            <button
              className={`${selectedSize === "S" ? classes.selected_size : ""}`}
              onClick={() => handleSizeChange("S")}
            >
              S
            </button>
            <button
              className={`${selectedSize === "M" ? classes.selected_size : ""}`}
              onClick={() => handleSizeChange("M")}
            >
              M
            </button>
            <button
              className={`${selectedSize === "L" ? classes.selected_size : ""}`}
              onClick={() => handleSizeChange("L")}
            >
              L
            </button>
            <button
              className={`${
                selectedSize === "XL" ? classes.selected_size : ""
              }`}
              onClick={() => handleSizeChange("XL")}
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

export default ProductItem;
