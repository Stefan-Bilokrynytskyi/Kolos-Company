import classes from "./Dropdown.module.scss";
import DropDown from "../../icons/dropdown-black.svg";

const Dropdown = ({ name, isOpen, setIsOpen, ...props }) => {
  return (
    <div className={classes.accordion}>
      <button onClick={setIsOpen} className={classes.accordion_visible}>
        <span className={classes.name_category}>{name}</span>
        <img
          className={isOpen ? `${classes.active}` : ""}
          src={DropDown}
          alt="dropdown"
        />
      </button>

      <div
        className={
          isOpen
            ? `${classes.accordion_toggle} ${classes.animated}`
            : `${classes.accordion_toggle}`
        }
      >
        {isOpen && props.children}
      </div>
    </div>
  );
};

export default Dropdown;
