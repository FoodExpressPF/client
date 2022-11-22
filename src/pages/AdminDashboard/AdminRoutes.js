// Libraries
import { Route } from "react-router-dom";

import React from 'react';
import Tabs from "./Tabs";
import AdminDashboard from ".";
import Users from "./Users";
import Products from "./Products/Products";
import Orders from "./Orders";

const AdminRoutes = () => {
  return (
    <>
    <AdminDashboard />

      <Route path="/admin/users" component={Users} />

      <Route path="/admin/products" component={Products} />

      <Route path="/admin/orders" component={Orders} />

    </>
  )
};

export default AdminRoutes;