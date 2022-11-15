import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getPlates } from "../../redux/actions.js";

import Filters from "../../components/Filters/Filters.jsx";
import Card from "../../components/Card/Card.jsx";
import Paginated from "../../components/Paginated/Paginated.jsx";

import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allPlate = useSelector((state) => state.plates);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const platesPerPage = 3;
  const indexLastPlate = currentPage * platesPerPage;
  const indexFirstPlate = indexLastPlate - platesPerPage;
  const currentPlates = allPlate.slice(indexFirstPlate, indexLastPlate);
  const [menu, setMenu] = useState(false);

  const paginated = (pageNumber) => setCurrentPage(pageNumber);
  const handleOnClick = () => setMenu(!menu);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = cart.reduce(
      (total, product) => total + product.price * product.cantidad,
      0
    );
    setTotal(totalPrice);
  }, [cart]);

  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) ?? [];
    setCart(cartLS);
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const agregar = (product) => {
    if (cart.some((artic) => artic.id === product.id)) {
      const cartUpadte = cart.map((artic) => {
        if (artic.id == product.id) {
          artic.cantidad = product.cantidad;
        }
        return artic;
      });
      setCart(cartUpadte);
    } else {
      setCart([...cart, product]);
    }

    console.log(cart);
  };
  const updateCant = (product) => {
    const cartUpadte = cart.map((artic) => {
      if (artic.id == product.id) {
        artic.cantidad = product.cantidad;
      }
      return artic;
    });
    setCart(cartUpadte);
  };

  const deleteCart = (id) => {
    const cartUpdate = cart.filter((artic) => artic.id !== id);
    setCart(cartUpdate);
  };
  useEffect(() => {
    dispatch(getPlates()).then(() => setLoading(false));
  }, [dispatch]);

  return (
    <div className="back">
      <div>
        <h1 className="titleHome">
          <br />
          <img
            className="logo"
            src="https://res.cloudinary.com/dwbxodfqn/image/upload/v1668367314/express%20food/logo_naranja_png_yokalc.png"
            alt="logo"
            align="left"
          />
        </h1>
      </div>
      <nav className="navbar">
        <div>
          <div className="btn-group">
            <button
              className="buttonFiltros bg-dark"
              onClick={() => handleOnClick()}
            >
              <svg
                className="bi bi-sliders"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
                />
              </svg>
              Filtros
            </button>
          </div>
        </div>
      </nav>

      <Filters menu={menu} setCurrentPage={setCurrentPage} />

      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="div-container">
            {currentPlates?.map((c) => {
              return (
                <div className="col" key={c.id}>
                  <div className="card">
                    <Link className="textLink" to={"/foods/" + c.id}>
                      {" "}
                    <Card
                      id={c.id}
                      name={c.name}
                      rating={c.rating}
                      price={c.price}
                      image={c.image}
                      agregar={() => agregar(c)}
                      />
                      </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <Paginated
              platesPerPage={platesPerPage}
              setCurrentPage={setCurrentPage}
              allPlate={allPlate.length}
              paginated={paginated}
              currentPage={currentPage}
            />
          </div>
        </>
      )}
      <h3>Carrito</h3>
      <article>
        {cart.map((c) => {
          return (
            <div>
              <h5>name:{c.name}</h5>
              <h5>price:{c.price}</h5>
              <div>
                <h5>cantidad:</h5>
                <select
                  value={c.cantidad}
                  onChange={(e) =>
                    updateCant({
                      cantidad: e.target.value,
                      id: c.id,
                    })
                  }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <h5>subtotal:{c.price * c.cantidad}</h5>
              <button type="button" onClick={() => deleteCart(c.id)}>
                Eliminar
              </button>
            </div>
          );
        })}
      </article>
      <div>
        <h4>total:</h4>
        {total > 0 ? (
          <>
            <p>{total}</p>
          </>
        ) : (
          <p>carrito vacio</p>
        )}
      </div>
    </div>
  );
}
