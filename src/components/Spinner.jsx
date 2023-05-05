import React, { useState, useEffect } from "react";
import GridLoader from "react-spinners/GridLoader";

function Spinner() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 5000);
  }, []);
  return <div>{load ? <GridLoader color="#000" /> : <h1>Hello</h1>}</div>;
}

export default Spinner;
