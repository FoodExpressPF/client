import React, { useState } from 'react';
import Loading from '../../../components/Loading/Loading'

import Paginated from '../../../components/Paginated/Paginated'

import s from './adminTable.module.css'
import Table from './Table';

const AdminTable = ({ form,formEdit,name, data, cols, funDelete,get }) => {

  const [activeNew, setActiveNew] = useState(false)
  const [activeEdit, setActiveEdit] = useState(false)
  const [editForm, setEditForm] = useState({...formEdit})
  const [currentPage, setCurrentPage] = useState(1)
  const handleNewProduct = ()=> {setActiveNew(!activeNew)}
  
  // useEffect(()=>{
  //   s

  // })
  

  const handleDelete = (id) => {
    funDelete(id)
  }

  const handleEdit = (item) => {
  console.log('edit',item)
  setActiveEdit(!activeEdit)
  setEditForm({...editForm, props:{item,get}})
  
  }

  const itemsPerPage = 5
    let dataToRender = data.slice(((currentPage*itemsPerPage)-itemsPerPage),(currentPage*itemsPerPage))
    console.log(dataToRender)

    const paginated = (number) =>{
      setCurrentPage(number)
    }
 
  return (
    <>
    {
      activeNew && 
      <div className={s.modalForm} >
        <div className={s.buttonContainer}>
          <button
            className="btn-close" aria-label="Close"
            onClick={()=>{setActiveNew(false); setActiveEdit(false)}}
          >
          </button>
        </div>
        {form}
      </div>
    }

   {
      activeEdit && 
      <div className={s.modalForm} >
        <div className={s.buttonContainer}>
          <button
            className="btn-close" aria-label="Close"
            onClick={()=>{setActiveNew(false); setActiveEdit(false)}}
          >
          </button>
        </div>
        {editForm}
      </div>
    }

    <div 
      className={s.tableContainer}  
    >
      <div className ={s.tableHead}>
        <h2>{name}s</h2>
        <button 
          className='btn btn-primary' 
          type='button'
          onClick={handleNewProduct}
        >
          New {name} 
        </button>
      </div>

      {data.length === 0? <Loading />
      :<Table 
         cols={cols}
         dataToRender={dataToRender}
         handleEdit={handleEdit}
         handleDelete={handleDelete}
        />
      }
      
    </div>

    <Paginated 
      itemsPerPage={5} 
      dataLength={data.length} 
      currentPage={currentPage} 
      setCurrentPage={setCurrentPage} 
      paginated={paginated} 
    />

    </>
  );
};

export default AdminTable;