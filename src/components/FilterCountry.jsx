import React from "react";
import { useEffect } from "react";
// import { Axios } from "axios";
const FilterCountry = (onSelect) => {
  const filterHandler = (e) => {
    const selectRegion = e.target.value;
    onSelect(selectRegion);
  };
  const getFilterCountry = async (selectRegion) => {
    try {
      const { data } = await axios(
        `https://restcountries.com/v3.1/region/${selectRegion}`
      );
      setCountries(data);
    } catch (error) {
      setCountries([]);
      console.log(error);
    }
  };
  useEffect(() => {
    onSelect = { getFilterCountry };
  }, []);
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
