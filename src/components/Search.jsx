import { React, useState } from "react";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(input);
  };
  return (
    <div className="search-container">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search for a country"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Search;
