import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";

const SingleCountryInfo = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  const getSingleCountry = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await res.json();
      setCountry(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getSingleCountry();
  }, [name]);
  return (
    <div className="main-container">
      <Link to="/">
        <button className="nav-button">&larr;back</button>
      </Link>
      <div className="">
        {country &&
          country.map((item, population) => {
            return (
              <section key={population}>
                <div className="single-country-container">
                  <img
                    className="single-country-flag"
                    src={item.flags.png}
                    alt={item.flags.alt}
                  />
                  <div className="single-country-info">
                    <h1>{item.name.common}</h1>
                    <span>
                      <p>
                        <strong>Population:</strong>
                        {item.population}
                      </p>
                    </span>
                    <span>
                      <p>
                        <strong>Region:</strong>
                        {item.region}
                      </p>
                    </span>
                    <span>
                      <p>
                        <strong>Sub Region:</strong>
                        {item.subregion}
                      </p>
                    </span>
                    <span>
                      <p>
                        <strong>Capital:</strong>
                        {item.capital}
                      </p>
                    </span>
                    <>
                      <span>
                        <p>
                          <strong>Capital:</strong>
                          {item.language}
                        </p>
                      </span>
                    </>
                  </div>
                </div>
              </section>
            );
          })}
      </div>
    </div>
  );
};

export default SingleCountryInfo;
