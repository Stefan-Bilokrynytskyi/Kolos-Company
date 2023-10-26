import classes from "./ProductCard.module.scss";
import store from "../../../../store/Products";
import { toJS } from "mobx";

function ProductCard({
  category,
  gender,
  global_category,
  name,
  price,
  image,
  colours,
}) {
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
      <img src={image} alt="product" />
      <div className={classes.caption}>{name}</div>
      <div className={classes.price_colors_conteiner}>
        <div className={classes.price_conteiner}>
          <div className={classes.price}>{price}</div>
        </div>
        <div className={classes.colours_conteiner}>
          {uniqueColours.map((color, index) => (
            <div
              className={classes.color_of_product}
              style={{ backgroundColor: color }}
              key={index}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
