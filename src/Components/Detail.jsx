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
                    <button>Back</button>
                </Link>

                {
                    details.length > 0 ?
                        <div>
                            <h1 >{details[0].name}</h1>
                            <img src={details[0].image} alt="not found" width="600px" height="400px" />
                            <h3> Price: ${details[0].price}</h3>
                            <h3>Type: {details[0].type}</h3>
                            <h3> Rating: {details[0].rating}</h3>
                            <h3>Reviews: {details[0].reviews? details[0].reviews.join(" - "): "Loading"}</h3>
                            <h3>Description: {details[0].description}</h3>
                        </div>
                        :
                        <div>
                            <p >Loading...</p>

                        </div>
                }
            </div>
        </div>
    )
}
