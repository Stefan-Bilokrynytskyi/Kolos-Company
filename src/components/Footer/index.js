import classes from "./Footer.module.scss";
import Logo from "../../icons/logo-white.svg";
import Mail from "../../icons/mail.svg";
import Instagram from "../../icons/instagram.svg";
import Phone from "../../icons/phone.svg";
import telegram from "../../icons/telegram.svg";
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
            <Link to="/about">Про нас</Link>
            <img src={rightArrow} alt="About us link"></img>
          </div>
          <div className={classes.link}>
            <Link to="/return_product">Повернення товару</Link>
            <img src={rightArrow} alt="return of product link"></img>
          </div>
          <div className={classes.link}>
            <Link to="/contact-us">Підтримка</Link>
            <img src={rightArrow} alt="Support link"></img>
          </div>
        </div>
        <div className={classes.footer_icons}>
          <a href="mailto:youremail@example.com">
            <img className={classes.icon} src={Mail} alt="mail" />
          </a>
          <a href="https://www.instagram.com/yourinstagram">
            <img className={classes.icon} src={Instagram} alt="inst" />
          </a>
          <a href="tel:+1234567890">
            <img className={classes.icon} src={Phone} alt="phone" />
          </a>
          <a href="#">
            <img src={telegram} alt="telegram" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
