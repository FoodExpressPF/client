import React, { useEffect } from 'react';
import Tabs from './Tabs'
import { useAuth0 } from '@auth0/auth0-react';

import s from './admin.module.css'
import { useSelector } from 'react-redux';

const AdminDashboard = () => {

  const {user} = useAuth0();

  return (
    <div className={s.adminContainer}>
     {user
        ? <h2>{`Hi ${user.given_name}! Welcome to the Admin Dashboard`}</h2>
        :<h2>Welcome to the Admin Dashboard</h2>
     }
     <section className={s.firstPanel}>
        <div>
          <h4>Total Users</h4>
          <h4>54</h4>
        </div>

        <div>
          <h4>Total Orders</h4>
          <h4>56</h4>
        </div>

        <div>
          <h4>Total billed</h4>
          <span>$</span><h4>123456</h4>
        </div>
     </section>
     <section>
      <Tabs></Tabs>
     </section>
    </div>
  );
};

export default AdminDashboard;