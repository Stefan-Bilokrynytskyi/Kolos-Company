import Header from "../../components/Header";
import logo from "../../icons/logo-white.svg";
import burger from "../../icons/burger-white.svg";
import cart from "../../icons/cart-white.svg";
import classes from "./OrderCompleted.module.scss";
import arrow from "../../icons/right-arrow-white.svg";
import { useNavigate } from "react-router-dom";

function OrderCompleted({ orderName }) {
  const navigate = useNavigate();
  const backToShop = () => {
    navigate("/");
  };
  return (
    <div className={classes.container}>
      <Header
        logo={logo}
        burger={burger}
        cart={cart}
        color={"#fff"}
        bgColor={"#0D2C1A"}
      />
      <div className={classes.message}>
        Ваше {orderName} успішно надіслано менеджеру
      </div>
      <button className={classes.button} onClick={backToShop}>
        <div className={classes.flex_container}>
          <div className={classes.text}>Далі до покупок</div>
          <img
            src={arrow}
            alt="arrow"
            style={{ width: "18px", height: "18px" }}
          />
        </div>
      </button>
    </div>
  );
}

export default OrderCompleted;
