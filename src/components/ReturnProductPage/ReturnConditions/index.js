import React from "react";
import classes from "./ReturnConditions.module.scss";

function ReturnConditions() {
  return (
    <div className={classes.container}>
      <section className={classes.conditions_section}>
        <div className={classes.title_block}>
          <div className={classes.flexContainer}>
            <div className={classes.title_conditions}>
              <h2>
                <p>УМОВИ</p>
                <div className={classes.flexGrow}></div>
              </h2>
              <h2 className={classes.title}>
                ПОВЕРНЕННЯ ТОВАРУ:
              </h2>
            </div>
          </div>
        </div>

        <div className={classes.return_rules}>
          <ul>
            <li>1. Товар може бути повернений протягом 14 днів з моменту отримання покупцем.</li>
            <li>2. Товар повинен бути в оригінальній упаковці та стані, придатному для продажу.</li>
            <li>3. Для повернення потрібно мати чек або інший документ, що підтверджує покупку.</li>
            <li>4. Покупець зобов'язаний повідомити про намір повернення та отримати інструкції від служби підтримки перед відправленням товару.</li>
            <li>5. Витрати на повернення товару несе покупець.</li>
            <li>6. Повернення коштів може бути здійснено на банківську картку або інший рахунок протягом 1-3 банківських днів, з моменту отримання товару продавцем.</li>
          </ul>
        </div>

        <div className={classes.return_benefits}>
          
          <h3><div className={classes.line}></div>Обравши повернення товару через магазин KOLOS, ви отримаєте:</h3>
          <ul>
            <li>
              ✔ Кваліфіковану поміч наших консультантів;
            </li>
            <li>
              ✔ Простий обмін товару на аналогічну модель іншого розміру;
            </li>
            <li>
              ✔ Швидке повернення коштів на свій рахунок.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ReturnConditions;
