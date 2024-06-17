export const isNameValid = (name) => {
  const regex = /^[a-zA-Zа-яА-ЯІіЇїЄє\s-]+$/;

  if (regex.test(name)) {
    if (name.length >= 2) {
      return {
        value: true,
        message: "",
      };
    } else {
      return {
        value: false,
        message: "Введено не коректне ім'я",
      };
    }
  } else {
    return {
      value: false,
      message: "Введено не коректне ім'я",
    };
  }
};

export const isPhoneValid = (phone) => {
  const regex = /^\+?\d{7,15}$/;

  if (regex.test(phone)) {
    return {
      value: true,
      message: "",
    };
  } else {
    return {
      value: false,
      message: "Введено не коректний номер",
    };
  }
};
