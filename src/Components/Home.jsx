import React from "react";
import {useState, useEffect} from 'react'
import {
    getFoods
} from  '../Actions/actions'
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Pagination from "./Paginated";
import { Link } from "react-router-dom";
import '../CSS/Card.css'

export default function Home() {
    const dispatch = useDispatch();
    const allPlate = useSelector((state)=> state.plates)
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1); 
    const platesPerPage = 4;
    const indexLastPlate = currentPage * platesPerPage
    const indexFirstPlate = indexLastPlate - platesPerPage
    const currentPlates = allPlate.slice(indexFirstPlate,indexLastPlate)
    

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        setLoading(true);
        dispatch(getFoods());
        setLoading(false);
      }, [dispatch]);


    return(
        <div>
        
<div className="titleHome">
<h1>food express</h1>
</div>
            <div>
                <Pagination
                platesPerPage={platesPerPage}
                allPlate={allPlate.length}
                pagination={pagination}
                />
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    currentPlates?.map((c) =>{
                        return(
                            <div className="col">
                            <div className="card" key={c.id}>   
                            <Link className="textLink" to={"/foods/" + c.id}>
                                <Card
                                key={c.id}
                                id={c.id}
                                name={c.name}
                                rating={c.rating}
                                price={c.price}
                                image={c.image}
                                />
                                </Link>                          
                            </div>
                                </div>
                        )
                    })
                }
            </div>
           
        </div>
    )
}