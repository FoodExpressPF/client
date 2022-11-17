import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';

//Hooks 
import useLocalStorage from "../../hooks/useLocalStorage.js";

//Styles
import s from './categorySection.module.css'

const CategorySection = ({name}) => {
  const allPlate = useSelector((state) => state.plates);
  const filterPlates = allPlate.filter(plate=>plate.category === name)
  const Cart = useLocalStorage("CART", "");
  console.log(allPlate)
 
  const nameId =name.replace(/ /g, "")

  return (
    <section id={`${nameId}`}>
      <h3>{name}</h3>
      <div className={s.cardContainer}>
        {filterPlates?.map((c) => {
          return (
            <div key={c.id}>
              <Link className="textLink" to={"/foods/" + c.id}>
                {" "}
              </Link>
              <Card
                id={c.id}
                name={c.name}
                rating={c.rating}
                price={c.price}
                image={c.image}
                agregar={() => agregar(c)}
                Cart={Cart}
              />
            </div>
          )
        })}
     </div> 
    </section>
  );
};

export default CategorySection;