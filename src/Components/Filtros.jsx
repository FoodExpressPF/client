import React from 'react';
import '../CSS/Filtros.css'


export default function Filtros({menu}){



    return (
        <div className={`menu-container ${menu ? "open" : ""}`}>
                <select>
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
        </div>
    )
}