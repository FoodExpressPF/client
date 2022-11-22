import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlates } from '../../../redux/actions';
import ProductsForm from '../../ProductsForm/ProductsForm';
import AdminTable from '../AdminTable';

const Products = () => {
  const statePlates = useSelector((state) => state.plates);
  const [allPlates, setAllPlates] = useState([])
  const dispatch = useDispatch()
  console.log(statePlates)

  const deleteProducts = (id)=>{
    axios.delete(`/foods/${id}`)
    .then(response=> {console.log(response.data),dispatch(getPlates()) })
    .catch(error=>console.log(error))
  }

  useEffect(()=>{
    if(allPlates.length===0)dispatch(getPlates())
    setAllPlates(statePlates)
  },[statePlates])

  const cols = ['image', 'name' ,'description', 'type', 'price', 'rating']
  return (
    <div>
      <AdminTable 
        form={<ProductsForm/>} 
        name='Product' 
        data={allPlates} 
        cols={cols}
        funDelete= {deleteProducts}
      />      
    </div>
  );
};

export default Products;