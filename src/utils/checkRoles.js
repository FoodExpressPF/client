import { useAuth0 } from "@auth0/auth0-react";

function useCheckRoles(role) {
  const roleClaimType = 'http://expressfood.net/roles'
  const { user, isAuthenticated } = useAuth0();
  const roles = isAuthenticated?user[roleClaimType]:[];
  const isIncluded = roles.includes(role);

  if (isIncluded) {
    return true;
  } else {
    return false;
  }
}

export default useCheckRoles;