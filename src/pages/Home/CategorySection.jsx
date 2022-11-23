import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';

//Hooks 
import useLocalStorage from "../../hooks/useLocalStorage.js";


const CategorySection = ({name, addHandler}) => {
  const allPlate = useSelector((state) => state.plates);
  const filterPlates = allPlate.filter(plate=>plate.category === name)
  const Cart = useLocalStorage("CART", "");
  console.log(allPlate,filterPlates)
 
  const nameId =name.replace(/ /g, "")

  return (
    <section id={`${nameId}`}>
      <div>
        {allPlate?.map((c) => {
          return (
              <Card
                key={c.id}
                id={c.id}
                name={c.name}
                rating={c.rating}
                price={c.price}
                image={c.image}
                onStock={c.onStock}
                agregar={() => agregar(c)}
                addHandler={(id,name,price)=>addHandler(id,name,price)}
              />
          )
        })}
     </div> 
    </section>
  );
};

export default CategorySection;