import classes from "./Header.module.scss";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Accordion from "../Acordion/Acordion";
import Burger from "../../icons/burger.svg";
import Logo from "../../icons/logo.svg";
import Cart from "../../icons/cart.svg";
import { Link } from "react-router-dom";
import store from "../../store/Products";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Contacts from "./Contacts";
import { toJS, runInAction } from "mobx";
const Header = observer(() => {
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
    <header>
      <div className={classes.header_conteiner}>
        {isNavOpen && (
          <div className={classes.overlay} onClick={showNavbar}></div>
        )}
        <div className={classes.burger_menu}>
          <button className={classes.nav_btn} onClick={showNavbar}>
            <img src={Burger} alt="menu"></img>
          </button>
        </div>
        <Link to="/" className={classes.logo_container}>
          <div className={classes.name}>КОЛОС</div>
          <img src={Logo} className={classes.logo} alt="Logo"></img>
        </Link>
        <div className={classes.cart_conteiner}>
          <Link to="/basket">
            <img src={Cart} alt="cart"></img>
            <div className={classes.cart_quantity}>{store.cartQuantity}</div>
          </Link>
        </div>

        <div className={classes.stripe}></div>

        <nav
          className={
            isNavOpen
              ? `${classes.responsive_nav} ${classes.scrollable_nav}`
              : ""
          }
        >
          <div
            className={classes.control_conteiner}
            style={{
              backgroundColor: store.isGlobalCategory ? "#fff" : "#efe9e9",
            }}
          >
            <button
              className={`${classes.nav_btn} ${classes.nav_cross_btn}`}
              onClick={showNavbar}
            >
              <AiOutlineClose className={classes.cross} />
            </button>
            <div className={`${classes.stripe} ${classes.stripe_burger}`}></div>
          </div>
          {store.isGlobalCategory && (
            <div className={classes.accordion_container}>
              {accordionSections.map((section) => (
                <Accordion
                  name={Object.keys(section)[0]}
                  listMenu={section[Object.keys(section)[0]]}
                  key={Object.keys(section)[0]}
                />
              ))}
            </div>
          )}
          <Contacts />
          <div className={classes.menu_nav}>
            <a href="/#">Home</a>
            <a href="/#">Shop</a>
            <a href="/#">Sale</a>
            <a href="/#">About us</a>
          </div>
        </nav>
      </div>
    </header>
  );
});

export default Header;
