import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clearDetail } from "../../redux/actions.js";
import Loading from "../../components/Loading/Loading";
import useLocalStorage from "../../hooks/useLocalStorage.js";
import NavBar from '../../components/NavBar/NavBar.jsx';

import "./Detail.css"
// import FormComent from '../../components/Comment/FormComent.jsx';
 import Commment from '../../components/Comment/Comment.jsx';

import { AiOutlineShoppingCart } from "react-icons/ai";
import {Toaster, toast} from "react-hot-toast";



function Detail() {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.detail);
  const { id } = useParams();

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

  return(
    <div >
      <div >
      <NavBar  Cart={Cart} />
      </div>
      <div className='containerDetail'>
          <div className='subContainer'>
             <Link to="/home" className='BackLink'>
               <button className='back'>Back</button>
             </Link>
             {details.name ?
             <div className='containerInfo'>
                        <div className='conteinerImage'>
                             <img className='foodImage' src={details.image? details.image : details.img} alt="Loading" />
                       </div>
                   <div className='Cont'>
                        {details.onStock === true ? (
                        <><h3 className='activado'>In stock</h3><button className='Add' onClick={() => add()}>Add    <AiOutlineShoppingCart onClick={() => toast.success('successfully added')} /></button></>
                        ) 
                        : (
                        <h4 className='desactiviado'>No stock</h4>
                        
                         )}
                       <h2 className="h1 font-weight-bold mb-4 text-white card-title">{details.name}</h2>
                       <p className="card-text text-white">Price: ${details.price}</p>
                       <p className="card-text text-white">Type: {details.type}</p>
                       <p className="card-text text-white">Rating: {details.rating} ⭐ </p>
                       <p className="card-text text-white"> Description: {details.description}</p>
                       {/* <p className="card-text text-white">
                        Reviews:{" "}
                       {details.reviews
                        ? details.reviews.join(" - ") : "No reviews yet"} </p> */}
                        
                          <div className='containerComment'>
                            <Commment
                              id={id}
                                  />
                          </div>
                        <Toaster
                           position='top-center'
                           reverseOrder={false}
                           />
                  </div>
             </div>
             : <div><Loading/></div>}
         </div>
      </div>
    </div>
  )

}

export default Detail;