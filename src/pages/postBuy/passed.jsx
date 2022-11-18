import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { sendEmail } from "../../redux/actions";
import { PaymentConfirmed } from "../../emails/emailsDefault.jsx";

function Passed() {
  const Cart = useLocalStorage("CART", "");
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const history = useHistory();

  const email = () => {
    let price = Cart.items.reduce((acum, act) => {
      return acum + act.price * act.count;
    }, 0);
    let email = PaymentConfirmed(price);
    email.user = user.email;
    dispatch(sendEmail(email));
    Cart.reset();
    history.push("/");
  };
  return (
    <>
      <h1>Pago aprobado</h1>
      <button onClick={() => email()}>Regresar al home</button>
    </>
  );
}

export default Passed;
