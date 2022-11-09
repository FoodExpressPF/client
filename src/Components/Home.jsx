import React from "react";
import {useState, useEffect} from 'react'
import {
    getFoods
} from  '../Actions/actions'
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";

export default function Home() {
    const dispatch = useDispatch();
    const allPlate = useSelector((state)=> state.plates)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        dispatch(getFoods());
        setLoading(false);
      }, [dispatch]);


    return(
        <div>
            <h1>principal page</h1>


            <div>
                {
                    allPlate?.map((c) =>{
                        return(
                            <div key={c.id}>
                                <Card
                                key={c.id}
                                id={c.id}
                                name={c.name}
                                rating={c.rating}
                                price={c.price}
                                url={c.url}
                                />
                            </div>
                        )
                    })
                }
            </div>
           
        </div>
    )
}