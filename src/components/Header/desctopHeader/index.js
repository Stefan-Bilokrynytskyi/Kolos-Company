import classes from "./DesctopHeader.module.scss";
import { useState } from "react";
import Logo from "../../../icons/logo-black.svg";
import Cart from "../../../icons/cart.svg";
import { Link } from "react-router-dom";
import store from "../../../store/Products";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { toJS, runInAction } from "mobx";
import CategoriesMenu from "./CategoriesMenu";
import Stripe from "../../UI/Stripe";

const DesctopHeader = observer((props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  let accordionSections = [];
  runInAction(() => {
    accordionSections = toJS(store.sections);
  });
  const showNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };
  useEffect(() => {
    const body = document.body;

    if (isNavOpen) {
      body.classList.add(classes.noScroll);
    } else {
      body.classList.remove(classes.noScroll);
    }

    return () => {
      body.classList.remove(classes.noScroll);
    };
  }, [isNavOpen]);

  return (
    <>
      <header className={classes.header_container}>
        <Link to="/">
          <img src={Logo} alt="Logo"></img>
        </Link>
        <nav className={classes.navigation_container}>
          <Link to="/contact-us">
            <div className={classes.header_link}>Підтримка</div>
          </Link>
          <Link to="/about">
            <div className={classes.header_link}>Доставка</div>
          </Link>
          <Link to="/about">
            <div className={classes.header_link}>Про нас</div>
          </Link>
          <Link to="/about">
            <div className={classes.header_link}>Всі товари</div>
          </Link>
        </nav>
        <CategoriesMenu accordionSections={accordionSections} />

        <Link to="/cart" className={classes.cart_link}>
          <div className={classes.cart_container}>
            <img src={Cart} alt="cart" className={classes.cart_img}></img>
            <div className={classes.cart_quantity}>{store.cartQuantity}</div>
          </div>
        </Link>
      </header>
      <div
        style={{
          position: "relative",
          margin: "0 3.1875rem",
        }}
      >
        <Stripe customStyles={{ backgroundColor: "#d1d1d1" }} />
      </div>
    </>
  );
});

export default DesctopHeader;
