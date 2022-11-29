import React, { useEffect, useState } from 'react';
import axios from 'axios'
import DietTypes from '../../../../components/DietTypes';

import s from './categories.module.css'

const Categories = () => {

  const [managment, setManagment] = useState({
    new:false,
    delete:false
  })
  const [input, setInput] = useState('')
  const [listOfItems, setList] = useState([])

  const getCategories = ()=>{
    axios.get("/types")
    .then(response=>{
      console.log(response.data)
      setList(response.data)
    })
  }

  useEffect(()=>{
    getCategories()
  },[])

  const handleClick = (e)=>{
    e.preventDefault()
    setManagment({...managment,
    [e.target.name]:!(managment[e.target.name])})
  }

  const handleChange = (e) =>{
    setInput(e.target.value)
  }

  const handleCreate = (e)=>{
    e.preventDefault()
    axios.post(`/types/${input}`)
    .then(()=>{
      setInput('')
      getCategories()
    })
   
  }

  return (
    <div className={s.container}>
      <h2>Category Managment</h2>
      <div className={s.buttonBox}>
        <button
         name='new'
          className='btn btn-primary mx-2'
          onClick={handleClick}
        >
          New
        </button>

        <button
          className='btn btn-danger mx-2'
        >
          Delete
        </button>

        <div className={s.editBox}>
         {
          managment.new && 
          <form className='d-flex'>
            <input 
              type="text"
              name='name'
              className='form-control w-50'
              placeholder="Enter Category's name" 
              value={input}
              onChange={handleChange}
            />
            <button 
              type='submit'
              className='btn btn-primary'
              onClick={handleCreate}
            >
              Create
            </button>
          </form>
         }
         {
          managment.delete && <></>
         }
        
        </div>
      </div>
      
      <h3>Current Categories</h3>
      <DietTypes listOfItems={listOfItems} />
      
    </div>
  );
};

export default Categories;