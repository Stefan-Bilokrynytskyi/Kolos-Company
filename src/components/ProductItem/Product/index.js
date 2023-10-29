import React, { useState } from "react";
import classes from "./Product.module.scss";
import { Link } from "react-router-dom";

function Product({ product, color }) {
  console.log(product);
  const uniqueColours = [
    ...new Set(product.sizes_color_quantity.map((item) => item.hex)),
  ];
  const findAvailableSizes = (color) => {
    let sizes = [];
    product.sizes_color_quantity.forEach((item) =>
      item.hex === color && item.quantity > 0 ? sizes.push(item.size) : null
    );
    console.log(sizes);
    return sizes;
  };
  const findImage = (color) => {
    let image = "";
    product.sizes_color_quantity.find((item) =>
      item.hex === color ? (image = item.photo_url) : null
    );
    return image;
  };

  // Доступні розміри [S, M, L, XL
  const [selectedColor, setSelectedColor] = useState(color); // Обраний колір
  const [selectedSize, setSelectedSize] = useState(); // Обраний розмір
  const [selectedImage, setSelectedImage] = useState(findImage(color)); // Обране зображення [photo_url
  const [availableSizes, setAvailableSizes] = useState(
    findAvailableSizes(selectedColor)
  );

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setAvailableSizes(findAvailableSizes(color));
    setSelectedImage(findImage(color));
    setSelectedSize();
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

          <img src={selectedImage} alt="" className={classes.image} />

          <p className={classes.price}>{product.price}</p>

          <div className={classes.choose_color}>
            {uniqueColours.map((color, index) => (
              <Link
                to={`/products/${product.global_category.toLowerCase()}/${
                  product.id
                }/${color.slice(1)}`}
                key={index}
              >
                <div
                  className={`${classes.color} ${
                    selectedColor === color ? classes.selected : ""
                  }`}
                  style={{ backgroundColor: color }}
                  key={index}
                  onClick={() => handleColorChange(color)}
                ></div>
              </Link>
            ))}
          </div>

          <div className={classes.choose_size}>
            <button
              className={`${classes.size_button} ${
                !availableSizes.includes("S") ? classes.disabled : ""
              }${selectedSize === "S" ? classes.selected : ""}`}
              onClick={() => handleSizeChange("S")}
              disabled={!availableSizes.includes("S")}
            >
              S
            </button>
            <button
              className={`${classes.size_button} ${
                !availableSizes.includes("M") ? classes.disabled : ""
              }${selectedSize === "M" ? classes.selected : ""}`}
              onClick={() => handleSizeChange("M")}
              disabled={!availableSizes.includes("M")}
            >
              M
            </button>
            <button
              className={`${classes.size_button} ${
                !availableSizes.includes("L") ? classes.disabled : ""
              }${selectedSize === "L" ? classes.selected : ""}`}
              onClick={() => handleSizeChange("L")}
              disabled={!availableSizes.includes("L")}
            >
              L
            </button>
            <button
              className={`${classes.size_button} ${
                !availableSizes.includes("XL") ? classes.disabled : ""
              }${selectedSize === "XL" ? classes.selected : ""}`}
              onClick={() => handleSizeChange("XL")}
              disabled={!availableSizes.includes("XL")}
            >
              XL
            </button>
          </div>

          <div className={classes.button_checkout} onClick={handleCheckout}>
            До каси
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
