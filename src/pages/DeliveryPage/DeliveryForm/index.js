import Input from "./Input";
import { useState } from "react";
import SwitchInput from "../../../components/UI/SwitchInput";
import Selects from "./Selects";
import PresentOffer from "../PresentOffer";
import Total from "../Total";
import Button from "../../../components/UI/Button";
import classes from "./DeliveryForm.module.scss";
import store from "../../../store/Products";
import { toJS } from "mobx";

const basketDataToOrderData = (basket) => {
  return basket.map((product) => ({
    item: {
      id: product.id,
      name: product.name,
      category: product.category,
      gender: product.gender,
    },
    quantityitemcolorsize: [
      {
        id: product.id,
        size: product.selectedSize,
        color: product.selectedColor,
        quantity: product.quantity,
      },
    ],
  }));
};

function DeliveryForm() {
  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState({
    value: true,
    length: 0,
    message: "",
  });
  const [surname, setSurname] = useState("");
  const [surnameValid, setSurnameValid] = useState({
    value: true,
    length: 0,
    message: "",
  });
  const [phone, setPhone] = useState("");
  const [phoneValid, setPhoneValid] = useState({
    value: true,
    length: 0,
    message: "",
  });
  const [formData, setFormData] = useState({
    area: "",
    city: "",
    department: "",
  });
  const [isPhoneBack, setIsPhoneBack] = useState(false);
  const [isPresentOffer, setIsPresentOffer] = useState(false);

  const nameOnChange = (e) => setName(e.target.value);

  const nameOnBlur = (e) => {
    const userName = e.target.value;

    const regex = /^[a-zA-Zа-яА-ЯІіЇїЄє-]+$/;

    if (userName.length >= 2) {
      if (regex.test(userName)) {
        setNameValid((nameValid) => ({
          value: true,
          length: userName.length,
        }));
      } else {
        setNameValid((nameValid) => ({
          value: false,
          length: userName.length,
          message: "Введений недоступний символ",
        }));
      }
    } else
      setNameValid((nameValid) => ({
        value: false,
        length: userName.length,
        message: "Довжина повинна бути більше 1 символа",
      }));
  };

  const nameOnFocus = () => {
    setNameValid((nameValid) => ({ ...nameValid, value: true }));
  };

  const surnameOnChange = (e) => setSurname(e.target.value);

  const surnameOnBlur = (e) => {
    const userSurname = e.target.value;

    const regex = /^[a-zA-Zа-яА-ЯІіЇїЄє-]+$/;
    if (regex.test(userSurname)) {
      if (userSurname.length >= 2)
        setSurnameValid((surnameValid) => ({
          value: true,
          length: userSurname.length,
        }));
      else
        setSurnameValid((surnameValid) => ({
          value: false,
          length: userSurname.length,
          message: "Довжина повинна бути більше 1 символа",
        }));
    } else {
      setSurnameValid((surnameValid) => ({
        value: false,
        length: userSurname.length,
        message: "Введений недоступний символ",
      }));
    }
  };

  const surnameOnFocus = () => {
    setSurnameValid((surnameValid) => ({ ...surnameValid, value: true }));
  };

  const phoneOnChange = (e) => {
    const userPhone = e.target.value;
    if (/^[+0-9]*$/.test(userPhone)) {
      setPhone(userPhone);
    }
  };

  const phoneOnBlur = (e) => {
    const userPhone = e.target.value;

    const regex = /^\+?\d{7,15}$/;

    if (regex.test(userPhone)) {
      setPhoneValid((phoneValid) => ({
        value: true,
        length: userPhone.length,
      }));
    } else {
      setPhoneValid((phoneValid) => ({
        value: false,
        length: userPhone.length,
        message: "Неправильний формат вводу номеру телефону",
      }));
    }
  };
  const phoneOnFocus = () => {
    setPhoneValid((phoneValid) => ({ ...phoneValid, value: true }));
  };

  const submitHandler = (e) => {
    const isInputsValid =
      nameValid.value && surnameValid.value && phoneValid.value;
    const isFormDataSelected =
      formData.area && formData.city && formData.department;
    if (isInputsValid && isFormDataSelected) {
      onSubmit(e);
    }
  };
  const onSubmit = (e) => {
    console.log("submit");

    e.preventDefault();

    const basketData = basketDataToOrderData(toJS(store.basket));

    const orderData = {
      order_data: {
        first_name: name,
        last_name: surname,
        phone: phone,
        area: formData.area,
        city: formData.city,
        post_office: formData.department,
        payment_method: "cash",
        call_back: isPhoneBack,
        gift_package: isPresentOffer,
        basket_history: basketData,
      },
    };
    store.sendOrder(orderData);
  };

  return (
    <div>
      <Input
        title="Ім'я*"
        value={name}
        type="text"
        isValid={nameValid}
        onChange={nameOnChange}
        onBlur={nameOnBlur}
        onFocus={nameOnFocus}
      />
      <Input
        title="Прізвище*"
        value={surname}
        type="text"
        isValid={surnameValid}
        onChange={surnameOnChange}
        onBlur={surnameOnBlur}
        onFocus={surnameOnFocus}
      />
      <Input
        title="Телефон*"
        value={phone}
        type="tel"
        isValid={phoneValid}
        onChange={phoneOnChange}
        onBlur={phoneOnBlur}
        onFocus={phoneOnFocus}
      />
      <Selects formData={formData} setFormData={setFormData} />

      <SwitchInput setInput={setIsPhoneBack} />
      <PresentOffer
        isPresentOffer={isPresentOffer}
        setPresentOffer={setIsPresentOffer}
      />
      <Total />

      <Button
        type="submit"
        onClick={submitHandler}
        className={classes.delivery_button}
      >
        До оплати
      </Button>
    </div>
  );
}

export default DeliveryForm;
