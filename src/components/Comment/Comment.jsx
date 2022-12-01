import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getComment } from "../../redux/actions";
import './Comment.css'
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import axios from "axios";


export default function Commment({id}) {

  const [ reviews, setReviews] = useState([])
 
 useEffect(()=>{
  axios.get('reviews/'+id)
  .then(response=> {setReviews(response.data)})
 },[])
 console.log(reviews[0])

 return(
  <>
  {/* <h3>{reviews[0].comment}</h3> */}
  </>
 )
    };