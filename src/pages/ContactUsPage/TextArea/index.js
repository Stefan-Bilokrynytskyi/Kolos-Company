import classes from "./TextArea.module.scss";
import { useState } from "react";

function TextArea({ messageChanger }) {
  const [value, setValue] = useState("");

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    messageChanger(e.target.value);
  };

  return (
    <div className={classes.area}>
      <label className={classes.label}>Повідомлення</label>
      <textarea
        className={classes.textarea}
        value={value}
        onChange={(e) => onChangeHandler(e)}
      />
    </div>
  );
}

export default TextArea;
