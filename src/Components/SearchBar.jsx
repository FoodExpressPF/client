import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../CSS/SearchBar.css"

export default function SearchBar({setCurrentPage}){
    const dispatch = useDispatch();
    const [name , setname] = useState("");

    function handleInput(e){
        e.preventDefault(e);
        setname(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault(e)
        if(name !== '' && isNaN(name)){
            setname("");
            setCurrentPage(1)
        }else{
            alert("Please make sure to fill the input correctly");
        }
    }

    return(
        <div class="input-group justify-content-center">
            <div class="form-outline w-75">
                <input type="search" id="form1" class="form-control" onChange={handleInput} placeholder="Search for a plate..." value={(name)}/>
                <label class="form-label" for="form1"></label>
            </div>
            <button type="button" class="btn btn-primary h-25" onClick={handleSubmit}>
                <i class="fas fa-search">Go</i>
            </button>
        </div>
    )
}