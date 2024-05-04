import React, { useState, useEffect, useCallback } from "react";
import SelectSearch from "../../../SelectSearch";
import { autorun, toJS } from "mobx";
import { observer } from "mobx-react-lite";
import store from "../../../../../store/Products";

const SelectCity = observer(({ formData, ...props }) => {
  const [valueList, setValueList] = useState([]);
  const [placesList, setPlacesList] = useState([]);

  useEffect(() => {
    const disposer = autorun(() => {
      console.log(store.selectedCity);

      setValueList(toJS(store.cities));
      setPlacesList(toJS(store.cities).map((city) => city.name));
      console.log("SelectCity: ", toJS(store.cities));
    });

    return () => disposer();
  }, []);

  const fetchData = async (option) => {
    try {
      await store.fetchDepartments(option);
      console.log(toJS(store.departments));
      console.log(typeof toJS(store.departments));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SelectSearch
      {...props}
      fetchData={fetchData}
      placesList={placesList}
      valueList={valueList}
      input={"city"}
    />
  );
});

export default SelectCity;
