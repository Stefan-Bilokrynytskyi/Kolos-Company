import React from "react";
import classes from "./About.module.scss";
import Rectangle from "../../../img/Rectangle.jpg";
import Stripe from "../../UI/Stripe";

function About() {
  return (
    <div>
      <div className={classes.picture}>
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
        <p>
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
          <img src={Rectangle} className={classes.first_image} />
          <img src={Rectangle} className={classes.second_image} />
          <img src={Rectangle} className={classes.third_image} />
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
        <p>
          Історія компанії Колос почалася у 2023 році. Засновники — енергійні та
          креативні хлопці, брати з невеликого міста в західній частині України,
          — вирішили спрямувати свою діяльність на розвиток української
          streetwear культури. Восени того ж року першим релізом була випущена
          парка під назвою Колос. Вона стала першою ластівкою у широкому
          асортименті моделей компанії, розроблених і втілених у життя. Українці
          підтримали молодіжний бренд і вітали появу новинок.
        </p>
      </div>
    </div>
  );
}

export default About;
