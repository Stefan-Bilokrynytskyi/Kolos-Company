import classes from "./PresentOffer.module.scss";
import Stripe from "../../UI/Stripe";
import Casual from "../../../img/Rectangle.jpg";

function PresentOffer() {
  return (
    <div>
      <div className={classes.name_container}>
        <div className={classes.name}>ХОЧЕТЕ ЗРОБИТИ ПОДАРУНОК?</div>
        <Stripe
          customStyles={{
            backgroundColor: "black",
            left: "0",
            bottom: "75%",
            transform: "translate(0, 50%)",
            zIndex: "-1",
            width: "100%",
          }}
        />
      </div>
      <label className={classes.checkbox_container}>
        <input type="checkbox" className={classes.checkbox} />
        <div className={classes.add_package}>
          Додати подарункове пакування до замовлення
        </div>
        <div className={classes.price}>65</div>
      </label>
      <div className={classes.description}>
        Замовлення буде надіслано у фірмовому папері і коробці від бренду
        “Колос”
      </div>
      <img src={Casual} className={classes.package_photo} alt="package"></img>
      <Stripe
        customStyles={{
          backgroundColor: "black",
          position: "relative",
          width: "100%",
          marginBottom: "16px",
        }}
      />
    </div>
  );
}

export default PresentOffer;
