import React from "react";
import { useEffect } from "react";
// import { Axios } from "axios";
const FilterCountry = ({ onSelect }) => {
  const filterHandler = (e) => {
    const selectRegion = e.target.value;
    onSelect(selectRegion);
  };

  // useEffect(() => {
  //   onSelect = { getFilterCountry };
  // }, []);
  return (
    <select onChange={filterHandler} className="filter-container">
      <option>Filter by region: </option>
      <option value="Africa">Africa</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
    </select>
  );
};

export default FilterCountry;
