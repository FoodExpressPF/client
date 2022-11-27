import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';


export default function ReviewModal({foodName, userId, foodId, key}){

    const [fieldsData, setData] = useState({
        comments: '',
        rating: null
    });
    const [errors, setErrors] = useState({
        commentErr: '',
        ratingErr: ''
    });
    const RATING_ERR = 'Rating debe estar entre 0 y 5';

    function handleChange(e){
        if(e.target.id=='rating' &&(e.target.value<=0 || e.target.value>5)) setErrors({...errors,ratingErr: RATING_ERR });
        if(e.target.id=='rating' &&(e.target.value>0 & e.target.value<=5)) setErrors({...errors,ratingErr: '' });
        setData({...fieldsData, [e.target.id]: e.target.value});
    };

    function handleSubmit(){
        if(errors.commentErr == '' && errors.ratingErr == ''){
            console.log(axios.defaults.baseURL);
            axios({
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                url: '/reviews',
                data: {
                    userId: userId, 
                    foodId: foodId, 
                    comment: fieldsData.comments, 
                    rating: fieldsData.rating}
            })
            .then(response => response.data)
            .then(data => alert(JSON.stringify(data)))
            .catch(error => console.log(error.message));
        }else{
            sweetAlert('fijate los campos que onda');
        }
    };
    
    console.log(foodName.substr(0,5));
    return(<>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#foodModal${foodId}`}>
            New Review
        </button>
        <div class="modal fade modal-lg " id={`foodModal${foodId}`} tabindex="-1" aria-labelledby="foodModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h1 class="modal-title fs-5" id="foodModalLabel">FoodReview: {foodName}</h1>
                </div>
                <div class="modal-body">
                    <label for="message-text" class="label">Comments</label>
                    <textarea class="form-control w-100" id="comments" onChange={e => handleChange(e)}></textarea>
                    <label for="recipient-rating" class="label">Rating</label>
                    <input type="number" class="form-control" id="rating" onChange={e => handleChange(e)}/>
                    {errors.ratingErr ? <label class='text-danger'>{errors.ratingErr}</label> : <></>}
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onClick={e=>handleSubmit(e)}>Save changes</button>
                </div>
            </div>
            </div>
        </div>
    </>);
};