import Header from "../Header";
import Footer from "../Footer";
import ProductItem from "../ProductItem";
import classes from "./Products.module.scss";
import ProductsStore from "./ProductsStore";
import Filter from "../Filter";
import { useParams } from "react-router-dom";

function Products() {
  const { category } = useParams();

  return (
    <div className={classes.products_page}>
      <Header />
      <Filter />
      <ProductsStore url={category} />
      <Footer />
    </div>
  );
}

export default Products;
