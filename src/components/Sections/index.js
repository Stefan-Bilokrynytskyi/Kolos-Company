import classes from "./Sections.module.scss";
import Classic from "../../img/Classic.jpg";
import Casual from "../../img/Casual.jpg";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Sections() {
  const [isChosen, setIsChosen] = useState(false);
  return (
    <div className={classes.sections}>
      <Link to="/products">
        <div className={classes.section_conteiner}>
          <div className={classes.section}>
            {isChosen && <div className={classes.section_overlay}></div>}
            <div className={classes.section_name}>Кежуал</div>
          </div>
        </div>
      </Link>
      <Link to="/products">
        <div className={classes.section_conteiner}>
          <div className={classes.section_1}>
            {!isChosen && <div className={classes.section_overlay}></div>}
            <div className={classes.section_name}>Класика</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Sections;
