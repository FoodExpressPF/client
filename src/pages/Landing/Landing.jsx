import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "../../components/Auth/Login.jsx";
import LogoutButton from "../../components/Auth/Logout.jsx";
import ModalAuth from "../../modals/Auth/Auth.jsx";

import style from "./Landing.module.css";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

import imageHero from "../../assets/imgs/landing.png";
import Testimonials from './Testimonials/Testimonials.jsx';
import Contact from './Contact/Contact.jsx';
import Prueba from "../../emails/prueba.jsx";


function Landing() {
  const history = useHistory();
  const { isAuthenticated } = useAuth0();
    
  return (
    <div className={style.contenedor}>
      <div className={style.landing_container}>
        <div className={style.containerNav}>
          <img
            className={style.logo}
            src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1668061068/recipes/Dise%C3%B1o_sin_t%C3%ADtulo_7_ia4jsg.png"
            alt="logo"
          />
          <section id="sec1">
            <div>
              <a href="#sec1" className={style.links}>Home</a>
              <a href="#sec2" className={style.links}>About</a>
              <a href="#sec3" className={style.links}>Reviews</a>
              <a href="#sec4" className={style.links}>Contact</a>
            </div>
          </section>
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
          onClick={() => history.push("/home")}
        >
          Go!
        </button>
      </div>

      <section id="sec2">
        <div className={style.about} id="about">
          <div className={style.container1}>
            <img
              src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1668575898/recipes/Dise%C3%B1o_sin_t%C3%ADtulo_8_cifgue.png"
              alt=""
              className={style.image1}
            />
            <div className={style.col - 2}>
              <h2>About</h2>
              {/* <span className={style.line}></span> */}
              <p className={style.aboutR}><FaQuoteLeft className={style.quote}/>
                 The restaurant that takes the best of international gastronomy,
                the fusion of these flavors, techniques, ingredients and
                experiences allow us to offer the best dishes to our customers,
                was founded in 2018 and continues to be the best option to taste
                any recipe international <FaQuoteRight className={style.quote}/>
              </p>
              <p></p>
              <a href="#sec3">
                <button className={style.button1}>Explore More</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section id="sec3" className={style.sec3}>
        <div id='testimonials'>
          <div>
          <a href='#sec4'>
              <button className={style.button2}>Contact</button>
            </a>
            <h2 className={style.test}>Reviews</h2>
            <Testimonials />
          </div>
        </div>
      </section>
      
      <section id="sec4">
        <div className={style.contacto} id="Contacto">
          
          <Contact/>
          
        </div>
      </section>
    </div>
  )
}

export default Landing;