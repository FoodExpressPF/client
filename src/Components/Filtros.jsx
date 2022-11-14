import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TYPES_FOODS, SWITCH_HANDLER } from '../utils/constants.js';
import { INITIAL_FILTERS } from '../utils/initialObjects.js';
import { filterQueryParser } from '../utils/parsers.js';
import { getByFilters } from '../Actions/actions.js';
import '../CSS/Filtros.css';

export default function Filtros({ menu }){
  const dispatch = useDispatch();
  const [ filters, setFilters ] = useState(INITIAL_FILTERS);

  const onChangeHandler = (e) => setFilters({...filters, [e.target.name]: e.target.value});
  // const onToggleHandler = (e) => setFilters({...filters, [e.target.name]: !filters[e.target.name]});
  const onSwitchHandler = (e) => setFilters({...filters, [e.target.name]: SWITCH_HANDLER[filters[e.target.name]]});
  
  const onResetHandler = () => setFilters(INITIAL_FILTERS);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(getByFilters(filterQueryParser(filters)));
  }
  console.log(filters.asc,filters.type)

  return (
    <form className={`menu-container ${menu && "open"}`} onSubmit={onSubmitHandler}>
      <div className="input-group justify-content-center">
        <div className="form-outline w-50">
          <input
            type="search"
            name="name"
            className="form-control"
            onChange={onChangeHandler}
            placeholder="Search for a plate..."
            value={filters.name}
          />
          <label className="form-label" htmlFor="name"></label>
        </div>
      </div>
      <label htmlFor="type">
        Type
      </label>
      <select
        name="type"
        className="slct"
        onChange={onChangeHandler}
        value={filters.type}
        defaultValue={TYPES_FOODS[0]}
      >
        {TYPES_FOODS.map((type, i) =>
          <option value={type} key={i}>
            {type}
          </option>
        )}
      </select>

      <select
      className="slct"
        name="asc"
        value={filters.asc ? 'asc' : 'desc'}
      >
        <option value={null} onClick={e => onChangeHandler(e)} disabled>Alphabetic</option>
        <option onClick={e => onChangeHandler(e)}value="asc">Asc</option>
        <option onClick={e => onChangeHandler(e)}value="desc">Desc</option>
      </select>

      <button
      className='button1'
        name="sortby"
        onClick={onSwitchHandler}
      >
        {/* cambiar por ícono */}
        {filters.sortby}
      </button>

      <label className="form-check-label" htmlFor="offer">
        OFFERT!!
      </label>
      <button
        name="offer"
        type="button"
        onClick={onSwitchHandler}
      >
        {/* cambiar por ícono */}
        {filters.offer}
      </button>
        
      <button
        type="submit"
        className="btn btn-primary h-25"
        onClick={onSubmitHandler}
      >
        <i className="fas fa-search">Go</i>
      </button>

      <button
        type="button"
        className="btn btn-primary h-25"
        onClick={onResetHandler}
      >
        {/* cambiar por ícono */}
        Reset
      </button>
    </form>
  )
}