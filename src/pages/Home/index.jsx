import React, { useEffect, useState } from "react";

//Components
import Category from "./Category.jsx";
import CategorySection from "./CategorySection.jsx";
import CarrouselBanners from "./CarrouselBanners.jsx";
import ReservationCart from "../../components/ReservationCart/ReservationCart";

//Styles
import s from "./home.module.css";

//Hooks 
import useLocalStorage from "../../hooks/useLocalStorage.js";

//Actions
import { getPlates, getUser } from "../../redux/actions.js";

//Libraries
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";


export default function Home() {
  const Cart = useLocalStorage("CART", "");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  const { isAuthenticated,user } = useAuth0();

  useEffect(() => {
    dispatch(getPlates()).then(() => setLoading(false));
    if(isAuthenticated) dispatch(getUser(user))
  }, [dispatch]);


  return (
    <>
    <CarrouselBanners />
    <div className={s.homeContainer}>
      {loading
      ?
       <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      :
       <div className={s.categoriesBox}>
          <Category />
          <CategorySection name='Main Course' />
          <CategorySection name='Appetizer' />
          <CategorySection name='Salad' />
          <CategorySection name='Dessert' />
          <CategorySection name='Beverage' />
       </div>
      }
      
      <ReservationCart Cart={Cart} />
    </div>
    </>
  );
}
