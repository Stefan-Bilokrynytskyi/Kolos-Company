import React from "react";
import classes from "./About.module.scss"
import Logo from "../../../icons/logo.svg";
import Rectangle from "../../../img/Rectangle.jpg"

function About() {
  return (
    <div>
      <div className={classes.picture}>
        <img src={Logo} alt="Logo" className={classes.logo} />
        <h1>КОЛОС</h1>
        <p>Про нас</p>
      </div>

      <div className={classes.history_block}>
        <h1>
          Історія бренду
        </h1>
        <p>
          Історія компанії Колос почалася у 2023 році. Засновники — енергійні та креативні хлопці, брати з невеликого міста в західній частині України, — вирішили спрямувати свою діяльність на розвиток української streetwear культури. Восени того ж року першим релізом була випущена парка під назвою Колос. Вона стала першою ластівкою у широкому асортименті моделей компанії, розроблених і втілених у життя. Українці підтримали молодіжний бренд і вітали появу новинок.
        </p>
      </div>

      <div className={classes.pictures_grid}>
        <div className={classes.pictures_grid_container}>
          <img src={Rectangle} className={classes.first_image}/>
          <img src={Rectangle} className={classes.second_image}/>
          <img src={Rectangle} className={classes.third_image}/>
        </div>
      </div>

      <div className={classes.ourforced_block}>
        <h1>
          Наш посил
        </h1>
        <p>
          Історія компанії Колос почалася у 2023 році. Засновники — енергійні та креативні хлопці, брати з невеликого міста в західній частині України, — вирішили спрямувати свою діяльність на розвиток української streetwear культури. Восени того ж року першим релізом була випущена парка під назвою Колос. Вона стала першою ластівкою у широкому асортименті моделей компанії, розроблених і втілених у життя. Українці підтримали молодіжний бренд і вітали появу новинок.
        </p>
      </div>
    </div>

    
  )
}

export default About;