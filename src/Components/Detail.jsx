import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDetail, getClean } from '../Actions/actions';

export default function Detail() {
    const dispatch = useDispatch()
    let { id } = useParams();



    useEffect(() => {
        dispatch(getDetail(id))
        dispatch(getClean())
    }, [dispatch, id])


    let details = useSelector((state) => state.detail);
    console.log(details)

    return(
        <div>
            <div>
            <Link to='/home'>
                    <button class="btn btn-primary h-25">Back</button>
                </Link>

                {
                    details.length > 0 ?
                        <div class="card">
                            <img src={details[0].image} class="w-25 mx-auto" alt="not found"/>
                            <h3 class="card-title">{details[0].name}</h3>
                            <p class="card-text">Price: ${details[0].price}</p>
                            <p class="card-text">Type: {details[0].type}</p>
                            <p class="card-text"> Rating: {details[0].rating}</p>
                            <p class="card-text">Reviews: {details[0].reviews? details[0].reviews.join(" - "): "Loading"}</p>
                            <p class="card-text">Description: {details[0].description}</p>
                        </div>
                        :
                        <div>
                            <p>Loading...</p>

                        </div>
                }
            </div>
        </div>
    )
}
