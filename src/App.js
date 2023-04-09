// import { Router } from "react-router-dom";
// import "./App.css";
import data from "./data.json";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useState } from "react";

function App() {
  const [party, setParty] = useState("");
  // const generate = () => {
  // "https://restcountries.com/v3.1/all
  // const fetchCountry = () => {
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        console.log(
          res.data.map((name) => {
            name;
          })
        );
        setParty(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  // };

  // };
  return (
    <div className="app">
      <h1>Generate an excuse</h1>
      {/* <input
        type="input"
        onChange={(event) => {
          setParty(event.target.value);
        }}
      />
      <button onClick={fetchCountry}>search</button> */}
      {/* <h2>{setParty}</h2> */}
      {/* {party.map((pat, item) => {
        console.log(pat);
        return (
          <>
            <h1 key={item}>{pat.name}</h1>
            <h2 key={item}>{pat.region}</h2>
          </>
        );
      })} */}
    </div>
  );
}

export default App;
