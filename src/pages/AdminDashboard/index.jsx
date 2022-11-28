import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Tabs from './Tabs'

import s from './admin.module.css'
import { useDispatch, useSelector } from 'react-redux';

import { getAllUser, getOrder } from '../../redux/actions';

const AdminDashboard = () => {
  const {user} = useAuth0();

  const stateOrders = useSelector((state) => state.allOrders);
  const stateUsers = useSelector((state) => state.allUsers);

  const [allOrders, setAllOrders] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    if (allOrders.length === 0) dispatch(getOrder());
    setAllOrders(stateOrders);

    if (allUsers.length === 0) dispatch(getAllUser());
    setAllUsers(stateUsers);
  }, []);

  return (
    <div className={s.adminContainer}>
     {user
        ? <h2>{`Hi ${user.given_name}! Welcome to the Admin Dashboard`}</h2>
        :<h2>Welcome to the Admin Dashboard</h2>
     }
     <section className={s.firstPanel}>
        <div className={s.stats}>
          <h5>Total Users</h5>
          <h4>{allUsers.length}</h4>
        </div>

        <div className={s.stats}>
          <h5>Total Orders</h5>
          <h4>{allOrders.length}</h4>
        </div>

        <div className={s.stats}>
          <h5>Total billed</h5>
          <h4>${allOrders.length>0?allOrders.reduce((acumulator, current) => acumulator + current.total,0):0}</h4>
        </div>
     </section>
     <section>
      <Tabs></Tabs>
     </section>
    </div>
  );
};

export default AdminDashboard;