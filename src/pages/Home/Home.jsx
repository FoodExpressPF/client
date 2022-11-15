import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getPlates } from "../../redux/actions.js";
import useLocalStorage from "../../hooks/useLocalStorage.js";
import { PLATES_PER_PAGE } from "../../utils/constants.js";

import Filters from "../../components/Filters/Filters.jsx";
import Card from "../../components/Card/Card.jsx";
import Paginated from "../../components/Paginated/Paginated.jsx";
import ReservationCart from "../../components/ReservationCart/ReservationCart.jsx";

import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allPlate = useSelector((state) => state.plates);
  const Cart = useLocalStorage("CART", "");

  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const indexLastPlate = currentPage * PLATES_PER_PAGE;
  const indexFirstPlate = indexLastPlate - PLATES_PER_PAGE;
  const currentPlates = allPlate.slice(indexFirstPlate, indexLastPlate);

  const paginated = (pageNumber) => setCurrentPage(pageNumber);
  const handleOnClick = () => setMenu(!menu);

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
            src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1668061068/recipes/Dise%C3%B1o_sin_t%C3%ADtulo_7_ia4jsg.png"
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
                    </Link>
                    <Card
                      id={c.id}
                      name={c.name}
                      rating={c.rating}
                      price={c.price}
                      image={c.image}
                      Cart={Cart}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <Paginated
              platesPerPage={PLATES_PER_PAGE}
              setCurrentPage={setCurrentPage}
              allPlate={allPlate.length}
              paginated={paginated}
              currentPage={currentPage}
            />
          </div>
        </>
      )}
      <ReservationCart Cart={Cart} />
    </div>
  );
}
