import React from "react";
import { useState, useEffect } from "react";
import { getFoods } from "../Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Paginated from "./Paginated/Paginated";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import "../CSS/Card.css";
import "../CSS/Home.css";
import Filtros from "./Filtros";

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

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleOnClick = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    dispatch(getFoods()).then(() => setLoading(false));
  }, [dispatch]);

  return (
    <div className="back">
      <div>
        <h1 className="titleHome">
          <br/>

          <img
            src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1668061068/recipes/Dise%C3%B1o_sin_t%C3%ADtulo_7_ia4jsg.png"
            alt="logo"
            align="left"
            className="logo"/>
            </h1>
      </div>
      <nav className="navbar">
        <div>
          <div className="btn-group">
            <button className="buttonFiltros bg-dark" onClick={() => handleOnClick()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-sliders"
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

      <Filtros 
        menu={menu} 
        setCurrentPage={setCurrentPage}
      />

      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          

          <div className="row row-cols-1 row-cols-md-3 g-4">
            {currentPlates?.map((c) => {
              return (
                <div className="col">
                  <div className="card" key={c.id}>
                    <Link className="textLink" to={"/foods/" + c.id}>
                      <Card
                        key={c.id}
                        id={c.id}
                        name={c.name}
                        rating={c.rating}
                        price={c.price}
                        image={c.image}
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
    </div>
  );
}
