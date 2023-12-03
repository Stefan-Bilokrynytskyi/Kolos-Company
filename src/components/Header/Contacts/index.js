import classes from "./Contacts.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../../icons/logo.svg";
import Face from "../../../icons/face.svg";
import Car from "../../../icons/car.svg";
import mail from "../../../icons/mail.svg";
import inst from "../../../icons/instagram.svg";
import phone from "../../../icons/phone.svg";
import telegram from "../../../icons/telegram.svg";

const Contacts = () => {
  return (
    <div className={classes.addition_block}>
      <div className={classes.menu_container}>
        <img src={Face} alt=""></img>
        <Link to="/contact-us">
          <div className={`${classes.menu_link} ${classes.more_gap}`}>
            Підтримка
          </div>
        </Link>
      </div>
      <div className={classes.menu_container}>
        <img src={Car} alt=""></img>
        <Link to="/#">
          <div className={classes.menu_link}>Доставка</div>
        </Link>
      </div>
      <div className={classes.menu_container}>
        <img src={Logo} alt="" className={classes.small_logo}></img>
        <Link to="/about">
          <div className={`${classes.menu_link} ${classes.more_gap}`}>
            Про нас
          </div>
        </Link>
      </div>
      <div className={classes.menu_container}>
        <img src={mail} alt="" className={classes.mail}></img>
        <Link to="/#">
          <div className={`${classes.menu_link}`}>kolos@gmail.com</div>
        </Link>
      </div>
      <div className={classes.menu_container}>
        <img src={inst} alt="" className={classes.inst}></img>
        <Link to="/#">
          <div className={`${classes.menu_link} ${classes.more_gap}`}>
            kls.ua
          </div>
        </Link>
      </div>
      <div className={classes.menu_container}>
        <img src={phone} alt="" className={classes.phone}></img>
        <Link to="/#">
          <div className={`${classes.menu_link} ${classes.more_gap}`}>
            +38 096 510 66 22
          </div>
        </Link>
      </div>
      <div className={classes.menu_container}>
        <img src={telegram} alt="" className={classes.telegram}></img>
        <Link to="/#">
          <div className={`${classes.menu_link} ${classes.more_gap}`}>
            @kolos.ua
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
