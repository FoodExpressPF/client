import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { getAllUser, getUser, postOrder, sendEmail } from "../../redux/actions";
import { PaymentConfirmed } from "../../emails/emailsDefault.jsx";
import s from "../postBuy/passed.module.css";

function Passed() {
  const Cart = useLocalStorage("CART", "");
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const history = useHistory();

  const [coments, setComents] = useState("");
  const [address, setAddress] = useState("");

  const emailUser = isAuthenticated ? { email: user.email } : "";

  const email = async () => {
    let price = Cart.items.reduce((acum, act) => {
      return acum + act.price * act.count;
    }, 0);

    let email = PaymentConfirmed(price);
    email.user = emailUser.email;

    await dispatch(getUser(emailUser)).then((data) => {
      dispatch(
        postOrder({
          coments: coments,
          address: address,
          total: price,
          userId: data.payload.id,
        })
      );
    });
    dispatch(sendEmail(email));
    Cart.reset();
    history.push("/");
  };

  const onChangeHandlerComents = (e) => setComents(e.target.value);
  const onChangeHandlerAddress = (e) => setAddress(e.target.value);
  return (
    <>
      <div className={s.background}>
        <div className={s.recipt_container}>
          <img
            src="https://res.cloudinary.com/dbepwtmru/image/upload/v1669035810/Pngtree_green_checkmark_on_shield_tick_6392392_ktkudu.png"
            className={s.green_check}
          />
          <div>
            <h1 class="text-center text-success">Payment successful</h1>
            <div class="d-flex justify-content-between p-2">
              <div>
                <p>Nombre:</p>
              </div>
              <div>
                <p>{isAuthenticated ? user.name : ""}</p>
              </div>
            </div>
            <div class="d-flex justify-content-between p-2">
              <div>
                <p>Email:</p>
              </div>
              <div>
                <p>{isAuthenticated ? user.email : ""}</p>
              </div>
            </div>
            <div class="d-flex justify-content-between p-3">
              <div>
                <p class="fw-bold">Amount paid:</p>
              </div>
              <div>
                <p class="fw-bold">
                  {isAuthenticated
                    ? Cart.items.reduce((acum, act) => {
                        return acum + act.price * act.count;
                      }, 0)
                    : ""}
                </p>
              </div>
            </div>
            <div class="d-flex justify-content-between p-2">
              <div>
                <p>Transaction id:</p>
              </div>
              <div>
                <p>89578937413098{/*{id?}*/}</p>
              </div>
            </div>
            <input
              type="text"
              name="coments"
              onChange={onChangeHandlerComents}
              placeholder="Additional comment"
              value={coments}
            />
            <input
              type="text"
              name="name"
              onChange={onChangeHandlerAddress}
              placeholder="Shipping Address"
              value={address}
            />
            <button className={s.home_button} onClick={() => email()}>
              Back to home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Passed;
