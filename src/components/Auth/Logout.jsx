import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0(); //logout es una funcion que permite cerrar la cuenta, su returnTo recibe la url a la que es redirigido el cliente luego de cerrar su cuenta(cambiarla a la deseada por ustedes)

  return (
    <li className="nav-item bg-dark text-light">
      <button onClick={() => logout()} className="nav-link active fs-5 bg-dark text-light">
        logout
      </button>
    </li>
  );
};

export default LogoutButton;
/*
   <li className="nav-item">
      <Link
        onClick={() => loginWithRedirect()}
        className="nav-link active fs-5"
      >
        login
      </Link>
    </li>
*/
