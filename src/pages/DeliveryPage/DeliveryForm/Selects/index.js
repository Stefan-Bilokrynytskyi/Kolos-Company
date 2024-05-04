import { useState } from "react";
import SelectCity from "./SelectCity";
import SelectArea from "./SelectArea";
import areas from "../areas";
import store from "../../../../store/Products";
import SelectDepartment from "./SelectDepartment";
function Selects({ formData, setFormData }) {
  const handlers = {
    area: (value) => {
      if (areas.includes(value)) {
        if (value !== formData.area && areas.includes(formData.area)) {
          setFormData((prev) => ({ city: "", department: "", area: value }));
          store.setSelectedDepartments([]);
          store.setSelectedCities([]);
        } else setFormData((prev) => ({ ...prev, area: value }));
      } else {
        setFormData((prev) => ({ city: "", department: "", area: value }));
        store.setSelectedCities([]);
        store.setSelectedDepartments([]);
      }
    },
    city: (value) => {
      const cities = store.cities.map((city) => city.name);
      if (cities.includes(value)) {
        if (value !== formData.city && cities.includes(formData.city)) {
          setFormData((prev) => ({ ...prev, department: "", city: value }));
          store.setSelectedDepartments([]);
        } else setFormData((prev) => ({ ...prev, city: value }));
      } else {
        setFormData((prev) => ({ ...prev, department: "", city: value }));
        store.setSelectedDepartments([]);
      }
    },
    department: (value) => {
      setFormData((prev) => ({ ...prev, department: value }));
    },
  };

  const formDataHandler = (input, value) => {
    handlers[input](value);
  };
  return (
    <>
      <SelectArea
        label={"Оберіть область*"}
        placeholder={"Оберіть область"}
        selectedValue={formData.area}
        setSelectedValue={formDataHandler}
      />
      <SelectCity
        label={"Оберіть місто*"}
        placeholder={"Оберіть місто"}
        selectedValue={formData.city}
        setSelectedValue={formDataHandler}
      />
      <SelectDepartment
        label={"Оберіть відділення*"}
        placeholder={"Оберіть відділення"}
        selectedValue={formData.department}
        setSelectedValue={formDataHandler}
      />
    </>
  );
}

export default Selects;
