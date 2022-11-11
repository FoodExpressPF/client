import React from 'react';
import '../CSS/Filtros.css'


export default function Filtros({menu}){



    return (
        <div className={`menu-container ${menu ? "open" : ""}`}>
                <select className='slct'>
        <option disabled selected defaultValue>
          Type
        </option>
        <option value="all">All</option>
        <option value="Gluten Free">Gluten Free</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Vegan">Vegan</option>
        <option value="Protein">Protein</option>
        <option value="Others">Others</option>
      </select>

      <select className='slct'>
        <option disabled selected defaultValue>
          Alphabetical order
        </option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>

<select className='slct'>
<option disabled selected defaultValue>
  price order
</option>
<option value="asc">MAX</option>
<option value="desc">MIN</option>
</select>

<select className='slct'>
<option disabled selected defaultValue>
  Rating order
</option>
<option value="asc">MAX</option>
<option value="desc">MIN</option>
</select>


  <input className="form-check-input" type="checkbox" value="false" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    OFFERT!!
  </label>

      
        </div>
    )
}