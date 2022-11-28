import useLocalStorage from "../../hooks/useLocalStorage";
import { Link } from "react-router-dom";
import "./Checkout.css";


const CheckoutTable = ({id}) => {
    const Cart = useLocalStorage("CART", "");

      if(!Cart.items.length){
        return(
          <>
            <div>
              <div class="checkout_container">
                Your shop cart is empty,
                go back and fill it
                <div>
                <Link to="/home">
                  <div class="d-flex gap-2 col-6 mx-auto p-5 p-md-3">
                    <button
                    class="btn btn-primary"
                    type="button">
                      Back
                    </button>
                  </div>
                </Link>
                </div>
              </div>
            </div>
          </>
        )
      }

    return (
      <div class="table-responsive">
        <table class="table table-hover text-center">
            <thead class="sape">
              <tr>
                <th scope="col">Photo</th>
                <th scope="col">Qty</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">#</th>
              </tr>
            </thead>
            <tbody>
            {Cart.items &&
            Cart.items.map((item) => {
            return (
            <tr>
              <td>
                  <img src={item.image} alt="" class="checkoutImage"/>
              </td>
              <td class="botones btn-group p-0 p-md-5">
                  <button
                    class="btn btn-warning m-0 m-md-1"
                    type="button"
                    onClick={() => Cart.discount(item)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <button class="btn btn-warning bg-white px-1 m-0 m-md-1" disabled>{item.count}</button>
                  <button
                    class="btn btn-warning m-0 m-md-1"
                    type="button"
                    onClick={() => Cart.add(item)}
                  >
                    {" "}
                    +{" "}
                  </button>
              </td>
              <td class="p-0 p-md-5">{item.name}</td>
              <td class="p-0 p-md-5">${item.price * item.count}</td>
              <td><button class="remove bg-transparent border-0 p-0 p-md-5"><img src="https://i.imgur.com/h1ldGRr.png" alt="X" onClick={() => Cart.remove(item)}/></button></td>
              </tr>
              
            );
          })}
          <tr class="totalprice">
            <td class="light">Total:</td>
            <td colSpan="2">&nbsp;</td>
            <td colSpan="2">$
            {Cart.items &&
              Cart.items.reduce((acum, act) => {
                return acum + act.price * act.count;
              }, 0)}
              </td>
          </tr>
          <br/>
          </tbody>
        </table>
      </div>
    );
}

export default CheckoutTable;
