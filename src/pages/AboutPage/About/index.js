import React from "react";
import classes from "./About.module.scss";
import Rectangle from "../../../img/Rectangle.jpg";
import Stripe from "../../../components/UI/Stripe";
import logoDesktop from "../../../icons/logo-black.svg";
import logoMobile from "../../../icons/logo-2.svg";
import { useMediaQuery } from "react-responsive";

function About() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const logo = isMobile ? logoMobile : logoDesktop;
  return (
    <>
      <div className={classes.picture}>
        <img className={classes.logo} src={logo} alt="Logo"></img>
        <p className={classes.caption}>Про нас</p>
      </div>

      <div className={classes.history_block}>
        <div className={classes.subtitle_container}>
          <h1 className={classes.subtitle}>ІСТОРІЯ БРЕНДУ</h1>
          <Stripe
            customStyles={{
              backgroundColor: "black",
              left: "0",
              bottom: "50%",
              transform: "translate(0, 50%)",
              zIndex: "-1",
              width: "100%",
            }}
          />
        </div>
        <p className={classes.info}>
          Історія компанії Колос почалася у 2023 році. Засновники — енергійні та
          креативні хлопці, брати з невеликого міста в західній частині України,
          — вирішили спрямувати свою діяльність на розвиток української
          streetwear культури. Восени того ж року першим релізом була випущена
          парка під назвою Колос. Вона стала першою ластівкою у широкому
          асортименті моделей компанії, розроблених і втілених у життя. Українці
          підтримали молодіжний бренд і вітали появу новинок.
        </p>
      </div>

      <div className={classes.pictures_grid}>
        <div className={classes.pictures_grid_container}>
          <div className={classes.first_image}>
            <img
              src={Rectangle}
              alt="Rectangle"
              className={classes.image}
            ></img>
          </div>
          <div className={classes.second_image}>
            <img
              src={Rectangle}
              alt="Rectangle"
              className={classes.image}
            ></img>
          </div>
          <div className={classes.third_image}>
            <img
              src={Rectangle}
              alt="Rectangle"
              className={classes.image}
            ></img>
          </div>
        </div>
      </div>

      <div className={classes.ourforced_block}>
        <div className={classes.subtitle_container}>
          <h1 className={classes.subtitle}>НАШ ПОСИЛ</h1>
          <Stripe
            customStyles={{
              backgroundColor: "black",
              left: "0",
              bottom: "50%",
              transform: "translate(0, 50%)",
              zIndex: "-1",
              width: "100%",
            }}
          />
        </div>
        <p className={classes.info}>
          Історія компанії Колос почалася у 2023 році. Засновники — енергійні та
          креативні хлопці, брати з невеликого міста в західній частині України,
          — вирішили спрямувати свою діяльність на розвиток української
          streetwear культури. Восени того ж року першим релізом була випущена
          парка під назвою Колос. Вона стала першою ластівкою у широкому
          асортименті моделей компанії, розроблених і втілених у життя. Українці
          підтримали молодіжний бренд і вітали появу новинок.
        </p>
      </div>
    </>
  );
}

export default About;
