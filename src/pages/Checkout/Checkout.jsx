import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Link } from "react-router-dom";
import "./Checkout.css"

function Carting(){
  const Cart = useLocalStorage("CART", "");
  console.log(Cart.items,Cart.items.image)

  if(!Cart.items.length){
    return(
      <>
      <br/><br/><br/>
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
        <br/>
        <br/>
        <br/>
        <div>

      <h1 class="text mx-auto text-center">Shopping Cart checkout</h1>

    <div class="checkout_container mx-auto">
      <table>
        <thead>
          <tr>
            <th class="first">Photo</th>
            <th class="second">Qty</th>
            <th class="third">Product</th>
            <th class="fourth">Price</th>
          </tr>
        </thead>
        <tbody>
        
        {Cart.items &&
          Cart.items.map((item) => {
            return (
            <tr class="productitm">
              <td>
              <hr/>
                  <img src={item.image} alt="" class="thumb" width="240" height="120"></img>
              </td>
              <td>
                
                <div class="d-flex justify-content-center">
                  <button
                    className="amount_button"
                    type="button"
                    onClick={() => Cart.discount(item)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span><h5> {item.count} </h5></span>
                  <button
                    className="amount_button"
                    type="button"
                    onClick={() => Cart.add(item)}
                  >
                    {" "}
                    +{" "}
                  </button>
                  </div>
              </td>
              <td>{item.name}</td>
              <td>${item.price * item.count}</td>
              <td><button class="remove bg-transparent border-0"><img src="https://i.imgur.com/h1ldGRr.png" alt="X" onClick={() => Cart.remove(item)}/></button></td>
              </tr>
            );
          })}
          

          {/* <tr class="productitm">
            <td><img src="https://i.imgur.com/tEdRnz4.png" class="thumb"/></td>
            <td><input type="number" value="1" min="0" max="99" class="qtyinput"/></td>
            <td>JavaScript &amp; </td>
            <td>$27.50</td>
            <td><span class="remove"><img src="https://i.imgur.com/h1ldGRr.png" alt="X"/></span></td>
          </tr> */}
          <tr class="totalprice">
            <hr/>
            <td class="light">Total:</td>
            <td colspan="2">&nbsp;</td>
            <td colspan="2"><span class="thick">$
            {Cart.items &&
              Cart.items.reduce((acum, act) => {
                return acum + act.price * act.count;
              }, 0)}
              </span></td>
          </tr>
          <br/>
          Choose payment method
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="PayPal"/>
            <label class="form-check-label" for="PayPal">
              <img src="https://res.cloudinary.com/dbepwtmru/image/upload/v1669221456/4202081logopaymentpaypalsocialsocialmedia-115606_115695_bkggmq.png" width="30" height="30"/>PayPal
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="MercadoPago"/>
            <label class="form-check-label" for="MercadoPago">
              <img src="https://res.cloudinary.com/dbepwtmru/image/upload/v1669221456/unnamed_hbfgk7.png" width="30" height="30"/>Mercado Pago
            </label>
          </div>
          <tr class="checkoutrow">
            <td colspan="5" class="checkout"><div class="text-center"><button class="btn btn-primary text m-3">Checkout Now!</button></div></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    </>
)

}

export default Carting;