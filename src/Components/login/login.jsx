import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
//import { Link } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0(); //loginWithRedirect redirecciona al usuario al formulario de Auth0 para iniciar o crear una cuenta
  return (
    <li className="nav-item bg-dark">
      <button
        onClick={() => loginWithRedirect()}
        className="nav-link active fs-5 bg-dark text-light"
      >
        login
      </button>
    </li>
  );
};

export default LoginButton;
/*
 

*/
