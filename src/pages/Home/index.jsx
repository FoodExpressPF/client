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
import { getPlates } from "../../redux/actions.js";

//Libraries
import { useDispatch } from "react-redux";


export default function Home() {
  const Cart = useLocalStorage("CART", "");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlates()).then(() => setLoading(false));
  }, [dispatch]);

  // const agregar = (product) => {
  //   if (cart.some((artic) => artic.id === product.id)) {
  //     const cartUpadte = cart.map((artic) => {
  //       if (artic.id == product.id) {
  //         artic.cantidad = product.cantidad;
  //       }
  //       return artic;
  //     });
  //     setCart(cartUpadte);
  //   } else {
  //     setCart([...cart, product]);
  //   }

  //   console.log(cart);
  // };
  // const updateCant = (product) => {
  //   const cartUpadte = cart.map((artic) => {
  //     if (artic.id == product.id) {
  //       artic.cantidad = product.cantidad;
  //     }
  //     return artic;
  //   });
  //   setCart(cartUpadte);
  // };

  // const deleteCart = (id) => {
  //   const cartUpdate = cart.filter((artic) => artic.id !== id);
  //   setCart(cartUpdate);
  // };
  // useEffect(() => {
  //   dispatch(getPlates()).then(() => setLoading(false));
  // }, [dispatch]);

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
          <CategorySection name='Main Courses' />
          <CategorySection name='Appetizer' />
          <CategorySection name='Salads' />
          <CategorySection name='Desserts' />
          <CategorySection name='Beverages' />
       </div>
      }
      
      <ReservationCart Cart={Cart} />
    </div>
    </>
  );
}
