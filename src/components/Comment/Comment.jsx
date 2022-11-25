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
    console.log(comentarios)
    // console.log('com2', comentarios.reviews[0].rating)

    let comment = [];
    let stars = []   
    
    comentarios.reviews?.map(a => {
        comment.push([a.comment, a.rating])
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
<h5>rating: {prom}</h5>
<div className="comments">
{/* <h3>{comment.map(b => (<ul>{b[1]}</ul>))}</h3> */}
<h6>{comment.map(a => (<ul>{'" ' + a[0] + ' "'}</ul>))}</h6>
</div>

</div>
)
}