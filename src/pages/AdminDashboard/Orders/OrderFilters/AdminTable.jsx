import { useState } from "react";
import React from "react";
import '../../Orders/OrderFilters/AdminTable.css'


export default function AdminTables(){
    const [tables, setTables] = useState(0) 

   function sumar () {
    if(tables < 15){
        setTables(tables +1)
        console.log(tables)

    }
   }

function restar () {
    if(tables >0){
        setTables(tables -1)
    }
}
  
   

 

    

    return(
        <div className="contTables">
            <h3>Tables available</h3>
            <button className="btn12" onClick={sumar}>+</button>
           <h5 className="cant">{tables}</h5>
            <button className="btn12" onClick={restar}>-</button>        
    </div>
    )
}