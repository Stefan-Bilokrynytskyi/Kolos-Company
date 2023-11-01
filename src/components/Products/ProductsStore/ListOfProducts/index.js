import classes from "./ListOfProducts.module.scss";
import ProductCard from "../ProductCard";
import Rectangle from "../../../../img/Rectangle.jpg";

function ListOfProducts({ productsData }) {
  const ProductsList = productsData.map((product) => (
    <ProductCard
      id={product.id}
      category={product.category}
      gender={product.gender}
      global_category={product.global_category}
      name={product.name}
      price={product.price}
      image={product.sizes_color_quantity[0].photo_urls[0]}
      colours={product.sizes_color_quantity.map((item) => item.hex)}
      colours_sizes={product.sizes_color_quantity}
      key={product.id}
    />
  ));

  return <div className={classes.flex_conteiner}>{ProductsList}</div>; // added ProductsList to the return statement
}

export default ListOfProducts;
