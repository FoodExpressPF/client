import React, { useState } from 'react';
import axios from 'axios';

//Libraries
import { useFormik } from "formik";
import validationSchema from "./formValidations";
import { useDispatch } from 'react-redux';
import OrderForm from './OrderForm';
// import { getUser } from '../../../redux/actions';
// import axios from "axios";


const EditOrder = ({item, get}) => {

  const initialValues = item

  const [loading, setLoading] = useState(false);
  const[response, setResponse] = useState('');
  const [activeModal,setActiveModal] = useState(false)

  ///////////////////////////////////////////////ONSUBMIT
  const onSubmit = (e) => {
    setLoading(true);

    axios({
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      url: `/orders/${item.id}`,
      data: values,
    })   
     .then(response => {
      setResponse(
        `${response.data.message}`)

      console.log('response',response)
      setLoading(false)    
     })
     .catch(error=>{
      console.log('error',error)
      // setResponse(error.response.data)
      setLoading(false)
     });
     formik.resetForm()
     get()
  }


    const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const {handleSubmit, handleChange, handleBlur, errors, touched,values} = formik
  console.log(errors)

  const handleClick = () => {
    setActiveModal(true)
  }

  return (  
    <div>
      <h2 className='mt-3 text-center'>Edit an Order</h2>

      
      { activeModal
        && 
        <Modal 
          setActiveModal={setActiveModal} 
          loading={loading} 
          response={response} 
        /> 
      }

<OrderForm 
        type='Edit'
        errors = {errors}
        touched={touched}
        values = {values}
        handleChange = {handleChange}
        handleBlur = {handleBlur}
        handleClick = {handleClick}
        handleSubmit = {handleSubmit}
      />
  </div>
);
};

export default EditOrder;