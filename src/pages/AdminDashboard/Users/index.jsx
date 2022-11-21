import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NewUser from '../../../components/Forms/NewUser';
import AdminTable from '../AdminTable';

const Users = () => {
  const [allUsers, setAllUsers] = useState([])
  console.log(allUsers)

  const getUsers = ()=>{
    axios.get('/user')
    .then(response=> setAllUsers(response.data))
  }

  useEffect(()=>{
    getUsers()
  },[])

  const cols = ['id', 'name' ,'email', 'direction', 'number_phone', 'role']

  const deleteUser = (id)=>{
    axios.delete(`/user/delete?id=${id}`)
    .then(response=> {console.log(response.data); getUsers()})
    .catch(error=>console.log(error))
  }
  return (
    <div>
      <AdminTable 
        data={allUsers} 
        form={<NewUser/>} 
        name='User' 
        cols={cols}
        funDelete={deleteUser} />      
    </div>
  );
};

export default Users
;