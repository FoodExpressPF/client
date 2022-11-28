import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading.jsx";

//Components
import Category from "./Category.jsx";
import CategorySection from "./CategorySection.jsx";
import CarrouselBanners from "./CarrouselBanners.jsx";
import ReservationCart from "../../components/ReservationCart/ReservationCart";
import Contact from "./ContactHome.jsx";

//Styles
import s from "./home.module.css";

//Hooks 
import useLocalStorage from "../../hooks/useLocalStorage.js";

//Actions
import { getPlates, getUser } from "../../redux/actions.js";

//Libraries
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../../components/NavBar/NavBar.jsx";


export default function Home() {
  const Cart = useLocalStorage("CART", "");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  const { isAuthenticated,user } = useAuth0();

  const addCartHandler  = (id, name, price, image) =>{
    Cart.add({id, name, price, image})
  }

  useEffect(() => {
    dispatch(getPlates()).then(() => setLoading(false));
    if(isAuthenticated) dispatch(getUser(user))
  }, [dispatch]);


  return (
    <>
    
    <div>
    {loading
      ?
       <div className={s.loadingfix}>          
            <Loading/>         
        </div>
      :
      
      <div>
      <NavBar Cart={Cart}
      addHandler={(id, name, price, image)=>addCartHandler(id, name, price, image)}/>
      <div className="Carrusel">
        <CarrouselBanners />
      </div>
      <div className={s.homeContainer}>
      
       <div className={s.categoriesBox}>
          <Category />
          <CategorySection name='Main Course'
          addHandler={(id, name, price, image)=>addCartHandler(id, name, price, image)}
           />
          <CategorySection name='Appetizer' 
          addHandler={(id, name, price, image)=>addCartHandler(id, name, price, image)}
          />
          <CategorySection name='Salad' 
          addHandler={(id, name, price, image)=>addCartHandler(id, name, price, image)}
          />
          <CategorySection name='Dessert'
          addHandler={(id, name, price, image)=>addCartHandler(id, name, price, image)}
           />
          <CategorySection name='Beverage'
          addHandler={(id, name, price, image)=>addCartHandler(id, name, price, image)}
           />
       </div>
      <ReservationCart 
      Cart={Cart} />
      </div>
      <br/><br/><br/>
      <Contact/>
      </div>
      }
      
    </div>
    
    </>
  );
}
