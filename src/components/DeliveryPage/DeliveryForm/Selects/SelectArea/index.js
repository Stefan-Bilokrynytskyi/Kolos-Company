import store from "../../../../../store/Products";
import SelectSearch from "../../../SelectSearch";
import { toJS } from "mobx";

import areas from "../../areas";

const SelectArea = ({ formData, ...props }) => {
  const valueList = areas.map((area) => ({ name: area, refName: area }));
  const fetchData = async (option) => {
    try {
      await store.fetchCities(option);
      console.log(toJS(store.cities));
      console.log(typeof toJS(store.cities));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SelectSearch
      {...props}
      placesList={areas}
      valueList={valueList}
      fetchData={fetchData}
      input={"area"}
    />
  );
};

export default SelectArea;
