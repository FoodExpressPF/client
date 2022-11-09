import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../Actions/actions";

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name , setname] = useState("");

    function handleInput(e){
        e.preventDefault(e);
        setname(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault(e)
        if(name !== '' && isNaN(name)){
            dispatch(getByName(name));
            setname("");
        }else{
            alert("Please make sure to fill the input correctly");
        }
    }

    return(
        <div>
            <input type="text" onChange={handleInput} placeholder="Search for a plate..." value={(name)}/>
            <button type="submit" onClick={handleSubmit}>
                Go
            </button>
        </div>
    )
}