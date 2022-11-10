import React from "react";





export default function Card({ name, price, rating, image,  }) {


  return (

    <div>

      <div className="card h-25" >     
  <img className="card-img-top" src={image}   width="200px" heigth="250px" alt=""/>
  <div className="card-body">
        <h5 className="card-title text-decoration-none">{name}</h5>        
      </div>
  <div className="card-body">
    <p className="card-text text-decoration-none">{price}</p>
    <h3>{rating}</h3>
  </div>
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