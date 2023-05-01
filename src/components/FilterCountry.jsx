import React from "react";
const FilterCountry = ({ onSelect }) => {
  const filterHandler = (e) => {
    const selectRegion = e.target.value;
    onSelect(selectRegion);
  };
  return (
    <select onChange={filterHandler} className="filter-container">
      <option>Filter by region: </option>
      <option value="America">America</option>
      <option value="Africa">Africa</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceanic">Oceanic</option>
    </select>
  );
};

export default FilterCountry;
