import Input from "./Input";
import { useState } from "react";

function Inputs({ nameChanger, phoneChanger, themeChanger }) {
  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState({ value: true, length: 0 });

  const [phone, setPhone] = useState("");
  const [phoneValid, setPhoneValid] = useState({ value: true, length: 0 });

  const [theme, setTheme] = useState("");
  const [themeValid, setThemeValid] = useState({ value: true, length: 2 });

  const nameChangeHandler = (e) => {
    const userName = e.target.value;
    setName(userName);
    const regex = /^[a-zA-Zа-яА-ЯІіЇїЄє\s-]+$/;

    if (regex.test(userName)) {
      if (userName.length >= 2) {
        setNameValid((nameValid) => ({
          ...nameValid,
          value: true,
          length: userName.length,
        }));
        nameChanger(userName);
      } else {
        setNameValid((nameValid) => ({
          ...nameValid,
          value: false,
          length: userName.length,
        }));
        nameChanger("");
      }
    } else {
      setNameValid((nameValid) => ({
        ...nameValid,
        value: false,
        length: userName.length,
      }));
      nameChanger("");
    }
  };

  const phoneChangeHandler = (e) => {
    const userPhone = e.target.value;
    if (!/^[+0-9]{0,15}$/.test(userPhone)) return;
    const regex = /^\+?\d{1,15}$/;
    setPhone(userPhone);

    if (regex.test(userPhone)) {
      setPhoneValid((phoneValid) => ({
        ...phoneValid,
        value: true,
        length: userPhone.length,
      }));
      phoneChanger(userPhone);
    } else {
      setPhoneValid((phoneValid) => ({
        ...phoneValid,
        value: false,
        length: userPhone.length,
      }));
      phoneChanger("");
    }
  };

  const themeChangeHandler = (e) => {
    const theme = e.target.value;
    setTheme(theme);
    themeChanger(theme);
  };

  return (
    <div>
      <Input
        title="Ім'я*"
        value={name}
        onChange={nameChangeHandler}
        type="text"
        isValid={nameValid}
      />
      <Input
        title="Телефон*"
        value={phone}
        onChange={phoneChangeHandler}
        type="tel"
        isValid={phoneValid}
      />
      <Input
        title="Тема запитання"
        value={theme}
        onChange={themeChangeHandler}
        type="text"
        isValid={themeValid}
      />
    </div>
  );
}

export default Inputs;
