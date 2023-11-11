import classes from "./Header.module.scss";
import { useRef, useState } from "react";
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

const Header = observer(() => {
  useEffect(() => {
    const storedBasket = localStorage.getItem("basket");

    if (storedBasket) {
      store.setNewBasket(JSON.parse(storedBasket));
    }
  }, []);

  const arrFemSections = [
    <Link to="/sweaters">Верхній одяг</Link>,
    <Link to="/sd">Футболки</Link>,
    <Link to="/shorts">Кофти</Link>,
    <Link to="/tops">Головні убори</Link>,
    <Link to="/complects">Сумки & Аксесуари</Link>,
    <Link to="/hoodies">Штани</Link>,
    <Link to="/sweatshots">Рубашки</Link>,
    <Link to="/bodies">Боді</Link>,
  ];
  const arrMAlSections = [
    <Link to="/sweaters">Верхній одяг</Link>,
    <Link to="/bodies">Футболки</Link>,
    <Link to="/shorts">Кофти</Link>,
    <Link to="/tops">Головні убори</Link>,
    <Link to="/complects">Сумки & Аксесуари</Link>,
    <Link to="/hoodies">Штани</Link>,
    <Link to="/sweatshots">Рубашки</Link>,
  ];

  const arrCollections = [
    <Link to="/collections/kolos">Колос</Link>,
    <Link to="/collections/kashtan">Каштан</Link>,
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);

  const showNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

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

        <nav className={isNavOpen ? classes.responsive_nav : ""}>
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
              <Accordion listMenu={arrFemSections} name="Жінки" />
              <Accordion listMenu={arrMAlSections} name="Чоловіки" />
              <Accordion listMenu={arrCollections} name="Колекції" />
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
