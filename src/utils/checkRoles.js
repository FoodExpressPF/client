import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const useCheckRoles = async (email) =>  {
  const response = await axios('user/',{params:{email:email}}) 
  console.log(response)
  if(response.data){
  var isAdmin = response.data.type_user==='Admin'?true:false
  }
  
  return isAdmin
}

export default useCheckRoles;