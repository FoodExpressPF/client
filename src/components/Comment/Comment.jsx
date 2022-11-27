import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getComment } from "../../redux/actions";
import './Comment.css'

export default function Commment({id}) {
    const dispatch = useDispatch()

console.log(id, 'id comment')
    useEffect(() => { 
        dispatch(getComment(id)); //
      }, [dispatch]);

   
    const comentarios = useSelector((state)=>state.allComents);   
    console.log(comentarios, 'COMENTATIOS')
    // console.log('user', comentarios[2].user.name)

   
    let stars = []   
  
    
    comentarios?.map(a => {       
        stars.push(a.rating)
    })
    // console.log(comment, 'comentrarios')
    // console.log(stars, 'star')
    
    let suma = 0;

for(let i=0; i<stars.length; i++) {
    suma = suma + stars[i]
}
let num  = 0

if(suma===0) {
    num=0
}
else{
    num = (suma/stars.length)
    // console.log(num)
}
let prom = Math.round(suma/stars.length)

    // console.log(prom, 'PROMEDIO')

return (
<div>    
<h4 className="text">Rating: {prom}  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></h4>
<div className="comments">
        <ul>
            {comentarios.map(coment =>{
                return <>
                <li className="text">{coment.comment}, {!coment.user ? <></>: coment.user.name}</li>
                </>
            })}
        </ul>
    </div>

</div>
)
}