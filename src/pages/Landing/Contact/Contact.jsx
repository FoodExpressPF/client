import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons"

function Contact(){
    const f = <FontAwesomeIcon icon={faFacebook} />
    const i = <FontAwesomeIcon icon={faInstagram} />
    const g = <FontAwesomeIcon icon={faGoogle} />
    const t = <FontAwesomeIcon icon={faTwitter} />
   
    return(
        
        <footer className="pie-pagina">
            
            <div className="grupo-1">
                <div className="box">
                    <figure>
                    <a href="#">
                        <img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1668061068/recipes/Dise%C3%B1o_sin_t%C3%ADtulo_7_ia4jsg.png" alt="logo"/>
                    </a>
                    </figure>
                </div>
                <div className="box">
                    <h2>Location</h2>
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.26483379626!2d-58.503338603933564!3d-34.61580373602787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA%2C%20Argentina!5e0!3m2!1ses!2smx!4v1668669402973!5m2!1ses!2smx"
                     width="550" height="350"  loading="lazy" >

                    </iframe>
                    
                </div>
                <div className="box">
                    <h2>Follow</h2>
                    <div className="red-social">
                        <a href="#" className="fa fa-facebook">{f}</a>
                        <a href="#" className="fa fa-instagram">{i}</a>
                        <a href="#" className="fa fa-google">{g}</a>
                        <a href="#" className="fa fa-twitter">{t}</a>
                        
                    </div>
                    <br></br>
                    <h2 >Phone Numbers</h2>
                    <h5 className="phone">+54 9 11 5678-0894</h5>
                    <h5 className="phone">+54 9 11 5678-0895</h5>
                </div>
            </div>
            <div className="grupo-2">
                <small>&copy; 2022 <b>Food-Express - Todos Los Derechos Reservados.</b></small>
            </div>
        </footer>
    )
}

export default Contact;