
import React from 'react'
import {Link} from 'react-router-dom'



export default function LandingPage(){
    return (
        <div>
            <div>
            <Link to ='/home'>
                <button>GET INTO</button>
            </Link>
            </div>
            <div>
            <h1 className='letras'>WELCOME
            users and password?</h1>           
    
            </div>
            
            
        </div>
    )
}