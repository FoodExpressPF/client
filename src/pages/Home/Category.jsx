import React, { useState } from 'react';
import Filters from '../../components/Filters/Filters';

import s from './category.module.css'

const Category = () => {

    const [menu, setMenu] = useState(false);

    const handleOnClick = () => setMenu(!menu);

    return (
        <>
        
  <nav className={s.categoryNav}>
    <ul className={s.categoryNavContent}>
        <li>
          <a className="nav-link" aria-current="page" href="#MainCourses">Main Courses</a>
        </li>
        <li>
          <a className="nav-link" aria-current="page" href="#Appetizer">Appetizer</a>
        </li>
        <li>
          <a className="nav-link" aria-current="page" href="#Salads">Salads</a>
        </li>
        <li>
          <a className="nav-link" aria-current="page" href="#Desserts">Desserts</a>
        </li>
        <li>
          <a className="nav-link" aria-current="page" href="#Beverages">Beverages</a>
        </li>
        <li>
            <div>
                <button
                    className={s.buttonFiltros}
                    onClick={() => handleOnClick()}
                >
                    <svg
                        className="bi bi-sliders"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path
                        fillRule="evenodd"
                        d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
                        />
                   </svg>
                 Filters
                </button>
            </div>
        </li>
    </ul>
    
  </nav>
  <Filters menu={menu} />
    </>
            
    );
};

export default Category;