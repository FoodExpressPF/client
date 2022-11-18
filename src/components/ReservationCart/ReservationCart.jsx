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

  if(!Cart.items.length){
    return(
      
      <div className="cartContainer sticky-top">
      <img src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"
      className="decoration_image"
      />
      <h3 class="fs-1 d-flex justify-content-center">My cart</h3>
      <img className="cart_image"
        src="https://res.cloudinary.com/dbepwtmru/image/upload/v1668744345/foods_sketch_fkwkau.png"
      />
      </div>
    )
  }
  return (
    <div className="cartContainer sticky-top">
      <img src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"
      className="decoration_image"
      />
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
                <span className="d-flex justify-content-between mb-3">
                  <h5 class="fw-bold">
                    {item.name}
                  </h5>
                <button
                  className="remove_button"
                  type="button"
                  onClick={() => Cart.remove(item)}
                >
                  {" "}
                  X{" "}
                </button>
                
                </span>
                <div class="d-flex justify-content-center">
                  
                  <button
                    className="amount_button d-flex justify-content-center"
                    type="button"
                    onClick={() => Cart.discount(item)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span> <h5>{item.count}u </h5></span>
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
          <span className="d-flex justify-content-center pb-3">
          <button className="toPayment_button" onClick={() => total()}>
            Proceed to payment $
            {Cart.items &&
              Cart.items.reduce((acum, act) => {
                return acum + act.price * act.count;
              }, 0)}
          </button>
          </span>
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
