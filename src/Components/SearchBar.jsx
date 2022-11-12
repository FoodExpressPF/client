import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../CSS/SearchBar.css";

export default function SearchBar({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [name, setname] = useState("");

  function handleInput(e) {
    e.preventDefault(e);
    setname(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(e);
    if (name !== "" && isNaN(name)) {
      setname("");
      setCurrentPage(1);
    } else {
      alert("Please make sure to fill the input correctly");
    }
  }

  return (
    <div className="input-group justify-content-center">
      <div className="form-outline w-75">
        <input
          // typeName="search"
          name="search"
          id="form1"
          className="form-control"
          onChange={handleInput}
          placeholder="Search for a plate..."
          value={name}
        />
        <label className="form-label" htmlFor="form1"></label>
      </div>
      <button
        type="button"
        className="btn btn-primary h-25"
        onClick={handleSubmit}
      >
        <i className="fas fa-search">Go</i>
      </button>
    </div>
  );
}
