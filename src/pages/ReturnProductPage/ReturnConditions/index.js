import React from "react";
import classes from "./ReturnConditions.module.scss";
import { useMediaQuery } from "react-responsive";

function ReturnConditions() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const conds = isMobile ? (
    <>
      <h2 className={classes.title_mobile}>
        <p>УМОВИ</p>
        <div className={classes.flexGrow}></div>
      </h2>
      <h2 className={classes.title}>ПОВЕРНЕННЯ ТОВАРУ:</h2>
    </>
  ) : (
    <h2 className={classes.title_desktop}>
      <p className={classes.title}>УМОВИ ПОВЕРНЕННЯ ТОВАРУ</p>
      <div className={classes.flexGrow}></div>
    </h2>
  );

  const benefits = isMobile ? (
    <>
      <h3>
        <div className={classes.line}></div>
        Обравши повернення товару через магазин KOLOS, ви отримаєте:
      </h3>
    </>
  ) : (
    <div className={classes.benefits_container}>
      <h3 className={classes.title}>
        Обравши повернення товару через магазин KOLOS, ви отримаєте:
      </h3>
      <div className={classes.flexGrow}></div>
    </div>
  );
  return (
    <div className={classes.container}>
      <section className={classes.conditions_section}>
        <div className={classes.title_block}>
          <div className={classes.flexContainer}>
            <div className={classes.title_conditions}>{conds}</div>
          </div>
        </div>

        <div className={classes.return_rules}>
          <ul>
            <li>
              <span className={classes.digit}>1.</span> Товар може бути
              повернений протягом 14 днів з моменту отримання покупцем.
            </li>
            <li>
              <span className={classes.digit}>2.</span> Товар повинен бути в
              оригінальній упаковці та стані, придатному для продажу.
            </li>
            <li>
              <span className={classes.digit}>3.</span> Для повернення потрібно
              мати чек або інший документ, що підтверджує покупку.
            </li>
            <li>
              <span className={classes.digit}>4.</span> Покупець зобов'язаний
              повідомити про намір повернення та отримати інструкції від служби
              підтримки перед відправленням товару.
            </li>
            <li>
              <span className={classes.digit}>5.</span> Витрати на повернення
              товару несе покупець.
            </li>
            <li>
              <span className={classes.digit}>6.</span> Повернення коштів може
              бути здійснено на банківську картку або інший рахунок протягом 1-3
              банківських днів, з моменту отримання товару продавцем.
            </li>
          </ul>
        </div>

        <div className={classes.return_benefits}>
          {benefits}
          <ul>
            <li className={classes.advantages}>
              ✔ Кваліфіковану поміч наших консультантів;
            </li>
            <li>✔ Простий обмін товару на аналогічну модель іншого розміру;</li>
            <li>✔ Швидке повернення коштів на свій рахунок.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ReturnConditions;
