import './App.css';
import { Route } from 'react-router-dom';

import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home';
import ProductsForm from './Components/ProductsForm'
import Detail from './Components/Detail';
import NavBar from './Components/NavBar';


function App() {
  return <>
    <Route path='/' exact element={<LandingPage />} />
    <Route path='/home'>
      <NavBar />
      <Home />
    </Route>
    <Route path='/createProduct'>
      <NavBar />
      <ProductsForm />
    </Route>
    <Route path='/foods/:id'>
      <NavBar />
      <Detail />
    </Route>
  </>
}

export default App;
