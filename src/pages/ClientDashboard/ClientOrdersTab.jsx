import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './ClientOrdersTab.css';
import ReviewModal from './ReviewModal';

export default function ClientOrdersTab(){
    
    const [userOrders, setUserOrders] = useState([]);
    const userInfo = useSelector(state => state.user);
    
  

    useEffect(()=>{
        axios.get(`/orders/${userInfo.id}`)
            .then((response)=>{
                setUserOrders(response.data);
            })
            .catch(err => console.log(err));
    },[]);

   


    return(
    <>
        <div class="accordion accordion-flush">
            {userOrders.length == 0 ?  <p>No orders yet</p> :userOrders.map((order,index) =>{
                return <>
                <div class="accordion-item">
                    <h2 class="accordion-header" id={`flush-heading${index}`}>
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                            orderId#: {order.id} 
                        </button>
                    </h2>
                    <div id={`flush-collapse${index}`} class="accordion-collapse collapse" aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlush">
                        <div class="accordion-body">
                            <p><strong>Coments:</strong> {order.coments}</p>
                            <p><strong>State:</strong> {order.state}</p>
                            <p><strong>Addres:</strong> {order.address}</p>
                            <p><strong>Total:</strong> ${order.total}</p>
                        </div>
                        {order.state == 'done' ? <div  class="alert alert-primary w-75  m-auto " role="alert" >
                            <h4 class="alert-heading ">Gracias por comprar en Food-expres!</h4>
                            <hr />
                            Para nosotros la calidad de nuestro platos es muy importante. 
                              Accede al Link del plato y dejanos tu opinion
                        </div> 
                        : <></>}
                        {order.state == 'done' ? <div class='d-flex'>
                            {order.foods.map((food)=>{
                                return <>
                                    <div class="card" className='foodCard'>
                                        <img src={food.image} class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                        <p class="card-text">{food.name}</p>
                                        <ReviewModal 
                                            foodName={food.name}
                                            foodId={food.id}
                                            userId={userInfo.id}
                                            ></ReviewModal>
                                        </div>
                                    </div>
                                </>})}
                        </div> 
                        : <></>}
                    </div>
                </div>
                </>}) 
            }
        </div>
        
    </>
    );
};