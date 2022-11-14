import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDetail, getClean } from '../../Actions/actions';
import style from "./Detail.module.css"

export default function Detail() {
    const dispatch = useDispatch();
    let details = useSelector((state) => state.detail);
    let { id } = useParams();

    useEffect(() => {
        dispatch(getDetail(id));
        return dispatch(getClean());
    }, [dispatch, id])

    return(
        <div>
            <div className={style.main_container}>
            <Link to='/home'>
                    <button class="btn btn-primary h-25">Back</button>
                </Link>

<<<<<<< HEAD
                {
                    !!details ?
                        <div class="card" className={style.sub_container}>
                            <div className={style.container_elements}>
                            <div className={style.image_container} class="text-center">
                                <img className={style.the_image} src={details.image} width="360px" heigth="450px" alt="Loading"/>
                            </div>
                            <div className={style.text_container}>
                            <h2 class="h1 font-weight-bold mb-4 text-white card-title">{details.name}</h2>
                            <p class="card-text text-white">Price: ${details.price}</p>
                            <p class="card-text text-white">Type: {details.type}</p>
                            <p class="card-text text-white"> Rating: {details.rating}⭐</p>
                            <p class="card-text text-white">Reviews: {details.reviews? details.reviews.join(" - "): "Loading"}</p>
                            <p class="card-text text-white">Description: {details.description}</p>
                            <p></p>
                            </div>
                        </div>
                        </div>
                        :
                        <div>
                            <p>Loading...</p>

                        </div>
                }
=======
        {!!details ? (
          <div className={style.sub_container}>
            <div className={style.container_elements}>
              <div className={style.image_container} class="text text-center">
              <br/>
                <img
                  className={style.the_image}
                  src={details.image}
                  width="360px"
                  heigth="450px"
                  alt="Loading"
                />
                <br/><br/>

              </div>
              <div className={style.text_container}>
                <h2 className="h1 font-weight-bold mb-4 text-white card-title">
                  {details.name}
                </h2>
                <p className="card-text text-white">Price: ${details.price}</p>
                <p className="card-text text-white">Type: {details.type}</p>
                <p className="card-text text-white">
                  {" "}
                  Rating: {details.rating}⭐
                </p>
                <p className="card-text text-white">
                  Reviews:{" "}
                  {details.reviews ? details.reviews.join(" - ") : "Loading"}
                </p>
                <p className="card-text text-white">
                  Description: {details.description}
                </p>
                <p></p>
              </div>
>>>>>>> 45534930a4f68f6efbba1460f0e2ee996a25051a
            </div>
        </div>
    )
}
