import React from "react";
import classes from "./HowReturnProduct.module.scss";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function HowReturnProduct() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const title = isMobile ? (
    <>
      <h2 className={classes.first_title}>
        <p>ЯК ПОВЕРНУТИ</p>
        <span className={classes.flexGrow}></span>
      </h2>
      <h2 className={classes.second_title}>ТОВАР?</h2>
    </>
  ) : (
    <div className={classes.title_desktop}>
      <h2>ЯК ПОВЕРНУТИ ТОВАР?</h2>
      <span className={classes.flexGrow}></span>
    </div>
  );
  return (
    <div className={classes.container}>
      <section className={classes.help_return}>
        <div className={classes.title_container}>{title}</div>
        <ul>
          <li>
            <span className={classes.digit}>1.</span> Перевірте Умови
            Повернення: Ретельно перегляньте розділ "Умови повернення" на
            веб-сайті інтернет-магазину, щоб дізнатися про терміни, стан товару
            та інші умови.
          </li>
          <li>
            <span className={classes.digit}>2.</span>{" "}
            <Link to={"/contact-us"} className={classes.link}>
              Заповніть заявку на повернення &gt;
            </Link>{" "}
            (цей документ міститься у замовленні): Ретельно заповніть всі
            необхідні поля, вказавши причину повернення
          </li>
          <li>
            <span className={classes.digit}>3.</span> Приготуйте Документи:
            Забезпечте копію чека, який підтверджує вашу покупку. Це також може
            бути електронний чек або підтвердження оплати.
          </li>
          <li>
            <span className={classes.digit}>4.</span> Запакуйте Товар: Поверніть
            товар в оригінальній упаковці, якщо це можливо, та переконайтеся, що
            він знаходиться в тому ж стані, як і при отриманні.
          </li>
          <li>
            <span className={classes.digit}>5.</span> Організуйте Пересилку:
            Витрати за повернення товару несе покупець. Організуйте доставку
            товару назад до вказаного консультантом відділення Нової Пошти.
          </li>
          <li>
            <span className={classes.digit}>6.</span> Відстежуйте Стан
            Повернення: Слідкуйте за статусом вашого повернення через
            відстеження пересилки.
          </li>
          <li>
            <span className={classes.digit}>7.</span> Повернення Коштів: Після
            отримання товару магазин розгляне ваш запит та поверне вам кошти у
            термін 1-3 банківських днів. Перевірте свій рахунок або кредитну
            картку на предмет повернення коштів.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default HowReturnProduct;
