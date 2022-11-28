import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { getAllTables, getUser, postReserve } from "../../redux/actions";

function Reserve() {
  const dispatch = useDispatch();
  const Cart = useLocalStorage("CART", "");
  const table = useSelector((state) => state.allTables);

  const [date, setDate] = useState("not specified");
  const [capacity, setCapacity] = useState("not specified");
  const [Time, setTime] = useState("not specified");
  const { user, isAuthenticated } = useAuth0();
  const history = useHistory();
  const emailUser = isAuthenticated ? { email: user.email } : "";
  const foodsCartId = [];
  for (let i = 0; i < Cart.items.length; i++) {
    foodsCartId.push(Cart.items[i].id);
  }
  let available = [];

  useEffect(() => {
    if (table.length === 0) dispatch(getAllTables());
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
      if (available.length >= 2) return alert("table occupied that date");
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
        alert("orden creada");
        history.push("/home");
      }
    }
  };

  const onChangeHandlerDate = (e) => setDate(e.target.value);
  const onChangeHandlerChair = (e) => setCapacity(e.target.value);
  const onChangeHandlerTime = (e) => setTime(e.target.value);

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

      <button onClick={() => tables()}>prueba</button>
    </>
  );
}

export default Reserve;
