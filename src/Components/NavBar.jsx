import React from 'react';
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (

    <nav className="navbar navbar-expand-lg py-0 bg-light">
     <div className="container-fluid">
          <Link to ='/' className="navbar-brand" href="#">
             <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="." width="30" height="24" className="d-inline-block align-text-top" />
          </Link>

         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
         </button>

         <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-75">
             <li className="nav-item">
                 <Link to='/home' className="nav-link active fs-5">Home</Link>
             </li>

             <li className="nav-item">
                 <Link className="nav-link active fs-5" to='/createProduct' >Create New Product</Link>  
             </li>
             
             <li className="nav-item">
                 <Link className="nav-link active fs-5" to='/' >Login</Link>  
             </li>

             <li className="nav-item">
                 <Link className="nav-link active"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                 <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                 </svg>
                </Link>
             </li>
           </ul>
        <SearchBar />
    </div>
  </div>

</nav>
    );
};

export default NavBar;