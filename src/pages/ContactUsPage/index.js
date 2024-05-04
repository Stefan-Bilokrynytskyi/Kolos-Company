import React, { useState } from "react";
import classes from "./ContactUsPage.module.scss";
import Header from "../../components/Header";
import PageCaption from "../../components/UI/PageCaption";
import Inputs from "./Inputs";
import Button from "../../components/UI/Button";
import Footer from "../../components/Footer";
import TextArea from "./TextArea";
import ChooseTime from "./ChooseTime";
import OrderCompleted from "../OrderCompleted";
import $api from "../../components/http";

function ContactUsPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [theme, setTheme] = useState("");
  const [time, setTime] = useState("");
  const [text, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Validation function
  const validator = () => {
    setIsValid(name.length > 0 && phone.length > 0);
  };

  // Handlers for input changes
  const nameChanger = (userName) => {
    setName(userName);
    validator();
  };

  const phoneChanger = (userPhone) => {
    setPhone(userPhone);
    validator();
  };

  const themeChanger = (userTheme) => {
    setTheme(userTheme);
  };

  const timeChanger = (userTime) => {
    setTime(userTime);
  };

  const messageChanger = (userMessage) => {
    setMessage(userMessage);
  };

  // Submit function
  const submit = async () => {
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

      // Handle the response, e.g., log the data
      console.log("Feedback sent successfully:", response.data);
      setIsSent(true);
      return response.data;
    } catch (error) {
      // Handle errors
      console.error("Error sending feedback:", error.message);
      throw error;
    }
  };

  return isSent ? (
    <OrderCompleted orderName={"звернення"} />
  ) : (
    <div className={classes.contact_page}>
      <Header />
      <div className={classes.container}>
        <PageCaption caption="Зв'язатися з нами" />
        <div className={classes.form_container}>
          <Inputs
            nameChanger={nameChanger}
            phoneChanger={phoneChanger}
            themeChanger={themeChanger}
          />
          <ChooseTime timeChanger={timeChanger} />
          <TextArea messageChanger={messageChanger} />
          <Button
            customStyles={{ margin: "23px 0px 40px 0px" }}
            onClick={submit}
            disabled={!isValid}
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
