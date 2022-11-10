import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDetail, getClean } from '../Actions/actions';

export default function Detail() {
    const dispatch = useDispatch();
    let details = useSelector((state) => state.detail);
    let { id } = useParams();

    useEffect(() => {
        dispatch(getDetail(id));
        return dispatch(getClean());
    }, [dispatch, id])

    console.log(details)
    console.log(details.length)

    return(
        <div>
            <div>
            <Link to='/home'>
                    <button class="btn btn-primary h-25">Back</button>
                </Link>

                {
                    !!details ?
                        <div class="card">
                            <img src={details.image} class="w-25 mx-auto" alt="not found"/>
                            <h3 class="card-title">{details.name}</h3>
                            <p class="card-text">Price: ${details.price}</p>
                            <p class="card-text">Type: {details.type}</p>
                            <p class="card-text"> Rating: {details.rating}</p>
                            <p class="card-text">Reviews: {details.reviews? details.reviews.join(" - "): "Loading"}</p>
                            <p class="card-text">Description: {details.description}</p>
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
