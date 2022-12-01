import React, { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { buy, buyPaypal } from "../../redux/actions";
import CheckoutTable from "./table";
import NavBar from "../../components/NavBar/NavBar";
import "./Checkout.css";
import { useDispatch } from "react-redux";

function Carting() {
  const Cart = useLocalStorage("CART", "");
  const [buySelect, setBuySelect] = useState(1);
  const dispatch = useDispatch();
  /* const mp = () => {
    let total = Cart.items.reduce((acum, act) => {
      return acum + act.price * act.count;
    }, 0);
    dispatch(buy({ total })).then((url) => window.open(url, `${url}`));
  };*/
  useEffect(() => {
    
  },[dispatch]);

  const paypal = () => {
    let price = Cart.items.reduce((acum, act) => {
      return acum + act.price * act.count;
    }, 0);
    buySelect == 1
      ? dispatch(buyPaypal({ price })).then((url) => window.open(url, `${url}`))
      : dispatch(buy({ price })).then((url) => window.open(url, `${url}`));
  };
  const select = (e) => {
    setBuySelect(e.target.value);
  };

  return (
    <>
      <NavBar Cart={Cart} />
      <div>
        <h1 class="text text-center">Shopping Cart checkout</h1>
        <div class="checkout_container">
          <div>
            <div>
              <CheckoutTable />
              <p class="text text-center">Choose your payment method</p>
              <div className="Pagos">
        <div className="form-check">
          <input
            class="payment_method_inputPP"
            type="radio"
            name="flexRadioDefault"
            id="PayPal"
            value="1"
            checked={buySelect == "1" ? true : false}
            onChange={select}
          />
          <label class="form-check-labelPP" for="PayPal" value="PayPal">
          <img
            src="https://res.cloudinary.com/dbepwtmru/image/upload/v1669739509/paypalhoover_ojruhq.png"
            width="100"
            height="100"
          />
          </label>
        </div>
        <div class="form-check">
          <input
            class="payment_method_inputPP"
            type="radio"
            name="flexRadioDefault"
            id="MercadoPago"
            value="2"
            checked={buySelect == "2" ? true : false}
            onChange={select}
          />
          <label class="form-check-labelPP" for="MercadoPago" value="MercadoPago">
            <img
              src="https://res.cloudinary.com/dbepwtmru/image/upload/v1669739509/mercadopago_hoover_wx4egf.png"
              width="100"
              height="100"
            />
          </label>
        </div>
        </div>
              <div class="checkoutrow">
                <div colSpan="5" class="checkout">
                  <div class="d-grid gap-2 col-6 mx-auto p-5">
                    <button
                      class="btn btn-primary"
                      type="button"
                      onClick={() => paypal()}
                    >
                      Checkout!
                    </button>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
    </>
  );
}

export default Carting;
