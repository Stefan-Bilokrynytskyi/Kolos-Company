import classes from "./Footer.module.scss";
import Logo from "../../icons/logo-white.svg";
import Mail from "../../icons/mail.svg";
import Instagram from "../../icons/instagram.svg";
import Phone from "../../icons/phone.svg";
import telegram from "../../icons/telegram.svg";
import car from "../../icons/car.svg";
import face from "../../icons/face.svg";
import { Link } from "react-router-dom";
import rightArrow from "../../icons/right-arrow-white.svg";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_content}>
        <div className={classes.footer_logo}>
          <img src={Logo} className={classes.logo} alt="logo" />
        </div>
        <div className={classes.footer_links}>
          <div className={classes.link}>
            <img src={face} alt="face" className={classes.face}></img>
            <Link to="/about">Про нас</Link>
            <img
              src={rightArrow}
              alt="About us link"
              className={classes.arrow}
            ></img>
          </div>
          <div className={classes.link}>
            <img src={car} alt="car" className={classes.car}></img>
            <Link to="/return_product">Повернення товару</Link>
            <img
              src={rightArrow}
              alt="return of product link"
              className={classes.arrow}
            ></img>
          </div>
          <div className={classes.link}>
            <img src={face} alt="car" className={classes.face}></img>
            <Link to="/contact-us">Підтримка</Link>
            <img
              src={rightArrow}
              alt="Support link"
              className={classes.arrow}
            ></img>
          </div>
        </div>
        <div className={classes.footer_icons}>
          <div className={classes.icon_container}>
            <img
              className={`${classes.icon} ${classes.mail}`}
              src={Mail}
              alt="mail"
            />
            <a href="mailto:youremail@example.com">
              <div className={classes.icon_text}>kolos@gmail.com</div>
            </a>
          </div>
          <div className={classes.icon_container}>
            <img
              className={`${classes.icon} ${classes.inst}`}
              src={Instagram}
              alt="inst"
            />
            <a href="https://www.instagram.com/yourinstagram">
              <div className={classes.icon_text}>kls.ua</div>
            </a>
          </div>
          <div className={classes.icon_container}>
            <img
              className={`${classes.icon} ${classes.phone}`}
              src={Phone}
              alt="phone"
            />
            <a href="tel:+1234567890">
              <div className={classes.icon_text}>+38 096 510 66 22</div>
            </a>
          </div>
          <div className={classes.icon_container}>
            <img
              className={`${classes.icon} ${classes.tg}`}
              src={telegram}
              alt="telegram"
            />
            <a href="#">
              <div className={classes.icon_text}>@kolos.ua</div>
            </a>
          </div>
        </div>
        <div className={classes.categories}>
          <div className={classes.category}>Жінки</div>
          <div className={classes.category}>Чоловіки</div>
          <div className={classes.category}>Колекції</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
