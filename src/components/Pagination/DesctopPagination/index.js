import classes from "./DesctopPagination.module.scss";
import store from "../../../store/Products";
import Loading from "../../Loading";
import { useState } from "react";
import { toJS } from "mobx";

const DesctopPagination = ({ setProductsData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handlePaginationClick = () => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        await store.fetchAdditionalProducts(`/api${store.nextUrl}`);

        setProductsData(toJS(store.productPerpage));
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getProducts();
  };

  const isThisLastPage =
    store.productPerpage.length === store.count || isLoading;
  return (
    <>
      {isLoading && (
        <Loading isLoading={isLoading} customStyle={{ minHeight: "200px" }} />
      )}
      <div className={classes.container}>
        <button
          className={`${classes.pagination_btn} ${
            isThisLastPage ? classes.disabled : ""
          }`}
          onClick={handlePaginationClick}
          disabled={isThisLastPage}
        >
          Показати більше
        </button>
      </div>
    </>
  );
};

export default DesctopPagination;
