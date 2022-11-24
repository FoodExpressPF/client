import React, { useState } from 'react';
import Loading from '../../../components/Loading/Loading'

import s from './adminTable.module.css'

const AdminTable = ({ form,formEdit,name, data, cols, funDelete,get }) => {
  let counter = 1
  const sum = () => {counter++}
  const [activeNew, setActiveNew] = useState(false)
  const [activeEdit, setActiveEdit] = useState(false)
  const [editForm, setEditForm] = useState({...formEdit})
  const handleNewProduct = ()=> {setActiveNew(!activeNew)}
  
  // useEffect(()=>{
  //   s

  // })
  console.log('form',editForm)
  

  const handleDelete = (id) => {
    funDelete(id)
  }

  const handleEdit = (item) => {
  console.log('edit',item)
  setActiveEdit(!activeEdit)
  setEditForm({...editForm, props:{item,get}})
  
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
      :
       <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            {cols?.map(col=>
              <th scope="col" key={col}>{col}</th>
              )
            }
          </tr>
        </thead>
        <tbody>
          {data?.map(row=>
             <tr key={row.id}>
               <th scope="row">{counter}</th>
               {cols?.map(col=>{
                return(
                 col==='image'
                 ?<td key={`${row.img}${col}`}><img className={s.dataImage} src={row.image} alt={row.name}/></td>
                 :<td key={`${row.id}${col}`}>{row[col]}</td>
                )
               }
                )}
                <td>
                  <button
                    className='btn btn-outline-danger mb-1'
                    onClick={()=>handleDelete(row.id)}
                  >
                    Delete
                  </button>
                  <button
                    className='btn btn-outline-primary'
                    onClick={()=>handleEdit(row)}
                  >
                    Edit
                  </button>
                </td>
                {sum()}
             </tr>
         
          )}
            
      
        </tbody>
      </table>}
      
    </div>
    </>
  );
};

export default AdminTable;