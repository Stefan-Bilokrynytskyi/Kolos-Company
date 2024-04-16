import classes from "./DesctopPagination.module.scss";
import store from "../../../store/Products";

const DesctopPagination = () => {
  console.log(store.nextUrl);
  const handlePaginationClick = () => {};
  return (
    <div className={classes.container}>
      <button className={classes.pagination_btn}>Показати більше</button>
    </div>
  );
};

export default DesctopPagination;
