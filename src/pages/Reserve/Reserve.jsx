import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  buy,
  buyPaypal,
  getAllTables,
  getUser,
  postReserve,
} from "../../redux/actions";

function Reserve() {
  const dispatch = useDispatch();
  const Cart = useLocalStorage("CART", "");
  const table = useSelector((state) => state.allTables);
  const numberTables = useSelector((state) => state.tables.capacity)

  const [date, setDate] = useState("not specified");
  const [capacity, setCapacity] = useState("not specified");
  const [Time, setTime] = useState("not specified");
  const { user, isAuthenticated } = useAuth0();
  const [buySelect, setBuySelect] = useState(1);
  const history = useHistory();
  const emailUser = isAuthenticated ? { email: user.email } : "";
  const foodsCartId = [];
  for (let i = 0; i < Cart.items.length; i++) {
    foodsCartId.push(Cart.items[i].id);
  }
  const paypal = () => {
    let price = Cart.items.reduce((acum, act) => {
      return acum + act.price * act.count;
    }, 0);
    buySelect == 1
      ? dispatch(buyPaypal({ price })).then((url) => window.open(url, `${url}`))
      : dispatch(buy({ price })).then((url) => window.open(url, `${url}`));
  };
  let available = [];

  useEffect(() => {
    if (table.length === 0) dispatch(getAllTables());
    available = table.filter((obj) => obj.reservation_data === date);
    if (available.length >= numberTables) alert("available");
  });

  const tables = async () => {
    if (
      capacity === "not specified" ||
      Time === "not specified" ||
      date === "not specified"
    )
      return alert("please complete all required information");
    else {
      available = await table.filter((obj) => obj.reservation_data === date);
      if (available.length >= tables) return alert("table occupied that date");
      else {
        dispatch(getUser(emailUser)).then((data) =>
          dispatch(
            postReserve({
              status: "reserved",
              capacity: parseInt(capacity),
              hour: Time,
              reservation_data: date,
              reserve_owner: data.payload.id,
              foods: foodsCartId,
            })
          )
        );
        paypal();
        alert("orden creada");
      }
    }
  };

  const onChangeHandlerDate = (e) => setDate(e.target.value);

  const onChangeHandlerChair = (e) => setCapacity(e.target.value);
  const onChangeHandlerTime = (e) => setTime(e.target.value);
  const select = (e) => {
    setBuySelect(e.target.value);
  };
  return (
    <>
      <h1>Reservar</h1>
      <input
        type="date"
        name="name"
        onChange={onChangeHandlerDate}
        placeholder="Shipping Address"
        value={date}
      />
      <input type="time" onChange={onChangeHandlerTime}></input>
      <select onChange={onChangeHandlerChair}>
        <option value="not specified">number of chairs</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="PayPal"
          value="1"
          checked={buySelect == "1" ? true : false}
          onChange={select}
        />
        <label class="form-check-label" value="PayPal">
          <img
            src="https://res.cloudinary.com/dbepwtmru/image/upload/v1669221456/4202081logopaymentpaypalsocialsocialmedia-115606_115695_bkggmq.png"
            width="30"
            height="30"
          />
          PayPal
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="MercadoPago"
          value="2"
          checked={buySelect == "2" ? true : false}
          onChange={select}
        />
        <label class="form-check-label" value="MercadoPago">
          <img
            src="https://res.cloudinary.com/dbepwtmru/image/upload/v1669221456/unnamed_hbfgk7.png"
            width="30"
            height="30"
          />
          Mercado Pago
        </label>
      </div>
      <button onClick={() => tables()}>prueba</button>
    </>
  );
}

export default Reserve;
