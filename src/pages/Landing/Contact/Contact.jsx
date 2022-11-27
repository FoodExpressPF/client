import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


<<<<<<< HEAD
function Contact() {
  const f = <FontAwesomeIcon icon={faFacebook} />
  const i = <FontAwesomeIcon icon={faInstagram} />
  // const g = <FontAwesomeIcon icon={faGoogle} />
  const t = <FontAwesomeIcon icon={faTwitter} />


  return (

    <footer className="pie-pagina">

      <div className="grupo-1">
        <div className="box">
          <figure>

            <a href="#">
              <div className="direccion">
                <img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1668061068/recipes/Dise%C3%B1o_sin_t%C3%ADtulo_7_ia4jsg.png" alt="logo" />
                <p className="dir" ><FaMapMarkerAlt className="im" />  Calle Uriarte 1423, Buenos   Aires  C1414DAM Argentina </p>
              </div>
            </a>

          </figure>

        </div>
        <div className="box">
          <h2>Location</h2>

        </div>
        <div className="box">
          <h2>Follow</h2>
          <div className="red-social">
            <a href="https://www.facebook.com/profile.php?id=100087952037421" className="fa fa-facebook">{f}</a>
            <a href="https://www.instagram.com/henry.foodexpress/" className="fa fa-instagram">{i}</a>
            <a href="mailto:henry.foodexpress@gmail.com?Subject=Info%20,Comments%20or%20Suggestions" className="fa fa-google"><AiOutlineMail /></a>
            <a href="https://twitter.com/FoodExp35194109" className="fa fa-twitter">{t}</a>

          </div>
          <br></br>
          <h2 >Phone Numbers </h2>
          <h5 className="phone">+54 9 11 5678-0894</h5>
          <h5 className="phone">+54 9 11 5678-0895</h5>
        </div>
      </div>
      <div className="grupo-2">
        <small>&copy; 2018 <b>Food-Express Company - All rights reserved.</b></small>
      </div>
    </footer>
  )
=======
function Contact(){
    const f = <FontAwesomeIcon icon={faFacebook} />
    const i = <FontAwesomeIcon icon={faInstagram} />
    // const g = <FontAwesomeIcon icon={faGoogle} />
    const t = <FontAwesomeIcon icon={faTwitter} />
   
   
    return(
        
        <footer className="pie-pagina">
            
            <div className="grupo-1">
                <div className="box">
                    <figure>
                        
                    <a href="#">
                        <div className="direccion">
                        <img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1668061068/recipes/Dise%C3%B1o_sin_t%C3%ADtulo_7_ia4jsg.png" alt="logo" />
                        <p className="dir" ><FaMapMarkerAlt className="im"/>  Calle Uriarte 1423, Buenos   Aires  C1414DAM Argentina </p>
                        </div>
                    </a>
                    
                    </figure>
                    
                </div>
                <div className="box">
                    <h2>Location</h2>
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2389.599891988564!2d-58.43401899818346!3d-34.588514713267664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb589425a1cd1%3A0x4403fae4418f05f6!2sUriarte%201423%2C%20C1414DAM%20CABA%2C%20Argentina!5e0!3m2!1ses!2smx!4v1668721656598!5m2!1ses!2smx"
                     width="100%" height="250"  loading="lazy" frameborder="0" allowfullscreen>

                    </iframe>
                    
                </div>
                <div className="box">
                    <h2>Follow</h2>
                    <div className="red-social">
                        <a href="https://www.facebook.com/profile.php?id=100087952037421" className="fa fa-facebook">{f}</a>
                        <a href="https://www.instagram.com/henry.foodexpress/" className="fa fa-instagram">{i}</a>
                        <a href="mailto:henry.foodexpress@gmail.com?Subject=Info%20,Comments%20or%20Suggestions" className="fa fa-google"><AiOutlineMail/></a>
                        <a href="https://twitter.com/FoodExp35194109" className="fa fa-twitter">{t}</a>
                        
                    </div>
                    <br></br>
                    <h2 >Phone Numbers </h2>
                    <h5 className="phone">+54 9 11 5678-0894</h5>
                    <h5 className="phone">+54 9 11 5678-0895</h5>
                </div>
            </div>
            <div className="copy">
                <small>&copy; 2018 <b>Food-Express Company - All rights reserved.</b></small>
            </div>
        </footer>
    )
>>>>>>> 56736bd8eb3536cf1850ed250c3312738ea3c041
}

export default Contact;