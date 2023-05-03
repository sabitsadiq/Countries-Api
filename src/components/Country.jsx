import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import FilterCountry from "./FilterCountry";

import { Link } from "react-router-dom";

function Country() {
  const [countries, setCountries] = useState("");
  const getCountryBySearch = async (search) => {
    axios
      .get(`https://restcountries.com/v3.1/name/${search}`)

      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => console.log(error));
  };
  const getCountryByFilter = async (selectRegion) => {
    axios
      .get(`https://restcountries.com/v3.1/region/${selectRegion}`)
      .then((res) => {
        setCountries(res.data);
      })

      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="searchContainer">
        <Search onSearch={getCountryBySearch} />
        <FilterCountry onSelect={getCountryByFilter} />
      </div>

      <div className="flag-section">
        {countries &&
          countries.map((country, index) => {
            return (
              <Link to={`${country.name.common}`} className="link" key={index}>
                <section>
                  <div className="country-container">
                    <div className="country-container-inner">
                      <div className="flag-container">
                        <img
                          className=""
                          src={country.flags.png}
                          alt={country.flags.alt}
                        />
                      </div>
                      <div className="country-info">
                        <h1>{country.name.common}</h1>
                        <span>
                          <p>
                            <strong>Population:</strong>
                            {country.population}
                          </p>
                        </span>
                        <span>
                          <p>
                            <strong>Region:</strong>
                            {country.region}
                          </p>
                        </span>
                        <span>
                          <p>
                            <strong>Capital:</strong>
                            {country.capital}
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default Country;
