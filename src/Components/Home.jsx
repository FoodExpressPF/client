import React from "react";
import {
    getFoods
} from  '../Actions/actions'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export function Home() {
    const dispatch = useDispatch();
    const allPlate = useSelector(state=> state.plates)


    return(
        <div>
            <h1>principal page</h1>


            <div>
                {
                    allPlate?.map((c) =>{
                        return(
                            <div>
                                <Card/>
                            </div>
                        )
                    })
                }
            </div>
           
        </div>
    )
}