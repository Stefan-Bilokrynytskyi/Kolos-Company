import React, { useState, useEffect } from "react";
import SelectSearch from "../../../SelectSearch";
import { autorun, toJS } from "mobx";
import { observer } from "mobx-react-lite";
import store from "../../../../../store/Products";

const SelectDepartment = observer(({ ...props }) => {
  const [valueList, setValueList] = useState([]);
  const [placesList, setPlacesList] = useState([]);
  useEffect(() => {
    const disposer = autorun(() => {
      setValueList(toJS(store.departments));
      setPlacesList(
        toJS(store.departments).map((department) => department.name)
      );
    });

    return () => disposer();
  }, []);
  console.log("placeList: ", placesList);
  return (
    <SelectSearch
      {...props}
      placesList={placesList}
      valueList={valueList}
      input={"department"}
    />
  );
});

export default SelectDepartment;
