import React from "react";
import "../CSS/Card.css";





export default function Card({ name, price, rating, image,  }) {


  return (

    <div class="container">
      
      <div>
        <img className="cardImage" src={image} alt="..."/>
        </div>
          <div class="card-body">
            <h5 class="card-title font-weight-bold text-center"><a>{name}</a></h5>
            <p class="mb-3">
               Price:   ${price} 
            </p>
            <hr class="my-4"/>
            <p class="lead"><strong>{rating}/5⭐</strong></p>
          </div>
      {/* <div>
      <h3>{name}</h3>
        <img src={image} alt="img not found" width="200px" heigth="250px" />

        <div>
          <h4>{price}</h4>
          <h4>{rating}</h4>          

        </div>
      </div> */}
    </div>
  );
}