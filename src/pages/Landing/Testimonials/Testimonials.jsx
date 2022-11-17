import React from "react";
import {style} from "./Testimonials.css";


function Testimonials(){

    return(
        <div className='testimonials' id='testimonials'>
            <div className='container'>
        <span className='line'></span>
        <div className='content'id="testimonial">
         <div className='card'>
         <img src='' alt='user1'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore, harum ullam eligendi ea voluptate laboriosam, vitae ducimus doloremque necessitatibus, ipsum et quas ipsam! Aspernatur dolorem consectetur alias similique delectus.</p>
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