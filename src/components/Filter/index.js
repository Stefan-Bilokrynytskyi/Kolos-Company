import classes from "./Filter.module.scss";
import FilterIcon from "../../icons/filter.svg";

function Filter() {
  return (
    <div className={classes.filter_container}>
      <div className={classes.filter_title}>Фільтр</div>
      <img src={FilterIcon} alt="filter" />
    </div>
  );
}

export default Filter;
