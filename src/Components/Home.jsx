import React from "react";
import {useState, useEffect} from 'react'
import {
    getFoods
} from  '../Actions/actions'
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Pagination from "./Paginated";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

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
            <h1>principal page</h1>

            <div>
                <div>
                    <SearchBar/>
                </div>
                <Pagination
                platesPerPage={platesPerPage}
                allPlate={allPlate.length}
                pagination={pagination}
                />
            </div>
            <div>
                {
                    currentPlates?.map((c) =>{
                        return(
                            <div key={c.id}>   
                            <Link to={"/foods/" + c.id}>
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
                        )
                    })
                }
            </div>
           
        </div>
    )
}