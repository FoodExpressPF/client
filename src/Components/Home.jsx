import React from "react";
import {
    getFoods
} from  '../Actions/actions'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";

export default function Home() {
    const dispatch = useDispatch();
    const allPlate = useSelector((state)=> state.plates)


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