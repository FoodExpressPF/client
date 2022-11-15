import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { TYPES_FOODS, SWITCH_HANDLER } from '../../utils/constants.js';
import { INITIAL_FILTERS } from '../../utils/initialObjects.js';
import { filterQueryParser } from '../../utils/parsers.js';
import { getByFilters } from '../../redux/actions.js';

import './Filters.css';

function Filters({ menu }) {
  const dispatch = useDispatch();
  const [ filters, setFilters ] = useState(INITIAL_FILTERS);

  const onChangeHandler = (e) => setFilters({...filters, [e.target.name]: e.target.value});
  const onToggleHandler = (e) => setFilters({...filters, [e.target.name]: !filters[e.target.name]});
  const onSwitchHandler = (e) => setFilters({...filters, [e.target.name]: SWITCH_HANDLER[filters[e.target.name]]});
  
  const onResetHandler = () => setFilters(INITIAL_FILTERS);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(getByFilters(filterQueryParser(filters)));
  }

  return (
    <div className='bacKfilters'>

    <form className={`menu-container ${menu && "open"}`} onSubmit={onSubmitHandler}>      
        <div className='container'>
          <input
            type="search"
            name="name"
            className="form-control"
            onChange={onChangeHandler}
            placeholder="Search for a plate..."
            value={filters.name}
            />
          <label htmlFor="name"></label>
        </div>    
        <div className='container'>
      <label className='offert'>
        Type:
      </label>
      <select
        name="type"
        className="slct"
        onChange={onChangeHandler}
        value={filters.type}
        >
        {TYPES_FOODS.map((type, i) =>
          <option value={type} key={i}>
            {type}
          </option>
        )}
      </select>

        </div> 

      <div className='container'>
      <h4 className='offert'>order  </h4>
      <button
      className='button1'
        name="asc"
        type="button"
        onClick={onToggleHandler}
        >
        {/* cambiar por ícono */}
        {filters.asc ? 'asc' : 'desc'}
      </button>
      <h4 className='offert'>by  </h4>

      <button
      className='button1'
        name="sortby"
        onClick={onSwitchHandler}
        >
        {/* cambiar por ícono */}
        {filters.sortby}
      </button>
      </div>
      <div className='container'>

            <label className="offert" htmlFor="offer">
        OFFERT!!
      </label>
      <button
      className='button1'
      name="offer"
      type="button"
      onClick={onSwitchHandler}
      >
        {/* cambiar por ícono */}
        {filters.offer}
        
      </button>
      </div>
              <div
              className='containerGO'>

      <button
      className='button2'
      type="submit"
      
      onClick={onSubmitHandler}
      >
        <i className="fas fa-search">Go</i>
      </button>

      <button
      className='button2'
      type="button"       
      onClick={onResetHandler}
      >
        {/* cambiar por ícono */}
        Reset
      </button>
          </div>
    </form>
        </div>
  )
}

export default Filters;