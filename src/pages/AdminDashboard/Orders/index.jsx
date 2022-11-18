import React from 'react';
import AdminTable from '../AdminTable';

const Orders = () => {
  const cols = ['Id', 'User' ,'Total', 'Status', 'Comments']
  return (
    <div>      
      <AdminTable name='Order' />
    </div>
  );
};

export default Orders;