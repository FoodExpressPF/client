import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminTable from '../AdminTable';

const Orders = () => {
  const cols = ['state', 'total' , 'createdAt','coments', 'address']
  const [allOrders, setAllOrders] = useState([])
  console.log(allOrders)

  const getOrders = ()=>{
    axios.get('/orders')
    .then(response=> {
      response.data.map((e)=>e.createdAt = new Date(e.createdAt).toLocaleDateString("en-US"))
      setAllOrders(response.data)
    })
  }

  const deleteOrder = (id)=>{
    axios.delete(`/orders/${id}`)
    .then(response=> {console.log(response); getOrders()})
    .catch(error=>console.log(error))
  }

  useEffect(()=>{
    getOrders()
  },[])
  
  return (
    <div>      
      <AdminTable 
        name='Order'
        data={allOrders}
        cols={cols}
        funDelete={deleteOrder}

      />
    </div>
  );
};

export default Orders;