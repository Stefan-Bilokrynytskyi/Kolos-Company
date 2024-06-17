import React, { useState } from "react";
import classes from "./ContactUsPage.module.scss";
import Header from "../../components/Header";
import PageCaption from "../../components/UI/PageCaption";
import Button from "../../components/UI/Button";
import Footer from "../../components/Footer";
import TextArea from "./TextArea";
import ChooseTime from "./ChooseTime";
import OrderCompleted from "../OrderCompleted";
import Input from "./Input";
import { isNameValid, isPhoneValid } from "./utils";
import $api from "../../components/http";

function ContactUsPage() {
  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState({
    value: true,
    message: "",
  });

  const [phone, setPhone] = useState("");
  const [phoneValid, setPhoneValid] = useState({
    value: true,
    message: "",
  });

  const [theme, setTheme] = useState("");
  const [time, setTime] = useState("");
  const [text, setMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const nameOnBlur = () => {
    const isValid = isNameValid(name);
    setNameValid(() => ({ ...isValid }));
    validateForm();
  };

  const nameOnFocus = () => {
    setNameValid((nameValid) => ({
      ...nameValid,
      value: true,
    }));
    setIsFormValid(false);
  };

  const nameChangeHandler = (e) => {
    const userName = e.target.value;
    setName(userName);
  };

  const phoneOnBlur = () => {
    const isValid = isPhoneValid(phone);
    setPhoneValid(() => ({ ...isValid }));
    validateForm();
  };

  const phoneOnFocus = () => {
    setPhoneValid((phoneValid) => ({
      ...phoneValid,
      value: true,
    }));
    setIsFormValid(false);
  };

  const phoneChangeHandler = (e) => {
    const userPhone = e.target.value;
    setPhone(userPhone);
  };

  const themeChangeHandler = (e) => {
    const theme = e.target.value;
    setTheme(theme);
  };

  const timeChanger = (userTime) => {
    setTime(userTime);
  };

  const messageChanger = (userMessage) => {
    setMessage(userMessage);
  };

  const onSubmit = async () => {
    console.log(typeof time);
    console.log(typeof name);
    console.log(typeof phone);
    console.log(typeof theme);
    console.log(typeof text);
    try {
      const response = await $api.post("/api/feedback/", {
        name,
        phone,
        theme,
        time,
        text,
      });

      console.log("Feedback sent successfully:", response.data);
      setIsSent(true);
      return response.data;
    } catch (error) {
      console.error("Error sending feedback:", error.message);
      throw error;
    }
  };

  const validateForm = () => {
    const nameValid = isNameValid(name);
    const phoneValid = isPhoneValid(phone);
    setIsFormValid(nameValid.value && phoneValid.value);
  };

  return isSent ? (
    <OrderCompleted orderName={"звернення"} />
  ) : (
    <div className={classes.contact_page}>
      <Header />
      <div className={classes.container}>
        <PageCaption caption="Зв'язатися з нами" />
        <div className={classes.form_container}>
          <Input
            title="Ім'я*"
            value={name}
            onChange={nameChangeHandler}
            onBlur={nameOnBlur}
            onFocus={nameOnFocus}
            type="text"
            isValid={nameValid}
          />
          <Input
            title="Телефон*"
            value={phone}
            onChange={phoneChangeHandler}
            onBlur={phoneOnBlur}
            onFocus={phoneOnFocus}
            type="tel"
            isValid={phoneValid}
          />
          <Input
            title="Тема запитання"
            value={theme}
            onChange={themeChangeHandler}
            type="text"
            isValid={{ value: true }}
          />
          <ChooseTime timeChanger={timeChanger} />
          <TextArea messageChanger={messageChanger} />
          <Button
            customStyles={{ margin: "23px 0px 40px 0px" }}
            onClick={onSubmit}
            disabled={!isFormValid}
          >
            Надіслати
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUsPage;
