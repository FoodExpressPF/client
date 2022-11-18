import React from 'react';
import { useSelector } from 'react-redux';
import NewUser from '../../../components/Forms/NewUser';
import AdminTable from '../AdminTable';

const Users = () => {
   const allUsers = useSelector((state) => state.Users);
   console.log(allUsers)

  // useEffect(()=>{
  //   if(allUsers.length==0) dispatch(getUs())
  // },[])

  const cols = ['Id', 'Name' ,'Email', 'Direction', 'Number Phone', 'Role']
  return (
    <div>
      Soy Users
      <AdminTable form={<NewUser/>} name='User' cols={cols} />      
    </div>
  );
};

export default Users
;