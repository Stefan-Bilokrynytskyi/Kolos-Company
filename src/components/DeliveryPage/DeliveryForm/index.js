import { set } from "mobx";
import classes from "./DeliveryForm.module.scss";
import Input from "./Input";
import { useState } from "react";
import SwitchInput from "../../UI/SwitchInput";

function DeliveryForm() {
  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState({ value: true, length: 0 });
  const [surname, setSurname] = useState("");
  const [surnameValid, setSurnameValid] = useState({ value: true, length: 0 });
  const [phone, setPhone] = useState("");
  const [phoneValid, setPhoneValid] = useState({ value: true, length: 0 });

  const nameChangeHandler = (e) => {
    const userName = e.target.value;
    setName(userName);
    const regex = /^[a-zA-Zа-яА-ЯІіЇїЄє-]+$/;
    console.log(regex.test(userName));
    if (regex.test(userName)) {
      if (userName.length >= 2)
        setNameValid((nameValid) => ({
          ...nameValid,
          value: true,
          length: userName.length,
        }));
      else
        setNameValid((nameValid) => ({
          ...nameValid,
          value: false,
          length: userName.length,
        }));
    } else {
      setNameValid((nameValid) => ({
        ...nameValid,
        value: false,
        length: userName.length,
      }));
    }
  };

  const surnameChangeHandler = (e) => {
    const userSurname = e.target.value;
    setSurname(userSurname);
    const regex = /^[a-zA-Zа-яА-ЯІіЇїЄє-]+$/;
    if (regex.test(userSurname)) {
      if (userSurname.length >= 2)
        setSurnameValid((surnameValid) => ({
          ...surnameValid,
          value: true,
          length: userSurname.length,
        }));
      else
        setSurnameValid((surnameValid) => ({
          ...surnameValid,
          value: false,
          length: userSurname.length,
        }));
    } else {
      setSurnameValid((surnameValid) => ({
        ...surnameValid,
        value: false,
        length: userSurname.length,
      }));
    }
  };
  const phoneChangeHandler = (e) => {
    const userPhone = e.target.value;
    const regex = /^\d{0,9}$/;

    if (regex.test(userPhone)) setPhone(userPhone);
    else return;
  };

  return (
    <div>
      <Input
        title="Ім'я"
        value={name}
        onChange={nameChangeHandler}
        type="text"
        isValid={nameValid}
      />
      <Input
        title="Прізвище"
        value={surname}
        onChange={surnameChangeHandler}
        type="text"
        isValid={surnameValid}
      />
      <Input
        title="Телефон"
        value={phone}
        onChange={phoneChangeHandler}
        type="tel"
        isValid={phoneValid}
      />
      <SwitchInput />
    </div>
  );
}

export default DeliveryForm;
