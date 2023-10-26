import classes from "./ListOfProducts.module.scss";
import ProductCard from "../ProductCard"; // added import statement for ProductCard
import Rectangle from "../../../../img/Rectangle.jpg"; // added import statement for Rectangle

function ListOfProducts({ productsData }) {
  const ProductsList = productsData.map((product, index) => (
    <ProductCard
      category={product.category}
      gender={product.gender}
      global_category={product.global_category}
      name={product.name}
      price={product.price}
      image={Rectangle}
      colours={product.sizes_color_quantity.map((item) => item.hex)}
      key={product.name}
    />
  ));

  return <div className={classes.flex_conteiner}>{ProductsList}</div>; // added ProductsList to the return statement
}

export default ListOfProducts;
