import Header from "../Header";

import Footer from "../Footer";
import classes from "./Products.module.scss";

function Products() {
  return (
    <div className={classes.products_page}>
      <Header />

      <Footer />
    </div>
  );
}

export default Products;
