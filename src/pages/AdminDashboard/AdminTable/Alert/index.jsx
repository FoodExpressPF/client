import React from 'react';

// Styles
import s from './alert.module.css'

const Alert = ({setDeleteItem, funDelete, setActiveModal}) => {


  const handleDelete = ()=>{
    setActiveModal(true)
    funDelete()
    setDeleteItem({id:'', activeDelete:false})
    
  }


  return(
    <div className = {s.backdropAlert}>
      <div className={s.alertContainer}>
        
        <h3>Are you sure you want to delete this item?</h3>
        <div className={s.buttonsBox}>
          <button
            className='btn btn-primary mx-2'
            onClick={handleDelete}
          >
            Yes
          </button>

          <button
            className='btn btn-danger mx-2'
            onClick={()=>setDeleteItem({id:'', activeDelete:false})}
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}
  


export default Alert;