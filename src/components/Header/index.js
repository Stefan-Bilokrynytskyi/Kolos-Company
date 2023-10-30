import classes from "./Header.module.scss";
import { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Accordion from "../Acordion/Acordion";
import Burger from "../../icons/burger.svg";
import Logo from "../../icons/logo.svg";
import Cart from "../../icons/cart.svg";
import CloseBurger from "../../icons/CloseBurgerMenu.svg";
import { Link } from "react-router-dom";
import store from "../../store/Products";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

const Header = observer(() => {
  useEffect(() => {
    const storedBasket = localStorage.getItem("basket");

    if (storedBasket) {
      store.setNewBasket(JSON.parse(storedBasket));
    }
  }, []);

  const arrFemSections = [
    <Link to="/sweaters">Светри</Link>,
    <Link to="/bodies">Боді</Link>,
    <Link to="/shorts">Футболки</Link>,
    <Link to="/tops">Топи</Link>,
    <Link to="/complects">Комплекти</Link>,
    <Link to="/hoodies">Худі</Link>,
    <Link to="/sweatshots">Світшоти</Link>,
  ];
  // const [cartQuantity, setCartQuantity] = useState(store.basket.length);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState();

  const showNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <div className={classes.header_conteiner}>
        {isNavOpen && <div className={classes.overlay}></div>}
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
          <div className={classes.control_conteiner}>
            <button
              className={`${classes.nav_btn} ${classes.nav_close_btn}`}
              onClick={showNavbar}
            >
              <img src={CloseBurger} alt="CloseBurgerMenu" />
            </button>

            <button
              className={`${classes.nav_btn} ${classes.nav_cross_btn}`}
              onClick={showNavbar}
            >
              <AiOutlineClose className={classes.cross} />
            </button>
            <div className={`${classes.stripe} ${classes.stripe_burger}`}></div>
          </div>
          <div className={classes.accordion_container}>
            <Accordion listMenu={arrFemSections} />
          </div>
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
