import { useState, useEffect } from "react";
import "./App.css";
import FilterCountry from "./components/FilterCountry";
import Country from "./components/Country";
import Navbar from "./components/Navbar";
// import Search from "./components/Search";
import axios from "axios";
function App() {
  const [countries, setCountries] = useState([]);
  // const [search, setSearch] = useState("");
  // const handleChange = async (e) => {
  //   setSearch(e.target.value);
  //   if (search && e.key === "Enter") {
  //     try {
  //       const { data } = await axios(
  // `https://restcountries.com/v3.1/name/${search}`;
  //       );
  //       setCountries(data);
  //     } catch (error) {
  //       setCountries([]);
  //       console.log(error);
  //     }
  //   }
  // };
  // const getCountryBySearch = async (search) => {
  //   axios
  //     .get(`https://restcountries.com/v3.1/name/${search}`)

  //     .then((response) => {
  //       setCountries(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // };
  // if (!countries && search) {
  //   console.log("countries");
  //   return (
  //     <div
  //       style={{
  //         display: "grid",
  //         placeContent: "center",
  //         height: "100vh",
  //       }}
  //     >
  //       <h1>oh oh</h1>
  //       <p>No country found!!</p>
  //       <button onClick={() => location.replace("/")}>Go back</button>
  //     </div>
  //   )
  // }

  return (
    <div className="app">
      <Navbar />
      {/* <div className="search-container">
        <input
          type="search"
          placeholder="Search for a country"
          onKeyUp={handleChange}
        />
      </div> */}
      <div className="searchContainer">
        {/* <FilterCountry onSelect={getFilterCountry} /> */}
        <FilterCountry />
      </div>

      <Country />
    </div>
  );
}

export default App;
