import React, { useState } from "react";
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
    <>
      <h3>Carrito</h3>
      <span>
        cantidad carrito: {Cart.items?.length} {/*Hacer lo de la bolita*/}
      </span>
      <article>
        {Cart.items &&
          Cart.items.map((item) => {
            return (
              <div key={item.id}>
                <hr />
                <span>Name: {item.name}</span>
                <br />
                <span>Price: ${item.price}</span>
                <br />
                <div>
                  <span>Cantidad: {item.count}u </span>
                  <button
                    className=""
                    type="button"
                    onClick={() => Cart.discount(item)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <button
                    className=""
                    type="button"
                    onClick={() => Cart.add(item)}
                  >
                    {" "}
                    +{" "}
                  </button>
                  <br />
                  <span>Subtotal: ${item.price * item.count}</span>
                </div>
                <button
                  className=""
                  type="button"
                  onClick={() => Cart.remove(item)}
                >
                  {" "}
                  X{" "}
                </button>
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
          {Cart.items && (
            <button className="" type="button" onClick={() => Cart.reset()}>
              {" "}
              Reset{" "}
            </button>
          )}
          <button onClick={() => total()}>Buy</button>
        </div>
      )}
    </>
  );
}

export default ReservationCart;
