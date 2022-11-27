import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { buy, buyPaypal } from "../../redux/actions"
import { Link } from "react-router-dom";
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

    

  if(!Cart.items.length){
    return(
      <>
      <div>
        <h1 class="text mx-auto text-center">Shopping Cart checkout</h1>
        <div class="checkout_container mx-auto">
          Your shop cart is empty,<br/>
          go back and fill it
          <Link to="/home">
            <button>Back</button>
          </Link>
        </div>
      </div>
      </>
    )
  }


return(
    <>
        <div>
      <h1 class="text mx-auto text-center">Shopping Cart checkout</h1>
    <div class="checkout_container mx-auto">
      <div>
        <div>
          <table border="1" className="table table-striped table-hover">
            <tr class="productitm">
              <th class="text-center">Photo</th>
              <th class="text-center">Qty</th>
              <th class="text-center">Product</th>
              <th class="text-center">Price</th>
            </tr>
            {Cart.items &&
            Cart.items.map((item) => {
            return (
            <tr class="productitm">
              <td align="center">
                  <img src={item.image} alt="" class="checkoutImage"/>
              </td>
              <td class="btn-group d-flex justify-content-center" role="group" aria-label="Basic mixed styles example">
                  <button
                    class="btn btn-warning"
                    type="button"
                    onClick={() => Cart.discount(item)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <button class="btn btn-warning bg-white"> {item.count} </button>
                  <button
                    class="btn btn-warning"
                    type="button"
                    onClick={() => Cart.add(item)}
                  >
                    {" "}
                    +{" "}
                  </button>
              </td>
              <td class="pe-5">{item.name}</td>
              <td class="pe-5">${item.price * item.count}</td>
              <td><button class="remove bg-transparent border-0"><img src="https://i.imgur.com/h1ldGRr.png" alt="X" onClick={() => Cart.remove(item)}/></button></td>
              </tr>
              
            );
          })}
          <tr class="totalprice">
            <hr/>
            <td class="light">Total:</td>
            <td colSpan="2">&nbsp;</td>
            <td colSpan="2"><span class="thick">$
            {Cart.items &&
              Cart.items.reduce((acum, act) => {
                return acum + act.price * act.count;
              }, 0)}
              </span></td>
          </tr>
          <br/>
          </table>
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
          <tr class="checkoutrow">
            <td colSpan="5" class="checkout"><div class="text-center"><button class="btn btn-primary text m-3" onClick={() => paypal()}>Checkout!</button></div></td>
          </tr>
        </div>
      </div>
    </div>
  </div>
    </>
)

}

export default Carting;