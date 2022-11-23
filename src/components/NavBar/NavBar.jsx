import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "../Auth/Login.jsx";
import LogoutButton from "../Auth/Logout.jsx";
import useCheckRoles from "../../utils/checkRoles.js";
import { useSelector } from "react-redux";


function NavBar() {
  const { user,isAuthenticated } = useAuth0();
  const isAdmin= useCheckRoles('admin')
  console.log(user)

  const profile = 'https://res.cloudinary.com/dpnrbius0/image/upload/v1668650768/Profile_sa6jnn.png'

  const [isAuthorized, setIsAuthorized] = useState(false);
  
  useEffect(()=>{
    setIsAuthorized(isAdmin)
  },[isAdmin])

  return (
    <nav 
      className="navbar navbar-expand-lg py-2 fixed-top navbar-light shadow-lg p-3 mb-5"
      style={{'backgroundColor':'#321313'}}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <img
            className="logo"
            src="https://res.cloudinary.com/dbepwtmru/image/upload/v1668614395/Food-express-logo_j8wbz5.png"
            alt="logo"
            width="47"
            height="47"
          />
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-75">
            <li>
              <Link to="/home" className="nav-link active fs-5 border-dark text-light">
                Home
              </Link>
            </li>

            {isAuthorized
            &&
              <li className="nav-item">
                <Link className="nav-link active fs-5 border-dark text-light" to="/admin">
                  Admin Dashboard
                </Link>
              </li>
            }

            <li className="nav-item">
              <Link className="nav-link active text-light" to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart3"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </Link>
            </li>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </ul>
          
          <Link to='/client' >
            <img 
              className="rounded-circle"
              style={{
                'height':'50px',
                'width':'50px',
                'boxShadow':'0px 0px 2px 2px #00000020',
              }}
              src={user?user.picture:profile} 
              alt={user?.name} 
            />
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;