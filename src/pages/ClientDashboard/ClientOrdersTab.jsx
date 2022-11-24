import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

export default function ClientOrdersTab(){
    
    const [userOrders, setUserOrders] = useState([]);
    const userInfo = useSelector(state => state.user);
    
  

    useEffect(()=>{
        axios.get(`/orders/${userInfo.id}`)
            .then((response)=>{
                console.log(response.data);
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
                    </div>
                </div>
                </>}) 
            }
        </div>
    </>
    );
};