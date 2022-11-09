import React from "react";
import { Link } from "react-router-dom";




export default function Card({ name, price, rating, url, id }) {


  return (
    <div>
      <h3>{name}</h3>
      <div>
        <img src={url} alt="img not found" width="200px" heigth="250px" />

        <div>
          <h4>{price}</h4>
          <h4>{rating}</h4>
          <h4>{id}</h4>
          <Link to={"/foods/" + id}  >
            <button >More Info</button>
          </Link>

        </div>
      </div>
    </div>
  );
}