import React, { useState } from "react";
import Header from "../Header";
import classes from "./ProductItem.module.scss";
import { useParams } from "react-router-dom";
import store from "../../store/Products";
import { toJS } from "mobx";
import { useEffect } from "react";
import Product from "./Product";

function ProductItem() {
  const [product, setProduct] = useState(null);

  const { category, id } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const newProduct = await toJS(
          store.fetchProduct(`/api/products/${category}/${id}`)
        );
        //console.log(newProduct);
        setProduct(newProduct);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);
  //if (product) console.log(product.name);
  return (
    <div>
      <Header />
      {product ? <Product product={product} /> : <p>Loading...</p>}
    </div>
  );
}

export default ProductItem;
