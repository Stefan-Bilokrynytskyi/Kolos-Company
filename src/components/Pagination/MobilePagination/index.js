import classes from "./Pagination.module.scss";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import leftArrow from "../../../icons/left-arrow.svg";
import rightArrow from "../../../icons/right-arrow.svg";
import store from "../../../store/Products";
import { Link, useNavigate } from "react-router-dom";

const MobilePagination = observer(() => {
  let initPage = +store.currentPage;
  const [page, setPage] = useState(initPage);
  const navigate = useNavigate();

  const leftArrowHandler = () => {
    if (page === 1) {
      return; // Не выполняем обработчик, если страница уже на минимуме
    }

    setPage((page) => page - 1);
    navigate(store.prevUrl);
  };

  const rightArrowHandler = () => {
    if (page === store.maxPages) {
      return; // Не выполняем обработчик, если страница уже на максимуме
    }

    setPage((page) => page + 1);
    navigate(store.nextUrl);
  };

  return (
    <div className={classes.flex_container}>
      <div className={classes.pagination}>
        <img
          src={leftArrow}
          alt="left arrow"
          onClick={leftArrowHandler}
          className={page === 1 ? classes.disabled : ""}
          disabled={page === 1}
        />

        <div className={classes.page_number}>
          {page} / {store.maxPages}
        </div>

        <img
          src={rightArrow}
          alt="right arrow"
          onClick={rightArrowHandler}
          className={page === store.maxPages ? classes.disabled : ""}
          disabled={page === store.maxPages}
        />
      </div>
    </div>
  );
});

export default MobilePagination;
