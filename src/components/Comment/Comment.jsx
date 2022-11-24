import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getUser } from "../../redux/actions";

export default function Commment() {

    const dispatch = useDispatch()
    useEffect(() => { 
        dispatch(getUser()); //
      }, [dispatch]);

    console.log("de comment", detail)
    const {users} = useSelector((state)=>state);
    // console.log("user", users)

    


    let comment = []

    let stars = []
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
    console.log(num)
}
let prom = Math.round(suma/stars.length)

    

return (
<div>
<h5>rating: {prom}</h5>
<h1>{num}</h1>
</div>
)
}