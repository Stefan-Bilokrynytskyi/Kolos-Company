import classes from "./MobileHeader.module.scss";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Accordion from "../../Acordion/Acordion";
import Burger from "../../../icons/burger.svg";
import Logo from "../../../icons/logo-black.svg";
import Cart from "../../../icons/cart.svg";
import { Link } from "react-router-dom";
import store from "../../../store/Products";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Contacts from "../Contacts";
import { toJS, runInAction } from "mobx";

const MobileHeader = observer((props) => {
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

  let logo, cart, burger, color, bgColor;

  if (props.logo) {
    logo = props.logo;
    cart = props.cart;
    burger = props.burger;
    color = props.color;
    bgColor = props.bgColor;
    console.log(props.cart);
  } else {
    logo = Logo;
    cart = Cart;
    burger = Burger;
    color = "black";
    bgColor = "white";
  }

  return (
    <header>
      <div
        className={classes.header_conteiner}
        style={{ backgroundColor: `${bgColor}` }}
      >
        {isNavOpen && (
          <div className={classes.overlay} onClick={showNavbar}></div>
        )}
        <div className={classes.burger_menu}>
          <button className={classes.nav_btn} onClick={showNavbar}>
            <img src={burger} alt="menu"></img>
          </button>
        </div>
        <Link to="/" className={classes.logo_container}>
          <img src={logo} className={classes.logo} alt="Logo"></img>
        </Link>
        <div className={classes.cart_conteiner}>
          <Link to="/basket">
            <img src={cart} alt="cart"></img>
            <div
              className={classes.cart_quantity}
              style={{ color: `${color}` }}
            >
              {store.cartQuantity}
            </div>
          </Link>
        </div>

        <div
          className={classes.stripe}
          style={{
            display: isNavOpen ? "none" : "block",
            backgroundColor: `${color}`,
          }}
        ></div>

        <nav
          className={
            isNavOpen
              ? `${classes.responsive_nav} ${classes.scrollable_nav}`
              : ""
          }
          data-testid="nav"
        >
          <div className={classes.control_conteiner}>
            <button
              className={`${classes.nav_btn} ${classes.nav_cross_btn}`}
              onClick={showNavbar}
            >
              <AiOutlineClose className={classes.cross} />
            </button>
            {store.isGlobalCategory && (
              <div
                className={`${classes.stripe} ${classes.stripe_burger}`}
              ></div>
            )}
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

export default MobileHeader;
