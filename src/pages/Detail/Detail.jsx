import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, clearDetail } from '../../redux/actions.js';

import style from "./Detail.module.css";

function Detail() {
  const dispatch = useDispatch();
  let details = useSelector((state) => state.detail);
  let { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
    return dispatch(clearDetail());
  }, [dispatch, id])

  return <>
    <div className={style.main_container}>
      <Link to='/home'>
        <button class="btn btn-primary h-25">Back</button>
      </Link>

      { !!details ?
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

        : <div><span>Loading...</span></div>
      }
    </div>
  </>
}

export default Detail;