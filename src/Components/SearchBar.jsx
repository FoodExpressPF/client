import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPlates } from "../Actions/actions";

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
            dispatch(getPlates(name));
            setname("");
        }else{
            alert("Please submit an existing plate");
        }
    }

    return(
        <div>
            <input type="text" onCahnge={handleInput} placeholder="Search for a plate..." value={(name)}/>
            <button type="submit" onClick={handleSubmit}>
                Go
            </button>
        </div>
    )
}