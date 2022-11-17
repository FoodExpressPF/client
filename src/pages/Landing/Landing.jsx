import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "../../components/Auth/Login.jsx";
import LogoutButton from "../../components/Auth/Logout.jsx";
import ModalAuth from "../../modals/Auth/Auth.jsx";

import style from "./Landing.module.css";
import imageHero from "../../assets/imgs/landing.png";
import Prueba from "../../emails/prueba.jsx";
function Landing() {
  const history = useHistory();
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <div className={style.container}>
        <Prueba />
        <div className={style.containerNav}>
          <img
            className={style.logo}
            src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1668061068/recipes/Dise%C3%B1o_sin_t%C3%ADtulo_7_ia4jsg.png"
            alt="logo"
          />
          <section id="sec1">
            <div>
              <a href="#sec1" className={style.links}>
                Landing
              </a>
              <a href="#sec2" className={style.links}>
                About
              </a>
              <a href="#sec3" className={style.links}>
                Testimonials
              </a>
            </div>
          </section>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
        <img src={imageHero} className={style.containerImageHero} alt="..." />

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
              <span className={style.line}></span>
              <p>
                "The restaurant that takes the best of international gastronomy,
                the fusion of these flavors, techniques, ingredients and
                experiences allow us to offer the best dishes to our customers,
                was founded in 2018 and continues to be the best option to taste
                any recipe international"
              </p>
              <p></p>
              <a href="#sec3">
                <button className={style.button1}>Explore More</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="sec3">
        <div className={style.testimonials} id="testimonials">
          <div className={style.container3}>
            <h2>Testimonials</h2>
            <span className="line"></span>
            <div className={style.content}>
              <div className={style.card}>
                <img src="" alt="user1" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit tempore, harum ullam eligendi ea voluptate
                  laboriosam, vitae ducimus doloremque necessitatibus, ipsum et
                  quas ipsam! Aspernatur dolorem consectetur alias similique
                  delectus.
                </p>
                <p>
                  <span>"Nahuel Guzman"</span>
                </p>
                <p>User</p>
              </div>
              <div className={style.card}>
                <img src="" alt="user2" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
                  perferendis maxime facere inventore mollitia reiciendis
                  quibusdam dignissimos vitae iste voluptatem aliquid in
                  molestias nobis incidunt, culpa libero aut non delectus!
                </p>
                <p>
                  <span>Carol Harper</span>
                </p>
                <p></p>
              </div>
              <div className={style.card}>
                <img src="" alt="user3" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque quo officia maiores distinctio quas veniam debitis
                  saepe vitae iure voluptas nam hic dolor, doloremque inventore!
                  Soluta laboriosam asperiores nobis veniam.
                </p>
                <p>
                  <span>Snow.J.R.</span>
                </p>
                <p></p>
              </div>
              <a href="#sec1">
                <button className={style.button1}>Contacto</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
