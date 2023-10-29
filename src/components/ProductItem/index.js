import React, { useState  } from "react";
import Header from "../Header";
import classes from "./ProductItem.module.scss";
import { useParams } from "react-router-dom";
import store from "../../store/Products";
import { toJS } from "mobx";
import { useEffect } from "react";
import Product from "./Product";

function ProductItem() {
  const [product, setProduct] = useState(null);

  const { category, id, color } = useParams();
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
  }, [category, id, color]);

  const key = `${category}_${id}_${color}`;

  return (
    <div key={key}>
      <Header />
      {product ? (
        <Product product={product} color={"#" + color} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductItem;
