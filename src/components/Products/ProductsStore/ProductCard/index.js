import classes from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import store from "../../../../store/Products";

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
}) {
  const [selectedColor, setSelectedColor] = useState(colours[0]);
  const [selectedImage, setSelectedImage] = useState(image);
  const selectColorHandler = (color) => {
    const udatedImage = colours_sizes.find(
      (item) => item.hex === color
    ).photo_url;
    setSelectedImage(udatedImage);
    setSelectedColor(color);
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
      <Link to={`/${store.url}/${id}`}>
        <img src={selectedImage} alt="product" className={classes.image} />
        <div className={classes.caption}>{name}</div>
      </Link>
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
