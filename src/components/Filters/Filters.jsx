import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from './Searchbar/SearchBar.jsx';
import { TYPES_FOODS, SWITCH_HANDLER } from '../../utils/constants.js';
import { INITIAL_FILTERS } from '../../utils/initialObjects.js';
import { filterQueryParser } from '../../utils/parsers.js';
import { getByFilters } from '../../redux/actions.js';
import './Filters.css';

function Filters({ menu }) {
  const dispatch = useDispatch();
  const [ filters, setFilters ] = useState(INITIAL_FILTERS);
  const [ input, setInput ] = useState("")
  const [ selectedInput, setSelectedInput ] = useState("");
  const allPlate = useSelector((state) => state.plates);

  useEffect(() => {
    onChangeHandler(input);
  },[input])

  const onChangeHandler = (e) => setFilters({...filters, name: e});
  const onTypeHandler = (e) => setFilters({...filters, [e.target.name]: e.target.value});
  const onToggleHandler = (e) => setFilters({...filters, [e.target.name]: !filters[e.target.name]});
  const onSwitchHandler = (e) => setFilters({...filters, [e.target.name]: SWITCH_HANDLER[filters[e.target.name]]});
  
  const onResetHandler = (e) => {
    e.preventDefault();
    dispatch(getByFilters(filterQueryParser(INITIAL_FILTERS)));
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(getByFilters(filterQueryParser(filters)));
  }

  return (
    <div className='bacKfilters'>
    <form className={`menu-container ${menu && "open"}`} onSubmit={onSubmitHandler}>
        <div className='filter-container'>
          <SearchBar
            data={allPlate}
            input={input}
            setInput={setInput}
            selectedInput={selectedInput}
            setSelectedInput={setSelectedInput}
            onChange={onChangeHandler}
          />
        </div>
        <div className='type_container'>
          <label className='offert'>
            Type:
          </label>
          <select
            name="type"
            className="slct"
            onChange={onTypeHandler}
            value={filters.type}
            defaultValue={TYPES_FOODS[0]}>
            <option value="">
              All
            </option>
          
            {TYPES_FOODS.map((type, i) =>
              <option value={type} key={i}>
                {type}
              </option>
            )}
          </select>
        </div>
        <hr/><hr/>
        <div className='filter-container'>
          <label className='offert'>
            Order:
          </label>
          <button
            className='button1'
            name="asc"
            type="button"
            onClick={onToggleHandler}
            >
              {filters.asc ? 'asc' : 'desc'}
          </button>
          <label className='offert'>by  </label>

          <button
            className='button1'
            name="sortby"
            onClick={onSwitchHandler}
          >
            {filters.sortby}
          </button>
        </div>
        <div className='filter-container'>
          <label className="offert" htmlFor="offer">
            Show offert:
          </label>
          <button
            className='button1'
            name="offer"
            type="button"
            onClick={onSwitchHandler}
          >
            {filters.offer}
          </button>
        </div>
        <hr/><hr/>
        <div className='containerGO'>
          <button
            className='button23'
            type="button"       
            onClick={onResetHandler}
          >
            Reset
          </button>
        </div>
        <div className='containerGO'>
          <button
            className='button23'
            type="submit"
            onClick={onSubmitHandler}
          >
            Go
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
        </div>
        <hr/><hr/>
    </form>
    </div>
  )
}

export default Filters;