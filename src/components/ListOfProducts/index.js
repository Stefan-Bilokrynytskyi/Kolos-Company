import classes from "./ListOfProducts.module.scss";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";

function ListOfProducts({ productsData }) {
  const location = useLocation();
  const { pathname } = location;

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
      discount={product.sizes_color_quantity[0].discount}
      collection={
        pathname.includes("collection-items") ? null : product.collection
      }
      key={product.id}
    />
  ));

  return (
    <div>
      <div className={classes.flex_conteiner}>{ProductsList}</div>
    </div>
  );
}

export default ListOfProducts;
