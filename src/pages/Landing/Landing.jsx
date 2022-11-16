import React from 'react';
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "../../components/Auth/Login.jsx";
import LogoutButton from "../../components/Auth/Logout.jsx";
import ModalAuth from '../../modals/Auth/Auth.jsx';

import style from "./Landing.module.css";
import imageHero from "../../assets/imgs/Food to fill your soul.png";

function Landing() {
  const history = useHistory();
  const { isAuthenticated } = useAuth0();
    
  return <>
    <div className={style.container}>
      <div className={style.containerNav}>
        <img 
          className={style.logo} 
          src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1668061068/recipes/Dise%C3%B1o_sin_t%C3%ADtulo_7_ia4jsg.png" 
          alt="logo" 
        />
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
      <img 
        src={imageHero} 
        className={style.containerImageHero} 
        alt="..." 
      />

      <ModalAuth />

      <button 
        type="button" 
        className={style.heroButton} 
        data-bs-toggle="modal" 
        data-bs-target="#exampleModal"
        onClick={()=>history.push("/home")}
      >
        Go!
      </button>
      <div className={style.text}>
      <h3>We Are Preparing Delicious Food For You...</h3>
      <h3 className={style.textTwo}>Book Or Place Your Order Now!</h3>
      </div>
    </div>
  </>
}

export default Landing;