import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { filterDietType } from 'redux/actions';
import axios from 'axios'

//STYLES
import s from './dietTypes.module.css'

const DietTypes = ({ listOfItems}) => {

    // const dispatch = useDispatch()
    // const navigate = useNavigate()
    // const {type} = useSelector(state=>state.filters)
    const [active,setActive] = useState('')

    const handleOnClick = (e)=>{
        e.preventDefault()
        setActive (e.target.name)
    }

    

    

    return (
        <div>
            {/* {all &&<button 
                className={active==='false'?s.active:s.button} 
                name= 'false' 
                onClick={handleOnClick}>Todos
            </button> } */}
            
            {listOfItems &&
                listOfItems.map((e,idx)=>(
                    <button 
                        className={active===e.name?s.active:s.button} 
                        name={e.name?e.name:e} 
                        onClick={handleOnClick} 
                        key={idx}>
                        {e.name}
                    </button>
                ))
            }
            
        </div>
    );
};

export default DietTypes;