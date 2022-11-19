import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlates } from '../../../redux/actions';
import ProductsForm from '../../ProductsForm/ProductsForm';
import AdminTable from '../AdminTable';

const Products = () => {
  const allPlates = useSelector((state) => state.plates);
  const dispatch = useDispatch()
  console.log(allPlates)

  useEffect(()=>{
    if(allPlates.length==0) dispatch(getPlates())
  },[])
  const cols = ['image', 'name' ,'description', 'price', 'rating']
  return (
    <div>
      <h2>Soy products</h2>
      <AdminTable form={<ProductsForm/>} name='Product' data={allPlates} cols={cols} />      
    </div>
  );
};

export default Products;