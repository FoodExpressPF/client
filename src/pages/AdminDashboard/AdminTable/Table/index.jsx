import React from 'react';

import s from '../adminTable.module.css'

const Table = ({cols, dataToRender, handleDelete, handleEdit }) => {
  return (
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
          {dataToRender?.map(row=>
             <tr key={row.id}>
               <th scope="row">{dataToRender.indexOf(row)+1}</th>
               {cols?.map(col=>{
                return(
                 col==='image'
                 ?<td key={`${row.img}${col}`}><img className={s.dataImage} src={row.image} alt={row.name}/></td>
                 :<td key={`${row.id}${col}`}>{row[col].toString()}</td>
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
             </tr>
         
          )}
            
      
        </tbody>
      </table>
  );
};

export default Table;