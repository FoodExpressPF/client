// Libraries
import { Route, Redirect, Switch } from "react-router-dom";
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

function App() {
  const { isAuthenticated } = useAuth0();
  const RequireAuth = ({ children }) => {
    // if (!isAuthenticated) return <Redirect to="/" />;
    return children;
  };

  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/passed" component={Passed} />
        <Route exact path="/denegated" component={Denegated} />
        <RequireAuth>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/foods/:id">
            <Detail />
          </Route>
          <Route path="/admin">
            <AdminRoutes />
          </Route>
          <Route path='/client'>
            <ClientDashboard/>
          </Route>
        </RequireAuth>
      </Switch>
    </>    
  );
}

export default App;
