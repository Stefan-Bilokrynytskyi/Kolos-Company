import classes from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import store from "../../../store/Products";

function ProductCard({
  id,
  category,
  gender,
  global_category,
  name,
  price,
  image,
  colours,
  colours_sizes,
  collection,
}) {
  const [selectedColor, setSelectedColor] = useState(colours[0]);
  const [selectedImage, setSelectedImage] = useState(image);
  const [quantity, setQuantity] = useState(colours_sizes[0].quantity);

  const selectColorHandler = (color) => {
    const updatedImage = colours_sizes.find((item) => item.hex === color)
      .photo_urls[0];
    const updatedQuantity = colours_sizes.find(
      (item) => item.hex === color
    ).quantity;
    setSelectedImage(updatedImage);
    setQuantity(updatedQuantity);
    setSelectedColor(color);
    store.selectedColor = color;
  };
  name = name
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  if (name.length >= 27) {
    name = name.slice(0, 27) + "...";
  }

  const uniqueColours = [...new Set(colours)];

  return (
    <div className={classes.card_conteiner}>
      <Link
        to={`/products/${global_category.toLowerCase()}/${id}/${selectedColor.slice(
          1
        )}`}
      >
        <div className={classes.photo_container}>
          {quantity === 0 && (
            <div className={classes.section_overlay}>
              <div>Немає в наявності</div>
            </div>
          )}
          <img src={selectedImage} alt="product" className={classes.image} />
        </div>
        <div className={classes.caption}>{name}</div>
      </Link>
      {collection && (
        <div className={classes.collection_text}>колекція "{collection}"</div>
      )}
      <div className={classes.price_colors_conteiner}>
        <div className={classes.price_conteiner}>
          <div className={classes.price}>{price}</div>
        </div>
        <div className={classes.colours_conteiner}>
          {uniqueColours.map((color, index) => (
            <div
              className={`${classes.color_of_product} ${
                selectedColor === color ? classes.selected : ""
              }`}
              style={{ backgroundColor: color }}
              key={index}
              onClick={() => selectColorHandler(color)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
