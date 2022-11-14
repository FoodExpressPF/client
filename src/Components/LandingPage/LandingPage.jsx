
import React from 'react'
import { useHistory } from "react-router-dom";
import style from "./LandingPage.module.css";
import imageHero from "../../images/Food to fill your soul.png"

import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../login/login";
import LogoutButton from "../login/Logout";
import ModalAuth from './ModalAuth'


export default function LandingPage() {
  

  const history = useHistory();
  const { isAuthenticated } = useAuth0();
    
    return (

        <>
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
            Home
         </button>
         

        
        

        </div>


        </>

    )
}

