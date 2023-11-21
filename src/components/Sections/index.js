import classes from "./Sections.module.scss";
import Classic from "../../img/Classic.jpg";
import Casual from "../../img/Casual.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import store from "../../store/Products";
import { observer } from "mobx-react-lite";
import CollectionSlider from "../Sections/CollectionSlider";

const Sections = observer(() => {
  const [isChosen, setIsChosen] = useState(false);

  const changeUrlHandler = (url) => {
    store.setGlobalCategory(true);
    store.setUrl(url);
  };

  return (
    <div className={classes.sections}>
      <Link
        to={`/products/casual/?amount_items=${store.limit}&page=${store.page}`}
        onClick={() =>
          changeUrlHandler(
            `/products/casual/?amount_items=${store.limit}&page=${store.page}`
          )
        }
      >
        <div className={classes.section_conteiner}>
          <div className={classes.section}>
            <div className={classes.section_name}>Кежуал</div>
          </div>
        </div>
      </Link>
      <Link
        to={`/products/classic/?amount_items=${store.limit}&page=${store.page}`}
        onClick={() =>
          changeUrlHandler(
            `/products/classic/?amount_items=${store.limit}&page=${store.page}`
          )
        }
      >
        <div className={classes.section_conteiner}>
          <div className={classes.section_1}>
            <div className={classes.section_name}>Класика</div>
          </div>
        </div>
      </Link>
      <CollectionSlider />
    </div>
  );
});

export default Sections;
