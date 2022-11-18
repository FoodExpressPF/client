import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import s from './tabs.module.css'

const Tabs = () => {
  const location = useLocation()
  const [url, setUrl]= useState('/admin')

  useEffect(()=>{
    setUrl(location.pathname)
  },[location])


  return (
    <div className={s.tabsContainer}>
      <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link 
          className={url==='/admin'? 'nav-link active': 'nav-link'} 
          to="/admin"
        >
          Stats
        </Link>
      </li>
      <li className="nav-item">
        <Link 
          className={url==='/admin/users'? 'nav-link active': 'nav-link'} 
          to="/admin/users"
        >
        Users
        </Link>
      </li>
      <li className="nav-item">
        <Link 
          className={url==='/admin/products'? 'nav-link active': 'nav-link'} 
          to="/admin/products"
        >
          Products
        </Link>
      </li>
      <li className="nav-item">
        <Link 
          className={url==='/admin/orders'? 'nav-link active': 'nav-link'}  
          to="/admin/orders"
        >
          Orders
        </Link>
      </li>
      </ul>
    </div>
  );
};

export default Tabs;