import useLocalStorage from "../../hooks/useLocalStorage";


const CheckoutTable = ({id}) => {
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

    return (
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
              <td class="btn-group p-5">
                  <button
                    class="btn btn-warning m-1"
                    type="button"
                    onClick={() => Cart.discount(item)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <button class="btn btn-warning bg-white px-1 m-1" disabled>{item.count}</button>
                  <button
                    class="btn btn-warning m-1"
                    type="button"
                    onClick={() => Cart.add(item)}
                  >
                    {" "}
                    +{" "}
                  </button>
              </td>
              <td class="p-5">{item.name}</td>
              <td class="p-5">${item.price * item.count}</td>
              <td><button class="remove bg-transparent border-0 p-5"><img src="https://i.imgur.com/h1ldGRr.png" alt="X" onClick={() => Cart.remove(item)}/></button></td>
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
    );
}

export default CheckoutTable;
