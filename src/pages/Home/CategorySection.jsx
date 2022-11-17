import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';

//Hooks 
import useLocalStorage from "../../hooks/useLocalStorage.js";

//Styles
import s from './categorySection.module.css'

const CategorySection = ({name}) => {
  const allPlate = useSelector((state) => state.plates);
  const Cart = useLocalStorage("CART", "");
 
  const nameId =name.replace(/ /g, "")

  return (
    <section id={`${nameId}`}>
      <div className={s.cardContainer}>
        {allPlate?.map((c) => {
          return (
              <Card
                key={c.id}
                id={c.id}
                name={c.name}
                rating={c.rating}
                price={c.price}
                image={c.image}
                agregar={() => agregar(c)}
                Cart={Cart}
              />
          )
        })}
     </div> 
    </section>
  );
};

export default CategorySection;