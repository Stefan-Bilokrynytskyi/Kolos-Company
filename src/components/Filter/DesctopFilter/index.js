import Stripe from "../../UI/Stripe";
import classes from "./DesctopFilter.module.scss";
import Filters from "./Filters";

const DesctopFilter = () => {
  const filters = ["Ціна", "Розмір", "Стать"];

  return (
    <div className={classes.container}>
      <Stripe
        customStyles={{
          height: "2px",
          width: "100%",
          backgroundColor: "#D9D9D9",
        }}
      />
      <div className={classes.flex_container}>
        <button className={classes.filter_btn}>Застосувати фільтр</button>
        <button className={classes.filter_btn}>Очистити фільтр</button>
        <Filters />
      </div>
      <Stripe
        customStyles={{
          height: "2px",
          width: "100%",
          backgroundColor: "#D9D9D9",
          top: 0,
        }}
      />
    </div>
  );
};

export default DesctopFilter;
