import Header from "../Header";
import Footer from "../Footer";
import classes from "./Products.module.scss";

import ProductsStore from "./ProductsStore";
function Products() {
  return (
    <div className={classes.products_page}>
      <Header />
      <ProductsStore />
      <Footer />
    </div>
  );
}

export default Products;
