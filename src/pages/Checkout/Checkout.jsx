import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { buy, buyPaypal } from "../../redux/actions"
import Contact from "../Home/ContactHome";
import CheckoutTable from "./table";
import NavBar from "../../components/NavBar/NavBar";
import "./Checkout.css"

function Carting(){
  const Cart = useLocalStorage("CART", "");

  const mp = () => {
    let total = Cart.items.reduce((acum, act) => {
      return acum + act.price * act.count;
    }, 0);
    dispatch(buy({ total })).then((url) => window.open(url, `${url}`));
  };

  const paypal = () => {
    let price = Cart.items.reduce((acum, act) => {
      return acum + act.price * act.count;
    }, 0);

    dispatch(buyPaypal({ price })).then((url) => window.open(url, `${url}`));
  };

return(
    <>
      <NavBar Cart={Cart}/>
      <div>
        <h1 class="text mx-auto text-center">Shopping Cart checkout</h1>
        <div class="checkout_container">
          <div>
            <div>
              <CheckoutTable/>
              Choose payment method
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="PayPal"/>
                <label class="form-check-label" value="PayPal">
                  <img src="https://res.cloudinary.com/dbepwtmru/image/upload/v1669221456/4202081logopaymentpaypalsocialsocialmedia-115606_115695_bkggmq.png" width="30" height="30"/>PayPal
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="MercadoPago"/>
                <label class="form-check-label" value="MercadoPago">
                  <img src="https://res.cloudinary.com/dbepwtmru/image/upload/v1669221456/unnamed_hbfgk7.png" width="30" height="30"/>Mercado Pago
                </label>
              </div>
              <div class="checkoutrow">
                <div colSpan="5" class="checkout">
                  <div class="d-grid gap-2 col-6 mx-auto p-5">
                    <button
                      class="btn btn-primary"
                      type="button" 
                      onClick={() => paypal()}>
                      Checkout!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
      </div>
      <Contact/>
    </>
)

}

export default Carting;