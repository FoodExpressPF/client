import axios from 'axios';
import React, { useState } from 'react';

import s from './adminTable.module.css'

const AdminTable = ({ form,name, data, cols }) => {
  let counter = 1
  const sum = () => {counter++}
  const [activeNewProduct, setActiveNewProduct] = useState(false)
  const handleNewProduct = ()=> setActiveNewProduct(!activeNewProduct)

  const handleDelete = (e,id) => {
    console.log(e,id)
  }

  const handleEdit = () => console.log('edit')
 
  return (
    <>
    {
      activeNewProduct && 
      <div className={s.modalForm} >
        <div className={s.buttonContainer}>
          <button
            className="btn-close" aria-label="Close"
            onClick={handleNewProduct}
          >
          </button>
        </div>
        {form}
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
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                </td>
                {sum()}
             </tr>
         
          )}
            
      
        </tbody>
      </table>
      
    </div>
    </>
  );
};

export default AdminTable;