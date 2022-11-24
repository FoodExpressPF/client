import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clearDetail } from "../../redux/actions.js";
import Loading from "../../components/Loading/Loading";

import style from "./Detail.module.css";
import useLocalStorage from "../../hooks/useLocalStorage.js";

function Detail() {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.detail);
  const { id } = useParams();
  console.log(details);
  const Cart = useLocalStorage("CART", "");

  useEffect(() => {
    dispatch(getDetail(id));
    return dispatch(clearDetail());
  }, [dispatch, id]);

  const add = () => {
    const name = details.name;
    const id = details.id;
    const price = details.price;
    const image = details.image;

    Cart.add({ id, name, price, image });
  };
  return (
    <>
      <div className={`${style.main_container}`}>
        <Link to="/home">
          <button className="btn btn-primary h-25">Back</button>
        </Link>

        {details.name ? (
          <div className={`card-detail ${style.sub_container}`}>
            <button onClick={() => add()}>Add to cart</button>
            <div className={style.container_elements}>
              <div className={`${style.image_container}`}>
                <img
                  className={style.the_image}
                  src={details.image}
                  alt="Loading"
                />
              </div>
              <div className={style.text_container}>
                {details.onStock === true ? (
                  <h3 className={style.activado}>In stock</h3>
                ) : (
                  <h4 className={style.desactiviado}>Not in stock</h4>
                )}
                <h2 className="h1 font-weight-bold mb-4 text-white card-title">
                  {details.name}
                </h2>
                <p className="card-text text-white">Price: ${details.price}</p>
                <p className="card-text text-white">Type: {details.type}</p>
                <p className="card-text text-white">
                  Rating: {details.rating}⭐
                </p>
                <p className="card-text text-white">
                  Description: {details.description}
                </p>
                <p className="card-text text-white">
                  Reviews:{" "}
                  {details.reviews
                    ? details.reviews.join(" - ")
                    : "No reviews yet"}
                </p>
                <br></br>
                <br></br>
                {/* <span className={style.shop_buttons}>
                <button className={style.remove_button}>-</button>
                <p className="card-text text-white"></p>
                <button className={style.add_button}>+</button>
              </span>
              <div className={style.shop_end}><button>Add to cart</button></div> */}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Loading />
          </div>
        )}
      </div>
    </>
  );
}

export default Detail;
