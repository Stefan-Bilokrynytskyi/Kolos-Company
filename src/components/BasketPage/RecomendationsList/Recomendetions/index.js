import { useState, useEffect } from "react";
import classes from "./Recomendations.module.scss";
import store from "../../../../store/Products";
import { Link, useParams } from "react-router-dom";
import { runInAction } from "mobx";

const Recomendations = ({ id, name, price, image, colours_sizes, colours, category, checkColor }) => {

  const [selectedColor, setSelectedColor] = useState(colours && colours.length > 0 ? colours[0] : "");
  const [selectedImage, setSelectedImage] = useState(image);
  const [quantity, setQuantity] = useState(colours_sizes && colours_sizes.length > 0 ? colours_sizes[0].quantity : 0);
  const [currentCategory, setCurrentCategory] = useState("");


  // const selectColorHandler = (color) => {
  //   const updatedImage = colours_sizes.find((item) => item.hex === color)
  //     .photo_urls[0];
  //   const updatedQuantity = colours_sizes.find(
  //     (item) => item.hex === color
  //   ).quantity;
  //   setSelectedImage(updatedImage);
  //   setQuantity(updatedQuantity);
  //   setSelectedColor(color);
  //   store.selectedColor = color;
  // };

  // const uniqueColours = [...new Set(colours)];

  // console.log("store.category:", store.category);
  // console.log("id:", id);
  // console.log("selectedColor:", selectedColor);

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


