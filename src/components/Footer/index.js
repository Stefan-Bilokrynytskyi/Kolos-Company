import classes from "./Footer.module.scss";

import Logo from "../../icons/logo-white.svg";
import Mail from "../../icons/mail.svg";
import Instagram from "../../icons/instagram.svg";
import Phone from "../../icons/phone.svg";
import telegram from "../../icons/telegram.svg";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_content}>
        <div className={classes.footer_logo}>
          <img src={Logo} className={classes.logo} alt="logo" />
        </div>
        <div className={classes.footer_links}>
          <Link to="/about">Про нас</Link>
          <Link to="/delivery">Доставка</Link>
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
