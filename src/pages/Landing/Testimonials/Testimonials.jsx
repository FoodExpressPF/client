import React from "react";
import {style} from "./Testimonials.css";


function Testimonials(){

    return(
        <div className='testimonials' id='testimonials'>
            <div className='container'>
        <span className='line'></span>
        <div className='content'id="testimonial">
         <div className='card'>
         <img src='https://res.cloudinary.com/dowhfu3fj/image/upload/v1668709774/recipes/Dise%C3%B1o_sin_t%C3%ADtulo_12_xmq3ec.png' alt='user1' className="img1"/>
            <p>Great Flavors. 
              The service and food was great! I was visiting on my own as a side trip, and dishes in Argentina, especially meat dishes, tend to be very large. I ordered the tenderloin and they were able to fit a half order for me. It was delicious and the perfect amount. The fresh bread at the start was also great.</p>
            <p><span>"Nahuel Guzman"</span></p>
             <p>User</p>
            </div>
             <div className='card'>
             <img src='' alt='user2'/>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, perferendis maxime facere inventore mollitia reiciendis quibusdam dignissimos vitae iste voluptatem aliquid in molestias nobis incidunt, culpa libero aut non delectus!</p>
             <p><span>Carol Harper</span></p>
             <p></p>
            </div>
            <div className='card'>
            <img src='' alt='user3'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quo officia maiores distinctio quas veniam debitis saepe vitae iure voluptas nam hic dolor, doloremque inventore! Soluta laboriosam asperiores nobis veniam.</p>
             <p><span>Snow.J.R.</span></p>
             <p></p>
            </div>
            </div>  
            </div>        
         </div>
   
        

    )
}

export default Testimonials;