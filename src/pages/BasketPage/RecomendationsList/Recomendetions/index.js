import { useState, useEffect } from "react";
import classes from "./Recomendations.module.scss";
import { Link } from "react-router-dom";

const Recomendations = ({ id, name, price, image, colours_sizes, colours, category, checkColor }) => {

  const [selectedImage, setSelectedImage] = useState(image);

  return (
    <div className={classes.recomendation_item}>
      <Link to={`/products/${category.toLowerCase()}/${id}/${checkColor.slice(1)}`}>
        <div className={classes.recomendation_img}>
          <img src={selectedImage} alt="item" />
        </div>
      </Link>
      <div className={classes.recomendation_title}>{name}</div>
      <div className={classes.recomendation_price}>{price}</div>
    </div>
  );
};

export default Recomendations;


