import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import Home from './Components/Home';

import ProductsForm from './Components/ProductsForm'
import Detail from './Components/Detail/Detail';
import NavBar from './Components/NavBar';


function App() {
  return (
    <BrowserRouter>
     <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/createProduct' element={<ProductsForm />} />
        <Route path='/foods/:id' element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
