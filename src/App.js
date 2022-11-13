import "./App.css";

//Libraries
import { Route, Redirect, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

//Components
import LandingPage from "./Components/LandingPage/LandingPage";
import Home from "./Components/Home";
import ProductsForm from "./Components/ProductsForm";
import Detail from "./Components/Detail/Detail";
import NavBar from "./Components/NavBar";

function App() {
  const { isAuthenticated } = useAuth0();

  const RequireAuth = ({children})=>{
  if(!isAuthenticated) return <Redirect to="/" />
  return children
}

  return (
    <>
    <Switch>
    <Route exact path="/" component={LandingPage} />
      <RequireAuth>
        <Route path="/home">
          <NavBar />
          <Home />
        </Route>
        <Route path="/createProduct">
          <NavBar />
          <ProductsForm />
        </Route>
        <Route path="/foods/:id">
          <NavBar />
          <Detail />
        </Route>
      </RequireAuth>
    </Switch>
    </>
  );
}

export default App;
