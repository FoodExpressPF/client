
import React from 'react'
import { Link } from 'react-router-dom'
import style from "./LandingPage.module.css";
import imageHero from "../../images/Food to fill your soul.png"



export default function LandingPage() {
    return (

        <>
        <div className={style.container}>
         <div className={style.containerNav}>
             <img 
                 className={style.logo} 
                 src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1668061068/recipes/Dise%C3%B1o_sin_t%C3%ADtulo_7_ia4jsg.png" 
                 alt="logo" 
                />

             <Link
                 className={style.navButton}
                 to='/home'
                >Sing up    
             </Link>
         </div>
         

         <img 
             src={imageHero} 
             className={style.containerImageHero} 
             alt="..." 
            />

         <Link
             className={style.heroButton}
             to='/home'
            >Home         
         </Link>

        </div>


        </>

    )
}

