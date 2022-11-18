import React from "react";
import { useDispatch } from "react-redux";
import { buy } from "../../redux/actions";
import "./ReservationCart.css";

function ReservationCart({ Cart }) {
  const dispatch = useDispatch();

  

  const total = () => {
    let total = Cart.items.reduce((acum, act) => {
      return acum + act.price * act.count;
    }, 0);

    dispatch(buy({ total })).then((url) => (window.location.href = `${url}`));
  };
  return (
    <div className="cartContainer sticky-top">
      <h3 class="fs-1 d-flex justify-content-center">My cart</h3>
      <span>
        {/*cantidad carrito: {Cart.items?.length} Hacer lo de la bolita*/}
      </span>
      <article>
        {Cart.items &&
          Cart.items.map((item) => {
            return (
              <div key={item.id}>
                <hr />
                <span>
                  <h5 class="fw-bold">
                    {item.name}
                  </h5>
                <span className="d-flex justify-content-end">
                <button
                  className="remove_button"
                  type="button"
                  onClick={() => Cart.remove(item)}
                >
                  {" "}
                  X{" "}
                </button>
                </span>
                
                </span>
                <div class="d-flex justify-content-center">
                  
                  <button
                    className="amount_button"
                    type="button"
                    onClick={() => Cart.discount(item)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span> {item.count}u </span>
                  <button
                    className="amount_button"
                    type="button"
                    onClick={() => Cart.add(item)}
                  >
                    {" "}
                    +{" "}
                  </button>
                  <br />
                </div>
                <span>Subtotal: ${item.price * item.count}</span>
              </div>
            );
          })}
      </article>
      {!!Cart.items.length && (
        <div>
          <hr />
          <h5>
            Total: $
            {Cart.items &&
              Cart.items.reduce((acum, act) => {
                return acum + act.price * act.count;
              }, 0)}
          </h5>
          
          <button className="toPayment_button" onClick={() => total()}>
            Proceed to payment $
            {Cart.items &&
              Cart.items.reduce((acum, act) => {
                return acum + act.price * act.count;
              }, 0)}
          </button>
          {/* {Cart.items && (
            <button className="end_buttons" type="button" onClick={() => Cart.reset()}>
              {" "}
              Reset{" "}
            </button>
          )} */}
        </div>
      )}
    </div>
  );
}

export default ReservationCart;
