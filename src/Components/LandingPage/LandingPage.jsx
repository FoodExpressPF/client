
import React from 'react'
import { Link } from 'react-router-dom'
import style from "./LandingPage.module.css";



export default function LandingPage() {
    return (


        <div className={style.divInit}>
            <div className="p">
                <img className={style.img} src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1668061068/recipes/Dise%C3%B1o_sin_t%C3%ADtulo_7_ia4jsg.png" alt="not found" whidth="200px" height="150px" />

            </div>
            <div >
                <Link className={style.botonA} to='/home'>
                    <button  className={style.botonA}> Home</button>
                    

                </Link>
            </div>



            <div>

                <h1 className={style.texto}>Reserve Online</h1>

            </div>

        </div>

    )
}

