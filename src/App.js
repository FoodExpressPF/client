// Libraries
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// Pages & Components
import Landing from "./pages/Landing/Landing.jsx";
import Home from "./pages/Home/index.jsx";
import ProductsForm from "./pages/ProductsForm/ProductsForm.jsx";
import Detail from "./pages/Detail/Detail.jsx";
import AdminRoutes from "./pages/AdminDashboard/AdminRoutes.js";
import ClientDashboard from "./pages/ClientDashboard/index.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";

// Styles
import "./assets/styles/globalStyles.css";
import "./assets/fonts/fonts.css";
import Passed from "./pages/postBuy/passed.jsx";
import Denegated from "./pages/postBuy/denegated.jsx";
import Loading from "./components/Loading/Loading.jsx";
import Reserve from "./pages/Reserve/Reserve.jsx";
import useCheckRoles from "./utils/checkRoles.js";
import { useEffect } from "react";

function App() {
  const history = useHistory()
  const { user, isAuthenticated, isLoading } = useAuth0();

  const RequireAuth = ({ children }) => {
    if (!isAuthenticated) return <Redirect to="/" />;
    return children;
  };

  const RequireAdmin = ({children}) =>{
    
      useCheckRoles(user.email)
      .then((response) => {
        console.log('response',response)
        if (!response) return history.replace('/home')
        else if (response=='banned') return history.replace('/banned')
        });
    return children
    }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/reserve" component={Reserve} />
        <Route path="/passed" component={Passed} />
        <Route path="/denegated" component={Denegated} />
        <RequireAuth>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/foods/:id">
            <Detail />
          </Route>
        
          <Route path="/client">
            <ClientDashboard />
          </Route>

          <RequireAdmin>
           <Route path="/admin">
              <AdminRoutes />
           </Route>
          </RequireAdmin>
        </RequireAuth>

        
      </Switch>

      


    </>
  );
}

export default App;
