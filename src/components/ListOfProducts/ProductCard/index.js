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
  discount,
}) {
  const [selectedColor, setSelectedColor] = useState(colours[0]);
  const [selectedImage, setSelectedImage] = useState(image);
  const [quantity, setQuantity] = useState(colours_sizes[0].quantity);
  const [discountValue, setDiscountValue] = useState(discount);

  const selectColorHandler = (color) => {
    const updatedImage = colours_sizes.find((item) => item.hex === color)
      .photo_urls[0];
    const updatedQuantity = colours_sizes.find(
      (item) => item.hex === color
    ).quantity;
    const updatedDiscount = colours_sizes.find(
      (item) => item.hex === color
    ).discount;
    setDiscountValue(updatedDiscount);
    setSelectedImage(updatedImage);
    setQuantity(updatedQuantity);
    setSelectedColor(color);
    store.selectedColor = color;
  };

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
        {discountValue && quantity ? (
          <div>
            <span className={classes.crossed_price}>{price}</span>
            <span className={classes.discount_price}>
              {` ${(((100 - discountValue) / 100) * price).toFixed(2)}`}
              <span style={{ fontFamily: "Commissioner" }}> грн</span>
            </span>
          </div>
        ) : (
          <div className={classes.price}>
            {`${price}`}
            <span style={{ fontFamily: "Commissioner" }}> грн</span>
          </div>
        )}

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
